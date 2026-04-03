# Latency Taught Me Better Software Engineering

> **Published:** 2026-02-26 | **Section:** Software Engineering | **Author:** Amirreza Rezaie

For a long time, latency was mostly a number on my dashboards.

After moving Goalixa toward API Gateway and a separated frontend/backend model, I started to feel latency directly while using the app myself. That changed how I think about software engineering decisions.

## What Changed in My Mindset

- Performance is a product feature, not only an SRE metric.
- Every network hop must have a clear value.
- Route changes should be treated like high-risk production changes.
- Monitoring is useful, but user-perceived latency is the real truth.

## Engineering Lessons from This Experience

1. Design for the full request path  
Code quality is not only inside one service. It includes gateway config, DNS, ingress, cache policy, and frontend request behavior.

2. Keep contracts simple and stable  
API contracts should avoid unnecessary payload size and repeated calls.

3. Add observability before scaling complexity  
Tracing, correlation IDs, and per-route latency metrics should exist before major architecture changes.

4. Fix bottlenecks before adding more components  
Adding services without removing bottlenecks usually multiplies latency.

5. Cache intentionally  
Cache where it is safe and valuable:
- Static assets
- Gateway responses for read-heavy endpoints
- Repeated frontend queries with proper TTL

## My Current Focus in Goalixa

- Stabilize PWA, API Gateway, and Core API behavior
- Remove avoidable latency from routes and network flow
- Enable caching mechanisms after major bug fixes

## Final Thought

Software engineering is not only about writing correct code.  
It is about making systems that stay fast, reliable, and understandable under real traffic.
