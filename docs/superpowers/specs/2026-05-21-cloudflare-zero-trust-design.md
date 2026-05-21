# Cloudflare Zero Trust Implementation Design

**Date:** 2026-05-21
**Author:** Goalixa Infrastructure Team
**Status:** Approved
**Implementation Approach:** Full Zero Trust with WARP + Tunnels

---

## Executive Summary

This design document outlines the implementation of Cloudflare Zero Trust across the Goalixa Kubernetes cluster (4 nodes: master + 3 workers) to achieve complete traffic separation, authentication, and authorization for all infrastructure and application access.

**Goals:**
- Public services (goalixa.com, app.goalixa.com) remain publicly accessible
- Management tools (ArgoCD, Harbor, Grafana) require Zero Trust authentication
- SSH and kubectl access fully authenticated and logged
- All traffic flows through Cloudflare for visibility and control

---

## 1. Architecture Overview

### Traffic Paths

**Public Traffic Path (No Authentication)**
```
Internet → Cloudflare CDN → Cloudflared Tunnel (master node)
  → nginx-ingress (5.75.206.111) → Services
```
- `goalixa.com` → goalixa-landing
- `app.goalixa.com` → goalixa-pwa

**Private Traffic Path (Zero Trust Authentication)**
```
Internet → Cloudflare Access → Cloudflared Tunnel (master node)
  → nginx-ingress → Management Tools
```
- `argocd.goalixa.com` → ArgoCD (email auth required)
- `harbor.goalixa.com` → Harbor (email auth required)
- `monitoring.goalixa.com` → Grafana (email auth required)

**Infrastructure Access Path (WARP Tunnel)**
```
Admin Machine (WARP) → Cloudflare Zero Trust Network
  → Private IP routing → Cluster Nodes
```
- SSH: master:22, worker1:22, worker2:22, worker3:22
- kubectl: master:6443
- Inter-node communication

### Key Principles

1. **Separation of Concerns**: Public apps use tunnels without auth, management tools require Zero Trust
2. **Defense in Depth**: Multiple authentication layers (Cloudflare + app-level)
3. **Zero Trust Network**: No direct IP access to SSH/kubectl
4. **Audit Everything**: Complete logging of all access

---

## 2. Components & Their Roles

### Cloudflare Components

**1. Cloudflare Tunnel (cloudflared)**
- **Location**: Master node (5.75.206.111) as systemd service
- **Purpose**: Outbound-only connections to Cloudflare edge
- **Handles**: All HTTP/HTTPS traffic for 5 domains
- **Config**: `/etc/cloudflared/config.yml`
- **Credentials**: `/etc/cloudflared/tunnel-credentials.json`

**2. Cloudflare Access**
- **Purpose**: Authentication layer for private services
- **Policies**: 3 applications (ArgoCD, Harbor, Grafana)
- **Auth Method**: Email OTP or Google login
- **Session Duration**: 24 hours (configurable)

**3. Cloudflare WARP Client**
- **Location**: Admin machine (macOS/Linux/Windows)
- **Purpose**: Encrypted tunnel for SSH/kubectl access
- **Mode**: Split tunnel (only cluster IPs routed through Cloudflare)
- **Routes**: 4 node IPs + master:6443

**4. Cloudflare Gateway**
- **Purpose**: Network-level policies and logging
- **Policies**:
  - Allow SSH to cluster nodes (device authenticated)
  - Allow kubectl to master:6443
  - Block everything else by default
- **DNS Filtering**: Optional malicious domain blocking

### Cluster Components

**1. nginx-ingress (master node)**
- **Current Role**: L7 routing for HTTP/HTTPS
- **New Role**: Same, receives traffic from cloudflared
- **Changes**: None required

**2. Kubernetes Services**
- **Changes**: None required
- **TLS**: Cloudflare handles termination

**3. Firewall Rules (iptables/ufw)**
- **Before**: Open ports 80, 443, 22, 6443 on public IPs
- **After**:
  - Close 22 (SSH) and 6443 (kubectl)
  - Keep 80/443 open for ingress
  - Allow cloudflared outbound

### Admin Machine Components

**1. WARP Client**
- GUI application with auto-start
- Split tunnel for cluster IPs only

**2. SSH Config**
- No ProxyJump needed
- WARP handles routing transparently

**3. kubectl Config**
- Same kubeconfig
- WARP routes traffic automatically

---

## 3. Implementation Phases

### Phase 1: Setup Cloudflare Account & Tunnel (No Downtime)

**Actions:**
1. Create Cloudflare Zero Trust account (free tier)
2. Install cloudflared on master node
3. Create tunnel named `goalixa-cluster`
4. Configure tunnel for 5 domains
5. Test with preview URLs

**Outcome:** Tunnel running parallel, nothing breaks

**Rollback:** Simply stop cloudflared service

### Phase 2: Migrate Public Services (Brief DNS Propagation)

