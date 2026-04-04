# Incident Reports

> Production incident post-mortems — what went wrong, why it happened, and what we learned.

---

## Overview

Incident reports provide transparency into production issues. Each report includes a timeline of events, root cause analysis, impact assessment, and follow-up actions to prevent recurrence.

---

## Posts

### [Incident Report: PWA Path Change Caused High Latency](./pwa-path-latency-incident.md)
After introducing API Gateway and separating backend services from the frontend, user-facing latency increased dramatically. This report details the investigation, root cause, and resolution.

---

## Incident Report Format

Each incident report follows this structure:

- **Summary**: What happened and user impact
- **Timeline**: Chronological breakdown of events
- **Root Cause**: Technical explanation of the failure
- **Resolution**: How the issue was fixed
- **Follow-up Actions**: Prevention measures and process improvements

---

## Topics Covered

- **Performance Issues**: Latency, timeouts, slow queries
- **Deployment Failures**: Broken deployments, configuration errors
- **Service Outages**: Downtime, availability issues
- **Data Issues**: Consistency problems, data loss
- **Investigation Process**: Debugging methodology, root cause analysis

---

## Related

- [DevOps Posts](/posts/devops/README.md) — Infrastructure and monitoring
- [Software Engineering](/posts/software-engineering/README.md) — Performance engineering
