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

## Redirect Flow (Landing to App)

The user-facing redirect flow is centered around these domains:

- `goalixa.com` (Landing)
- `auth.goalixa.com` (Authentication)
- `app.goalixa.com` (Main App)

### Scenario A: User is not logged in

1. User enters `goalixa.com`.
2. User clicks **Start**, **Login**, or **Open App**.
3. User is sent to `app.goalixa.com`.
4. If no active session exists, user is redirected to `auth.goalixa.com`.
5. User signs in or creates an account on `auth.goalixa.com`.
6. After successful auth, user is redirected back to `app.goalixa.com`.
7. App loads authenticated user data and the user continues.

### Scenario B: User is already logged in

1. User enters `goalixa.com` and opens the app.
2. User goes to `app.goalixa.com`.
3. Existing session is recognized.
4. User enters the app directly without an additional login step.

## Redirect Logic Summary

| From | Condition | Redirect To |
| --- | --- | --- |
| `goalixa.com` | User clicks app entry action | `app.goalixa.com` |
| `app.goalixa.com` | User not authenticated | `auth.goalixa.com` |
| `auth.goalixa.com` | Login successful | `app.goalixa.com` |

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
