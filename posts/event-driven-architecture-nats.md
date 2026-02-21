# Future Plan: Event-Driven Architecture with NATS

> **Published:** 2026-02-20 | **Section:** Architecture & Platform

I am thinking about the future architecture of Goalixa.

I want to adopt an Event-Driven Architecture (EDA) because it can help me model time-based actions more naturally.

## Why EDA for Goalixa

In Goalixa, time is a core domain concept.  
Examples of events:

- `time.start`
- `time.end`
- Other time-related lifecycle events

With an event-driven model, these events can be reused by multiple services and workflows without tight coupling.

## Why NATS

I want to use NATS as the event broker because:

- It is lightweight and fast
- It is a good fit for asynchronous communication
- It helps me learn and implement EDA in a practical way
- It gives a clean path to scale event-based features over time

## What I Want Next

1. Define a first version of event contracts
2. Publish core time events from app flows
3. Add consumers for useful downstream actions
4. Observe reliability and message flow behavior

This is an important step toward a more modular and scalable architecture.
