---
title: March 2026: Wartime Challenges & Staging Environment Planning
date: 2026-03-16
category: DevOps
tags: [monthly-recap, march-2026, staging, kustomize, challenges, iran]
author: Amirreza Rezaie
read_time: 4 min
featured: false
---

# March 2026: Wartime Challenges & Staging Environment Planning

March 2026 presented unique challenges - building Goalixa during wartime in Iran with severe internet restrictions. Despite connectivity issues, significant progress was made in infrastructure planning and development workflow improvements.

## Major Theme: Building Under Crisis

### 🇮🇷 Wartime Internet Restrictions

The most significant challenge in March was the internet situation in Iran. Most people had no stable connection, and only a small number could connect using expensive VPN services.

**Personal Posts:**
- [Survive in War Time](#/posts/goalixa-story/survive-in-war-time.md) ⭐ (March 6)
- [Learning in Wartime: Preparing Infrastructure](#/posts/goalixa-story/learning-in-wartime-kubernetes-plan.md) (March 11)

**Challenges Faced:**
- Intermittent internet access
- Cannot access cluster when internet is down
- Cannot deploy changes or fix production bugs quickly
- Simple engineering tasks become difficult

**Adaptation Strategy:**
- Use downtime for deep learning and study
- Plan infrastructure improvements thoroughly
- Focus on what can be done offline
- Prepare for when connectivity returns

**Learning Topics (during downtime):**
- Kubernetes deeper internals
- Cilium for CNI
- Envoy and service mesh patterns
- Production-grade cluster operations

## Infrastructure Improvements

### 🔧 Staging Environment Plan (March 11)

With every code change going straight to production and causing outages, planning began for a staging environment.

**Key Post:** [Why Goalixa Needs Staging](#/posts/devops/why-staging-with-kustomize.md)

**Current Problems:**
- No staging on Kubernetes cluster
- Every deploy risks production
- Buggy changes take the site down
- Hotfixes happen directly on prod (risky)

**Staging Goals:**
- Production-like environment for pre-production testing
- Safe environment to break and learn
- Predictable promotion: dev → staging → production

**Approach: Kustomize Overlays**
- **Base:** Shared manifests for all components
- **Overlays:** `staging` and `production` for environment-specific differences
- **Image Tags:** Same build, promoted by tag not rebuild
- **Config Parity:** Keep env vars/ConfigMaps aligned
- **Ingress:** Separate hostnames (staging.goalixa.com)
- **Secrets:** Same secret manager path pattern

**Parity Checklist:**
- Same services (PWA, API Gateway/BFF, Core API, Auth)
- Same resource types and naming
- Same ingress class and TLS approach
- Environment-specific values in overlays

## Development Workflow Improvements

### 🤖 AI-Assisted Development (March 12)

Implemented better workflows for using Claude effectively to speed up Goalixa development.

**Key Post:** [Using Claude to Speed Up Development](#/posts/software-engineering/using-claude-for-goalixa.md)

**Problems Solved:**
- Every Claude session needed long context
- Auto-generated CLAUDE.md files were low quality
- AI-written code may need refactor but needed quick fixes

**Solution: Service-Level CLAUDE.md**
Each microservice now has a CLAUDE.md with:
- What the service does and main endpoints
- Stack, build, test, lint/format commands
- Run/dev steps and sample .env
- Deploy info (image, tag, kustomize/helm path)
- Contracts (DB/queues/external APIs)
- High-risk areas and tech debt
- Sample prompts for common tasks

**Standard Session Prompt:**
"Use CLAUDE.md, follow coding standards, don't touch secrets, run tests with <cmd>"

**Rules for AI Changes:**
- Keep changes small: one feature/fix per request
- Demand test plan and self-review checklist
- Review all AI-generated code before committing

## February Carryover: Latency Lessons

While the latency incident happened in late February, March brought deeper reflection on the engineering lessons.

**Key Post:** [Latency Taught Me Better Software Engineering](#/posts/software-engineering/latency-taught-me-better-software-engineering.md) ⭐

**Engineering Mindset Shift:**
1. Design for the full request path (not just one service)
2. Keep contracts simple and stable
3. Add observability before scaling complexity
4. Fix bottlenecks before adding more components
5. Cache intentionally where safe and valuable

**Current Focus:**
- Stabilize PWA, API Gateway, and Core API
- Remove avoidable latency from routes
- Enable caching after bug fixes stabilize

## Infrastructure Plans (When Connectivity Returns)

### 📋 Planned Upgrades

When stable internet access returns, the focus will be on:

1. **Kubernetes Cluster Setup**
   - Stand up full cluster
   - Add Cilium for networking and security
   - Implement service mesh with Envoy
   - Adopt professional-grade tooling

2. **Staging Environment**
   - Implement Kustomize overlays
   - Create staging.goalixa.com
   - Establish promotion pipeline
   - Reduce production risk

3. **Monitoring Expansion**
   - Add more per-service metrics
   - Implement SLI/SLO-based alerts
   - Create dashboard views for incident triage
   - Define severity levels and escalation

## Statistics

**Posts Published:** 4 posts
**Major Challenges:** Internet restrictions, wartime conditions
**Infrastructure Planning:** Staging environment designed
**Development Workflow:** AI-assisted development improved
**Learning Focus:** Kubernetes, Cilium, service mesh

## Key Takeaways

1. **Resilience:** Building under crisis requires adaptability and planning
2. **Downtime Productivity:** Use connectivity interruptions for learning and planning
3. **Staging Necessity:** No staging environment = production incidents
4. **AI Workflow:** Structured approach to AI-assisted development improves quality
5. **Infrastructure Debt:** February's migration success means March focuses on reliability

## Personal Reflection

March was emotionally and technically challenging. Building a startup is hard enough without wartime conditions. However, the situation reinforced the importance of:

- **Resilient infrastructure** that can withstand connectivity issues
- **Staging environments** to prevent production incidents
- **Observability** to debug issues when they occur
- **Planning** for when connectivity returns

The learning during downtime (Kubernetes, Cilium, service mesh) will be valuable when implementing these improvements.

## Looking Ahead to April

**April Goals:**
- Implement staging environment with Kustomize
- Deploy Cilium for cluster networking
- Begin service mesh exploration with Envoy
- Expand monitoring and alerting coverage
- Continue building (as internet access allows)

**Priority:** Stabilize infrastructure and reduce deployment risk before adding new features.

---

**Previous Month:** See [February 2026 Recap](#/posts/monthly-recaps/february-2026.md) for the major migration milestone.
