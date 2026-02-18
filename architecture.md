# Architecture

This page reflects the current Goalixa architecture from the repositories and docs in `/Users/snapp/Desktop/projects/Goalixa`.

## High-Level Request Flow

<div class="flow-panel">
  <pre><code>Client
  -> Traefik Ingress
    -> goalixa.com         (Landing)
    -> pwa.goalixa.com     (PWA Shell)
    -> auth.goalixa.com    (Auth)
    -> api.goalixa.com     (Gateway)
      -> auth service
      -> app service
      -> landing service
      -> PostgreSQL
</code></pre>
</div>

## Production Domains

| Domain | Main Role |
| --- | --- |
| `goalixa.com` | Public landing |
| `pwa.goalixa.com` | Unified PWA container |
| `app.goalixa.com` | Main application UI/API surface |
| `auth.goalixa.com` | Authentication endpoints |
| `api.goalixa.com` | Central backend gateway |

## Kubernetes Namespace Layout

| Namespace | Components |
| --- | --- |
| `goalixa-landing` | Landing deployment/service |
| `goalixa-pwa` | PWA deployment/service |
| `goalixa-auth` | Auth deployment/service |
| `goalixa-app` | App deployment/service |
| `goalixa-api` | API gateway deployment/service |
| `goalixa-db` | PostgreSQL deployment/service |

## Architecture Principles

- Service isolation by repository and namespace
- Clear separation between auth, app, and frontend shell
- Gateway-mediated backend traffic control
- Infra-as-code workflow through manifests and automation scripts
- Scale-aware design with health checks and autoscaling patterns

## Key Source References

- `docs/ARCHITECTURE.md`
- `docs/NETWORK_FLOW.md`
- `docs/COMPONENTS.md`
- `k8s/README.md`

## Next Deep Dives

- Auth token lifecycle and cookie security model
- PWA shell communication model (`iframe + postMessage`)
- Gateway routing and failure handling paths
