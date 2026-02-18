# Services

Goalixa is built as a multi-service platform. Each major capability lives in its own codebase and deployment unit.

## Service Directory Map

| Service | Public Endpoint | Repository Path | Responsibility |
| --- | --- | --- | --- |
| Landing | `https://goalixa.com` | `goalixa-landing/` | Marketing and project entry point |
| PWA | `https://pwa.goalixa.com` | `goalixa-pwa/` | Unified installable frontend shell |
| Auth | `https://auth.goalixa.com` | `goalixa-auth/` | Authentication and token lifecycle |
| App | `https://app.goalixa.com` | `Goalixa-app/` | Core task/time product logic |
| API Gateway | `https://api.goalixa.com` | `k8s/api/` | Routing and backend aggregation |
| Database | Internal | `k8s/postgres/` | PostgreSQL state layer |

## Goalixa App (`Goalixa-app`)

- Flask application with 3-layer structure:
  - Presentation (`app/presentation`)
  - Service (`app/service`)
  - Repository (`app/repository`)
- PostgreSQL as primary data store
- Google OAuth integration support
- Built for modularity and clean dependency flow

## Authentication Service (`goalixa-auth`)

- Standalone auth service
- Dual-token model:
  - Access token (short-lived)
  - Refresh token (rotated and validated in DB)
- HTTP-only cookies and OAuth flow support
- Includes Prometheus metrics endpoint (`/metrics`)

## Unified PWA (`goalixa-pwa`)

- One installable container for Landing/Auth/App experiences
- Hash-based routing
- `iframe + postMessage` bridge for app shell communication
- Vanilla JS architecture with service worker and offline support

## Landing (`goalixa-landing`)

- Static landing page optimized for first-touch experience
- Lightweight deploy profile through Nginx and Docker

## Platform and Infra Components

- Kubernetes manifests in `k8s/` for each service
- API Gateway manifests in `k8s/api/`
- Automation and provisioning through:
  - `goalixa-ansible/`
  - `harbor_setup/`
- Registry and image management with Harbor

## Related Pages

- [Architecture](architecture.md)
- [Operations](operations.md)
- [Posts](posts/README.md)
