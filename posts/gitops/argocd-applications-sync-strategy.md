# ArgoCD Applications and Sync Strategy in Goalixa

> **Published:** 2026-02-20 | **Section:** GitOps

After bootstrapping ArgoCD, the next step is to make deployment behavior predictable and safe.

## Goal

Use ArgoCD Applications to define:

- What should be deployed
- From which Git path and branch
- How sync should happen
- How health should be validated

## Application Design

For each service, I want a clear ArgoCD application with:

- Dedicated source path in Git
- Explicit destination cluster/namespace
- Resource health checks
- Clear ownership and naming

## Sync Strategy

I plan to start with controlled sync and then move to automation:

1. Manual sync in early phase for safer rollout
2. Auto-sync for stable services
3. Prune + self-heal after confidence is high

This allows fast iteration without losing control in early adoption.

## Rollback and Safety

ArgoCD helps reduce rollback time by keeping Git and runtime aligned.

Key safety rules:

- Keep manifests versioned and reviewable in Git
- Promote changes in small batches
- Monitor health immediately after sync
- Roll back quickly to last known good revision when needed

## What Comes Next

- Define environment-specific app sets (dev/stage/prod)
- Add sync windows and policy controls
- Standardize release flow across all Goalixa services