**Actions:**
1. Update DNS for goalixa.com and app.goalixa.com
2. Configure bypass rules (no authentication)
3. Test thoroughly

**Downtime:** ~5 minutes during DNS propagation

**Rollback:** Revert DNS to original IPs

### Phase 3: Migrate Private Services with Zero Trust Access (No Downtime)

**Actions:**
1. Create Cloudflare Access applications:
   - argocd.goalixa.com (email auth)
   - harbor.goalixa.com (email auth)
   - monitoring.goalixa.com (email auth)
2. Update DNS to point to tunnel
3. Test authentication flow

**Downtime:** None

**Rollback:** Disable Access policies or revert DNS

### Phase 4: Setup WARP Tunnel for SSH/kubectl (No Downtime)

**Actions:**
1. Install WARP client on admin machine
2. Enroll device in Zero Trust organization
3. Configure split tunnel routes (4 cluster IPs)
4. Create Gateway policies:
   - Allow TCP/22 to cluster IPs
   - Allow TCP/6443 to master
5. Test SSH and kubectl through WARP
6. Keep original access working (firewall still open)

**Downtime:** None

**Rollback:** Uninstall WARP, use direct IP access

### Phase 5: Lock Down Firewall (Planned Maintenance)

**Actions:**
1. Close SSH port 22 on all nodes
2. Close kubectl port 6443 on master
3. Test WARP still works
4. Document emergency access procedure

**Downtime:** None for services, SSH/kubectl via WARP only

**Rollback:** Re-open firewall ports

---

## 4. Access Policies & Authentication

### Public Access (No Authentication)

**Applications:** goalixa.com, app.goalixa.com

**Policy:** Allow everyone, no authentication required

### Private Access (Zero Trust Required)

**Application 1: ArgoCD**
```yaml
Application Name: argocd-goalixa
Domain: argocd.goalixa.com
Policy: Admin Email Only
Auth Method: Email OTP or Google OAuth
Session Duration: 24 hours
```

**Application 2: Harbor**
```yaml
Application Name: harbor-registry
Domain: harbor.goalixa.com
Policy: Admin Email Only
Auth Method: Email OTP or Google OAuth
Session Duration: 24 hours
```

**Application 3: Grafana**
```yaml
Application Name: monitoring-grafana
Domain: monitoring.goalixa.com
Policy: Admin Email Only
Auth Method: Email OTP or Google OAuth
Session Duration: 24 hours
```

### Infrastructure Access (WARP + Gateway Policies)

**Gateway Policy 1: SSH Access**
```yaml
Policy Name: Allow SSH to Cluster Nodes
Protocol: TCP
Destination IPs: 5.75.206.111, 5.75.198.10, 91.107.250.5, 65.109.212.122
Destination Port: 22
Action: Allow
Conditions: Device authenticated, User email verified
Logging: Enabled
```

**Gateway Policy 2: kubectl Access**
```yaml
Policy Name: Allow kubectl to Master
Protocol: TCP
Destination IP: 5.75.206.111
Destination Port: 6443
Action: Allow
Conditions: Device authenticated, User email verified
Logging: Enabled
```

**Gateway Policy 3: Default Deny**
```yaml
Policy Name: Block Everything Else
Traffic: All
Action: Block
Priority: Last
```

### Audit Logging

**Logged Information:**
- All authentication attempts (success/failure)
- User email and device information
- Timestamp and source IP
- Session duration
- For SSH/kubectl: destination IP and port

**Retention:** 30 days (free tier), 180 days (paid)

---

## 5. Network Configuration

### Cloudflared Tunnel Configuration

**File:** `/etc/cloudflared/config.yml`

```yaml
tunnel: goalixa-cluster
credentials-file: /etc/cloudflared/tunnel-credentials.json

ingress:
  # Public services
  - hostname: goalixa.com
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      connectTimeout: 30s

  - hostname: app.goalixa.com
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      connectTimeout: 30s

  # Private services (Access enforced by Cloudflare)
  - hostname: argocd.goalixa.com
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      connectTimeout: 30s

  - hostname: harbor.goalixa.com
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      connectTimeout: 30s

  - hostname: monitoring.goalixa.com
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      connectTimeout: 30s

  - service: http_status:404

warp-routing:
  enabled: false

loglevel: info
logfile: /var/log/cloudflared.log
metrics: 0.0.0.0:2000
```

### WARP Split Tunnel Configuration

**Routes through WARP:**
- 5.75.206.111/32 (master)
- 5.75.198.10/32 (worker1)
- 91.107.250.5/32 (worker2)
- 65.109.212.122/32 (worker3)

**Everything else:** Direct internet (bypass WARP)

### DNS Configuration

