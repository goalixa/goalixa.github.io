# Migrate Monolithic to Microservice

Published: 2026-02-20  
Section: Architecture & Platform

I want to migrate Goalixa to a real microservice architecture.

## Current Architecture

Right now, Goalixa has 3 main services:

- `app`
- `auth`
- `landing`

Each service has its own subdomain and frontend surface.  
User flow is handled by redirects between sites and shared cookie behavior.

## Why This Is a Problem

In this model, I experienced several issues:

- Complex redirect flow between domains
- Cookie/session consistency challenges
- Harder debugging across separate frontend surfaces
- Slower feature delivery due to fragmented UI ownership
- High blast radius during incidents

## Critical Reliability Issue

One of the biggest issues is this: when the `app` service goes down and I lose those pods, almost everything goes down with it.  
That creates a single-point-of-failure effect and makes recovery pressure much higher than it should be.

## Target Architecture

The goal is to move to a cleaner microservice model with:

- One unified frontend experience (PWA)
- API Gateway as the single API entry point
- BFF layer for client-focused aggregation and response shaping
- Domain services that focus only on business logic
- Clear service tiers:
  - Level A services (critical user path)
  - Level B services (non-critical/background capabilities)

## First Migration Step

For phase 1, I decided to prepare the foundation:

1. Infrastructure readiness
2. API Gateway setup
3. PWA design and structure
4. Define Level A vs Level B boundaries

This phase is focused on reducing future migration risk and creating a stable base for incremental service migration.

## Next Steps

- Finalize gateway routing and contracts
- Define BFF endpoints for core PWA screens
- Move frontend flows into one PWA experience
- Gradually migrate domain functionality behind the gateway
