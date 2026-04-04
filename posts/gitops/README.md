# GitOps

> The GitOps journey with ArgoCD — from initial setup to production-grade deployments.

---

## Overview

Posts in this section document the adoption of GitOps practices in Goalixa using ArgoCD. Learn how we moved to declarative infrastructure, automated deployments, and Git as the single source of truth.

---

## Posts

### [ArgoCD Setup: First Step in Goalixa GitOps Journey (Part 1)](./argocd-first-step.md)
Initial GitOps implementation — bootstrapping ArgoCD, configuring the first application, and establishing the foundation for Git-based deployments.

### [ArgoCD Applications and Sync Strategy in Goalixa (Part 2)](./argocd-applications-sync-strategy.md)
Defining applications and sync behavior in ArgoCD. How to organize applications, configure automated sync policies, and handle deployment strategies.

---

## Topics Covered

- **Declarative Configuration**: Kubernetes manifests stored in Git
- **Automated Sync**: Auto-deployment on image changes
- **Application Management**: Organizing applications by environment
- **Sync Strategies**: Manual vs. automated sync, pruning, self-healing
- **Helm Integration**: Parameter-based deployments

---

## Related

- [DevOps Posts](/posts/devops/README.md) — Infrastructure and operations
- [Architecture Overview](/goalixa-architecture.md) — Complete CI/CD pipeline
