# ArgoCD Setup: First Step in Goalixa GitOps Journey

> **Published:** 2026-02-20 | **Section:** GitOps

I want to implement GitOps in Goalixa, and ArgoCD is my next major step.

## Current State

Before moving to ArgoCD, I already set up Harbor as the image registry.

This gives me a clean image flow:

- Build image
- Push image to Harbor
- Use the image in deployment configuration

## Why ArgoCD Now

After Harbor setup, I want ArgoCD to manage delivery and synchronization from Git to the cluster.

My goals are:

- Git as the source of truth for deployments
- Safer and more predictable releases
- Better visibility of drift between desired and running state
- Faster rollback and recovery during incidents

## Phase 1 Plan

1. Install and bootstrap ArgoCD
2. Connect ArgoCD to the Git repository
3. Define the first application in ArgoCD
4. Sync manifests from Git
5. Validate deployment status and health

## Next Step

After the first successful sync, I will start using more ArgoCD features such as:

- Auto-sync policies
- Sync waves/hooks
- Better promotion flow between environments
- Standardized deployment strategy for services
