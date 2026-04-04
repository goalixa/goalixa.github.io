# Goalixa Blog

Engineering notes, architecture updates, DevOps and SRE learnings, and personal build stories from Goalixa - a personal productivity platform built with modern cloud-native architecture.

---

<div class="homepage-hero">
  <h2 style="border:none; margin-top:0;">👋 Welcome to the Goalixa Blog</h2>
  <p style="font-size:1.1rem; margin:16px 0;">
    I'm <strong>Amirreza Rezaie</strong>, building Goalixa - a task tracking, goal management, and time optimization platform. This blog shares the technical journey: architecture decisions, incident reports, DevOps learnings, and the challenges of building during wartime in Iran.
  </p>
  <p style="margin:0;">
    <a href="#/posts/welcome-to-goalixa-blog.md" style="background:white; color:var(--link); padding:10px 20px; border-radius:8px; font-weight:600; display:inline-block; margin-right:12px;">Read Introduction</a>
    <a href="#/journey.md" style="background:rgba(255,255,255,0.2); color:white; padding:10px 20px; border-radius:8px; font-weight:600; display:inline-block;">View Full Journey</a>
  </p>
</div>

<a href="#/posts/software-engineering/latency-taught-me-better-software-engineering.md" class="featured-post">
  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
    <div>
      <span class="badge">Featured</span>
      <span class="badge">Software Engineering</span>
    </div>
    <span style="color:var(--muted); font-size:0.85rem;">🕐 5 min read</span>
  </div>
  <h3>Latency Taught Me Better Software Engineering</h3>
  <p style="color:var(--muted); margin:8px 0;">
    After moving Goalixa toward API Gateway and a separated frontend/backend model, I started to feel latency directly while using the app myself. That changed how I think about software engineering decisions - performance is a product feature, not just an SRE metric.
  </p>
  <div class="post-meta" style="margin-top:12px; margin-bottom:0;">
    <span>📅 February 26, 2026</span>
    <span>👤 Amirreza Rezaie</span>
  </div>
</a>

## Recent Posts

<ul class="posts-list-enhanced">
  <li class="post-item-enhanced">
    <a href="#/posts/goalixa-story/survive-in-war-time.md">Survive in War Time</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      Building Goalixa during wartime in Iran with severe internet restrictions. When I cannot access the internet, I cannot deploy changes or fix production bugs.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Goalixa Story</span>
      <span>📅 March 6, 2026</span>
      <span class="read-time-badge">🕐 3 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/software-engineering/using-claude-for-goalixa.md">Using Claude to Speed Up Goalixa Development</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      Goalixa is close to production, but I need faster backend/frontend improvements. Implementing service-level CLAUDE.md files for effective AI-assisted development.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Software Engineering</span>
      <span>📅 March 12, 2026</span>
      <span class="read-time-badge">🕐 5 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/devops/why-staging-with-kustomize.md">Why Goalixa Needs a Staging Environment (Kustomize Plan)</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      I'm close to serving real user traffic, but every code change goes straight to production. Without staging, I keep hitting outages and "site not reachable" incidents.
    </p>
    <div class="post-meta">
      <span class="tag-pill">DevOps</span>
      <span>📅 March 11, 2026</span>
      <span class="read-time-badge">🕐 5 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/incident-reports/pwa-path-latency-incident.md">Incident Report: PWA Path Change Caused High Latency</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      After introducing API Gateway and separating backend services from the frontend, I started to experience real slowness in Goalixa. Network instability symptoms between frontend and backend paths.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Incident Report</span>
      <span>📅 February 25, 2026</span>
      <span class="read-time-badge">🕐 4 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/migrate-to-pwa-success-fully.md">Migrate to PWA Successfully</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      Today I migrated to PWA and API Gateway successfully. This is one of the biggest milestones for Goalixa - PWA is now the main frontend entrypoint, API Gateway is the main API entrypoint.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Architecture</span>
      <span>📅 February 20, 2026</span>
      <span class="read-time-badge">🕐 3 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/monitoring-stack-prometheus-grafana-alertmanager.md">Monitoring Stack Setup: Prometheus, Grafana, and Alertmanager</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      I set up a monitoring stack to observe Goalixa at three levels: service level, OS/node level, and cluster level. Prometheus for metrics, Grafana for dashboards, Alertmanager for routing.
    </p>
    <div class="post-meta">
      <span class="tag-pill">DevOps</span>
      <span>📅 February 20, 2026</span>
      <span class="read-time-badge">🕐 5 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/gitops/argocd-applications-sync-strategy.md">ArgoCD Applications and Sync Strategy in Goalixa (Part 2)</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      After bootstrapping ArgoCD, the next step is to make deployment behavior predictable and safe. Use ArgoCD Applications to define what should be deployed and how sync should happen.
    </p>
    <div class="post-meta">
      <span class="tag-pill">GitOps</span>
      <span>📅 February 20, 2026</span>
      <span class="read-time-badge">🕐 4 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/gitops/argocd-first-step.md">ArgoCD Setup: First Step in Goalixa GitOps Journey (Part 1)</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      I want to implement GitOps in Goalixa, and ArgoCD is my next major step. After Harbor setup for image registry, ArgoCD will manage delivery and synchronization from Git to the cluster.
    </p>
    <div class="post-meta">
      <span class="tag-pill">GitOps</span>
      <span>📅 February 20, 2026</span>
      <span class="read-time-badge">🕐 4 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/bff-goalixa.md">BFF in Goalixa: How PWA and Services Stay Clean and Scalable</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      Goalixa uses a BFF (Backend For Frontend) to keep frontend flows simple while backend services stay focused on their own domain logic. Request model: PWA → Gateway → BFF → domain services.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Architecture</span>
      <span>📅 February 20, 2026</span>
      <span class="read-time-badge">🕐 5 min</span>
    </div>
  </li>

  <li class="post-item-enhanced">
    <a href="#/posts/api-gateway-pwa-microservices.md">From Fragmented UIs to One PWA: Why API Gateway Is Step One for Real Microservices</a>
    <p style="color:var(--muted); font-size:0.9rem; margin:8px 0;">
      Many teams think "microservices" only means splitting backend services. In practice, if UIs are also fragmented, product complexity increases. A better model: One UI only, one API entry point, independent backend services.
    </p>
    <div class="post-meta">
      <span class="tag-pill">Architecture</span>
      <span>📅 February 19, 2026</span>
      <span class="read-time-badge">🕐 6 min</span>
    </div>
  </li>
</ul>

---

## Explore by Topic

- [**Timeline View**](#/timeline.md) 📅 - All posts in chronological order with milestone markers
- [**Journey View**](#/journey.md) 🛤️ - Narrative story format organized into chapters
- [**Goalixa Story**](#/posts/goalixa-story/README.md) - Personal journey and challenges
- [**Software Engineering**](#/posts/software-engineering/README.md) - Development practices and lessons
- [**Incident Reports**](#/posts/incident-reports/README.md) - Post-mortems and learnings
- [**DevOps**](#/posts/devops/README.md) - Infrastructure, monitoring, operations
- [**GitOps**](#/posts/gitops/README.md) - ArgoCD, deployment automation
- [**Architecture**](#/goalixa-architecture.md) - System design and patterns

[View all posts →](#/timeline.md)
