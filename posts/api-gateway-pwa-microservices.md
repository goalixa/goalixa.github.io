# From Fragmented UIs to One PWA: Why API Gateway Is Step One for Real Microservices

Published: 2026-02-19  
Section: Architecture & Platform

Many teams think "microservices" only means splitting backend services. In practice, if UIs are also fragmented (for example, separate auth UI, separate app UI, separate timer UI), product complexity increases and delivery slows down.

A better model for Goalixa is:

- One UI only on `app.goalixa.com` (the PWA)
- One API entry point (`/api` or `api.app.goalixa.com`)
- Independent backend services like `auth`, `timer`, and `app-core` with no UI responsibility

In short:

```text
PWA (app.goalixa.com) -> API Gateway/BFF -> auth / timer / app-core services
```

## Problems We Are Currently Dealing With

Right now, we are facing issues on multiple fronts:

- We currently run multiple subdomains such as `auth.goalixa.com`, `app.goalixa.com`, and others.
- Each subdomain has its own UI and app surface, which creates fragmentation.
- Traffic is currently managed mainly through redirects. It works, but it is hard to scale and harder to reason about.
- Backend traffic and UI traffic are not cleanly separated, which makes routing, security policy enforcement, and debugging more difficult.
- As the system grows, this setup increases operational overhead and slows down product iteration.

This is why we are actively investigating an `API Gateway + BFF` approach.  
With this model, we can manage traffic through clear path-based rules, separate UI concerns from backend concerns, and move toward a more practical microservices architecture.

## Why this is the right direction

1. Unified user experience  
Users do not jump between different UIs. Login, timer, and core product flows stay in one consistent app experience.

2. Faster UI delivery  
One frontend codebase, one design system, and one release flow. Less duplication in forms, state handling, and routing.

3. Cleaner backend boundaries  
When services do not own UI, each service can focus on its domain: `auth` for identity/session, `timer` for scheduling/runs, and so on.

4. Better security and control  
With an API Gateway/BFF model, policies are centralized: auth forwarding, rate limiting, logging, tracing, and error standards.

5. A practical path to real microservices  
This is not only technical separation. It also clarifies ownership, responsibilities, and deployment boundaries.

## What API Gateway/BFF does

A Gateway/BFF gives the PWA one API entry point and handles critical concerns:

- Secure identity propagation to backend services
- Consistent error and response contracts
- CORS handling and lower client complexity
- `correlation-id` for cross-service request tracing
- Aggregation where UI needs combined data from multiple services

## How auth should remain structured

Even with a single UI, auth should remain an independent backend service. Practical baseline:

- Session with `HttpOnly` and `Secure` cookies
- CSRF protection for state-changing endpoints
- Clear endpoints: `login`, `logout`, `refresh`, `me`
- Authorization enforced in backend services (not only in UI)

## Low-risk migration path

1. Discovery: map all current UIs, routes, and dependencies  
2. Contract First: finalize OpenAPI contracts for auth/timer/app  
3. Gateway First: move PWA traffic behind one API entry point  
4. Auth Unification: move all auth UI flows into the PWA  
5. Strangler Rollout: migrate modules gradually with feature flags  
6. Decommission: retire old UIs and enforce strong monitoring

## Summary

Fully separating frontend from services and consolidating UI into one PWA, together with API Gateway, is not a cosmetic change. It is a foundational architecture move that makes the product simpler, safer, and more scalable.

If Goalixa is moving toward practical microservices, this is one of the best starting points.
