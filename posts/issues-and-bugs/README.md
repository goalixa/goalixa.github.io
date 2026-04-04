# Issues and Bugs

> Known issues, bug analysis, and fixes — learning from what went wrong.

---

## Overview

This section documents specific bugs and issues encountered during Goalixa development. Each entry includes the problem description, root cause, and the fix applied — providing practical learning from real debugging scenarios.

---

## Issues Documented

### [Removing UI from Legacy Services: Rebuilding Auth Redirect and Token Flow](/posts/removing-ui-from-legacy-auth-redirection.md)
When migrating from a monolithic architecture to microservices, legacy authentication UI caused redirect loops and token flow issues. This post details the problem and the solution.

### [Incident Report: PWA Path Change Caused High Latency](/posts/incident-reports/pwa-path-latency-incident.md)
A configuration change in the PWA path caused unexpected latency spikes. Full incident analysis with timeline and resolution.

---

## Bug Report Format

Each issue documentation includes:

- **Problem Description**: What went wrong and symptoms observed
- **Root Cause**: Technical explanation of the bug
- **Impact**: User-facing or system impact
- **Fix Applied**: Code or configuration changes made
- **Prevention**: How similar issues will be prevented

---

## Related

- [Incident Reports](/posts/incident-reports/README.md) — Production incidents
- [Software Engineering](/posts/software-engineering/README.md) — Development practices
