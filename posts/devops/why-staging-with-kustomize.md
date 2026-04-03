# Why Goalixa Needs a Staging Environment (Kustomize Plan)

> **Published:** 2026-03-11 | **Section:** DevOps | **Author:** Amirreza Rezaie

I’m close to serving real user traffic, but every code change goes straight to production. Without staging, I keep hitting outages and “site not reachable” incidents. It’s time to add a staging environment that mirrors production.

## What’s going wrong now

- No staging on the Kubernetes cluster, so every deploy risks production.
- Buggy changes (PWA, API Gateway, Core API) take the site down for users.
- Hotfixes happen directly on prod, which is risky and slow.

## Goal for staging

- Production-like environment to catch issues before users see them.
- Same stack and config as production, but safe to break.
- Predictable promotion path: dev → staging → production.

## Approach: Kustomize overlays

- **Base**: shared manifests for all components (PWA, API Gateway/BFF, Core API, Auth, monitoring).
- **Overlays**: `staging` and `production` only tweak what’s different (hosts, replicas, secrets refs, maybe smaller limits).
- **Image tags**: use the same image build for staging and production; promote by tag, not by rebuilding.
- **Config parity**: keep env vars/ConfigMaps aligned; only staging-specific values (domains, SSO callbacks) change in the overlay.
- **Ingress**: separate hostnames (e.g., `staging.goalixa.com`, `staging-api.goalixa.com`) with the same ingress controller setup.
- **Secrets**: pull from the same secret manager path pattern; avoid hardcoding.

## Parity checklist (staging vs prod)

- Same services: PWA, API Gateway/BFF, Core API, Auth.
- Same middleware: ingress controller, TLS, auth/OIDC flow.
- Same observability: Prometheus/Thanos scrape, Grafana dashboards, alerts (with staging routes/labels).
- Similar resources/limits (can scale replicas down, but keep limits realistic).
- Same deployment method: `kustomize build overlays/staging | kubectl apply -f -`.

## Rollout steps

1) Create `base/` from current production manifests.  
2) Add `overlays/staging/` with only deltas (domains, replicas, secrets refs, smaller HPA targets).  
3) Add `overlays/production/` to codify current prod state.  
4) CI: build once, push image tag; deploy tag to staging via `kustomize build overlays/staging`.  
5) Run smoke tests and basic user flows on staging before promotion.  
6) Promote the same tag to production via `kustomize build overlays/production`.  

## Immediate actions

- Freeze risky prod changes until staging exists.
- Export current prod manifests as the Kustomize base.
- Stand up staging ingress/DNS and hook monitoring/alerts to the same dashboards.
- Define a simple “go/no-go” checklist for promoting from staging to prod.
