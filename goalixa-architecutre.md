# Goalixa Architecture

This page explains the Goalixa system at a high level for users and readers.

## System Overview

Goalixa is built as a modular product with separate services, where each service has a clear responsibility.

## Main Services

| Service | What It Does |
| --- | --- |
| Landing | Public website and product introduction |
| Auth | Account login, signup, and user authentication |
| App | Main product experience for users |
| PWA | Mobile-friendly installable web experience |
| API Layer | Connects frontend requests to backend services |
| Data Layer | Stores user and product data securely |

## User Request Flow

1. User opens Goalixa from web or PWA.
2. User signs in through the Auth service.
3. App sends requests through API endpoints.
4. Backend services process requests.
5. Data layer stores and returns required data.
6. User sees updated results in the app.

## Design Principles

- Clear separation of responsibilities between services
- Scalable and maintainable architecture
- Secure authentication and user session handling
- Fast and simple user experience

## Why This Matters

This architecture helps Goalixa ship features faster, keep the product stable, and improve user experience over time.