```dns
# Proxied through Cloudflare
goalixa.com           → TUNNEL (proxied, orange cloud)
app.goalixa.com       → TUNNEL (proxied, orange cloud)
argocd.goalixa.com    → TUNNEL (proxied, orange cloud)
harbor.goalixa.com    → TUNNEL (proxied, orange cloud)
monitoring.goalixa.com → TUNNEL (proxied, orange cloud)

# Emergency direct access (DNS only)
master.goalixa.com    → 5.75.206.111 (DNS only, grey cloud)
worker1.goalixa.com   → 5.75.198.10 (DNS only, grey cloud)
worker2.goalixa.com   → 91.107.250.5 (DNS only, grey cloud)
worker3.goalixa.com   → 65.109.212.122 (DNS only, grey cloud)
```

### Firewall Rules (Final State)

```bash
# Master node - nginx ingress needs HTTP/HTTPS
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -p tcp --dport 443 -j ACCEPT

# Block SSH from public (WARP only)
-A INPUT -p tcp --dport 22 -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p tcp --dport 22 -j DROP

# Block kubectl from public (WARP only)
-A INPUT -p tcp --dport 6443 -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p tcp --dport 6443 -j DROP

# Allow Cloudflare IP ranges (for tunnel)
# (Full list from https://www.cloudflare.com/ips/)
```

---

## 6. Error Handling & Fallbacks

### Cloudflared Tunnel Failures

**Detection:**
```bash
systemctl status cloudflared
# Check tunnel health in dashboard
```

**Auto-recovery:** Systemd restart policy configured

**Fallback:** Point DNS to direct IPs temporarily

### WARP Connection Failures

**Detection:**
```bash
warp-cli status
```

**Recovery:**
```bash
warp-cli connect
# Or re-register if needed
warp-cli registration delete && warp-cli registration new
```

**Emergency Access (Phase 5):**
- Console access via hosting provider
- Temporary firewall rule from console

### Access Policy Lockout

**Prevention:** Test in incognito first, keep emergency admin credentials

**Recovery:**
- Temporarily disable Access policy
- Use kubectl port-forward to bypass Cloudflare

### Gateway Policy Misconfiguration

**Common Issues:**
1. Email mismatch in policy
2. IP not in split tunnel
3. Policy order incorrect

**Debugging:** Check Gateway logs for blocked connections

### Disaster Recovery

**Complete Cloudflare Outage:**
1. Change DNS to direct IPs
2. Use hosting provider console
3. Temporarily open firewall
4. Monitor Cloudflare status
5. Revert when resolved

---

## 7. Testing Strategy

### Pre-Implementation
- Document current state
- Backup configurations
- Verify all services healthy

### Phase 1 Testing
- cloudflared service running
- Tunnel healthy in dashboard
- Preview URLs work

### Phase 2 Testing
- Public DNS updated
- Sites load without auth
- Performance acceptable

### Phase 3 Testing
- Private services require auth
- Email OTP works
- Access logs recording

### Phase 4 Testing
- WARP connects and enrolls
- SSH through WARP works
- kubectl through WARP works
- Split tunnel configured

### Phase 5 Testing
- Firewall rules applied
- Direct access blocked
- WARP access works
- Public services unaffected

### Security Verification
- Port scan shows 22/6443 closed
- Unauthorized access blocked
- Audit logs complete

### Performance Benchmarks
- SSH latency: <200ms
- kubectl latency: <500ms
- Web response: <300ms

---

## 8. Success Criteria

**Functional Requirements:**
- ✅ Public services accessible without authentication
- ✅ Private services require email OTP
- ✅ SSH only accessible through WARP
- ✅ kubectl only accessible through WARP
- ✅ All access logged in Cloudflare dashboard

**Non-Functional Requirements:**
- ✅ <5 minutes downtime during migration
- ✅ Performance within 10% of baseline
- ✅ Emergency access procedure documented
- ✅ Rollback procedures tested

**Security Requirements:**
- ✅ Ports 22 and 6443 closed to public
- ✅ All authentication attempts logged
- ✅ Session management working (24hr TTL)
- ✅ No unauthorized access possible

---

## 9. Post-Implementation

### Monitoring
- Cloudflared service health (Prometheus)
- WARP connection status (script)
- Access log review (daily)
- Gateway policy effectiveness

### Maintenance
- Review logs weekly
- Update policies as needed
- Test emergency procedures quarterly
- Keep cloudflared updated

### Documentation
- Update runbooks with new access procedures
- Document emergency access steps
- Train team on WARP usage
- Update architecture diagrams

---

## 10. References

**Cloudflare Documentation:**
- Zero Trust Documentation: https://developers.cloudflare.com/cloudflare-one/
- Tunnel Setup: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/
- WARP Client: https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/

**Internal Documentation:**
- CLAUDE.md: Project context and infrastructure
- SESSION_NOTES.md: Implementation progress
- Blog Post: pages/sre/cloudflare-zero-trust.mdx

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-05-21 | 1.0 | Initial design | Goalixa Team |
