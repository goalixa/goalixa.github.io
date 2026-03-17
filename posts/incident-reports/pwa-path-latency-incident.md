---
title: Incident Report: PWA Path Change Caused High Latency
date: 2026-02-25
category: Incident Reports
tags: [incident, latency, pwa, api-gateway, sre, performance]
author: Amirreza Rezaie
read_time: 4 min
featured: false
---

# Incident Report: PWA Path Change Caused High Latency

> **Published:** 2026-02-25 | **Section:** Incident Report / SRE | **Author:** Amirreza Rezaie

After introducing API Gateway and separating backend services from the frontend, I started to experience real slowness in Goalixa.

Before this, latency was mostly something I saw in SRE dashboards.  
Now I can feel it directly while using the app, and that gave me much better understanding of what latency means in real product experience.

## Incident Timeline

- **2026-02-24:** I changed the path/routing setup in the PWA.
- Right after that change, the website became noticeably slow.
- Monitoring showed latency increase in the PWA service.

## Impact

- Slower page response in the PWA
- Higher latency visible in monitoring graphs
- Network instability symptoms between frontend and backend paths

## Why This Matters

Even in monolithic systems, latency is critical.  
In gateway-based and service-separated systems, latency becomes even more sensitive because every extra network hop and misconfiguration adds delay.

## Actions Taken

- Fixed major bugs in:
  - PWA
  - API Gateway
  - Core API
- Reviewed route/path behavior to remove high-latency flow

## Next Optimization Step

I want to enable caching mechanisms after stabilizing the bug fixes:

- Gateway-level caching where safe
- Static and edge caching for PWA assets
- API response caching for read-heavy endpoints

## Lessons Learned

Seeing latency in charts is useful, but feeling it in real usage is different.  
This incident helped me connect SRE metrics to actual user experience and prioritize bottleneck analysis in both code and network paths.
