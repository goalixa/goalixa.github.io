# Operations

Goalixa operations are driven by an SRE mindset: reliability first, measurable behavior, and continuous post-incident improvement.

## Observability Stack

- Prometheus metrics collection
- Grafana dashboards
- ELK Stack for logs
- Jaeger for tracing
- Service-level health checks across deployments

## Incident Workflow

1. Detect and classify incident impact
2. Mitigate fast (stabilize user-facing behavior)
3. Identify root cause
4. Publish postmortem
5. Track action items and preventive controls

## Delivery and Automation

- Kubernetes manifests (`k8s/`) for deploy consistency
- Ansible playbooks (`goalixa-ansible/`, `harbor_setup/`) for setup automation
- CI/CD pipelines through GitHub Actions and GitLab CI
- Harbor-based image registry operations
- Terraform/Ansible usage for infrastructure provisioning and node setup

## Operational Checklist (Mark Done)

<div class="checklist-panel">

- [x] Domain and ingress routing defined
- [x] Service split by function (Landing, PWA, Auth, App, API, DB)
- [x] Monitoring stack selected
- [x] Auth hardening with dual-token approach
- [ ] SLO definitions documented for each critical endpoint
- [ ] Postmortem templates fully automated
- [ ] Weekly reliability review cadence published

</div>

## Tooling Focus Areas

- Kubernetes and K3s cluster operations
- Ingress and Traefik ingress controller
- Cloudflare edge and DNS management
- AWS environment operations

## Related Pages

- [Services](services.md)
- [Architecture](architecture.md)
- [About Me](about.md)
