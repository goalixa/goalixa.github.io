# BFF in Goalixa: How PWA and Services Stay Clean and Scalable

Published: 2026-02-20  
Section: Architecture & Platform

Goalixa uses a BFF (Backend For Frontend) to keep frontend flows simple while backend services stay focused on their own domain logic.

## Quick Summary

- `API Gateway` is the public entry point for API traffic.
- `BFF` shapes and aggregates data specifically for one client (web/PWA).
- Request model: `PWA -> Gateway -> BFF -> domain services`.

## Why BFF Matters

1. Fewer frontend API calls  
The BFF can merge multiple service responses into one payload for the UI.

2. Cleaner service boundaries  
Core services keep domain logic and avoid UI-specific response shaping.

3. Faster frontend iteration  
UI changes can be handled in the BFF layer without repeatedly changing every core service contract.

## Gateway and BFF in One View

```mermaid
flowchart LR
  U["User"] --> P["PWA (app.goalixa.com)"]
  P --> G["API Gateway"]
  G --> B["BFF-Web"]
  B --> A["Auth Service"]
  B --> T["Timer Service"]
  B --> C["App Core Service"]
```

## Example Request Flow

```mermaid
sequenceDiagram
  autonumber
  participant U as User
  participant P as PWA
  participant G as API Gateway
  participant B as BFF-Web
  participant A as Auth Service
  participant T as Timer Service
  participant C as App Core Service

  U->>P: Open dashboard
  P->>G: GET /api/web/dashboard
  G->>B: Forward request
  B->>A: Read user/session
  B->>T: Read active timer data
  B->>C: Read project summary
  A-->>B: auth context
  T-->>B: timer data
  C-->>B: project data
  B-->>G: merged response
  G-->>P: 200 OK
  P-->>U: Render dashboard
```

## Practical Rules

- Keep business rules in core services.
- Keep BFF focused on orchestration and response shaping.
- Version BFF endpoints for safer frontend evolution.
- Apply timeout and retry boundaries for service calls.

## Final Note

BFF is not extra complexity for Goalixa. It is the layer that keeps the product experience clean while service ownership stays clear and scalable.
