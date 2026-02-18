# Goalixa Engineering Blog

<div class="hero-grid">
  <div class="hero-main">
    <p class="eyebrow">Goalixa Platform Journal</p>
    <h2>Designing, shipping, and operating Goalixa as a real microservices stack.</h2>
    <p>
      This blog is built from the real project structure under
      <code>/Users/snapp/Desktop/projects/Goalixa</code> and documents how each service works
      in production.
    </p>
    <p class="hero-links">
      <a href="#/services">Explore Services</a>
      <a href="#/architecture">View Architecture</a>
      <a href="#/operations">Read Ops Playbook</a>
    </p>
  </div>
  <div class="hero-metrics">
    <div class="metric-card">
      <span>Core Services</span>
      <strong>6</strong>
      <em>Landing, PWA, API, Auth, App, DB</em>
    </div>
    <div class="metric-card">
      <span>Runtime</span>
      <strong>Kubernetes</strong>
      <em>Traefik ingress + namespace split</em>
    </div>
    <div class="metric-card">
      <span>Focus</span>
      <strong>SRE-first</strong>
      <em>Incident, SLO/SLI, observability, automation</em>
    </div>
  </div>
</div>

## Platform Snapshot

Goalixa is not a single app. It is a multi-service platform with separate repositories for
frontend experiences, authentication, application logic, and infrastructure automation.

<div class="pill-row">
  <span class="pill">Flask + PostgreSQL</span>
  <span class="pill">Dual-token Auth</span>
  <span class="pill">Unified PWA Shell</span>
  <span class="pill">API Gateway</span>
  <span class="pill">Kubernetes + Traefik</span>
  <span class="pill">Ansible + Terraform</span>
</div>

## Service Map

<div class="service-grid">
  <a class="service-card" href="#/services">
    <h3>Goalixa App</h3>
    <p>Main Flask application for task and time management with PostgreSQL storage.</p>
    <span class="service-meta">Repo: Goalixa-app</span>
  </a>
  <a class="service-card" href="#/services">
    <h3>goalixa-auth</h3>
    <p>Dedicated auth service with dual-token flow, refresh rotation, and OAuth support.</p>
    <span class="service-meta">Repo: goalixa-auth</span>
  </a>
  <a class="service-card" href="#/services">
    <h3>goalixa-pwa</h3>
    <p>Single installable PWA shell that routes Landing/Auth/App experiences.</p>
    <span class="service-meta">Repo: goalixa-pwa</span>
  </a>
  <a class="service-card" href="#/services">
    <h3>goalixa-landing</h3>
    <p>Marketing entrypoint and public face of the platform.</p>
    <span class="service-meta">Repo: goalixa-landing</span>
  </a>
  <a class="service-card" href="#/architecture">
    <h3>API Gateway + Network</h3>
    <p>Central routing through API domain and ingress policies.</p>
    <span class="service-meta">Path: k8s/api + docs/NETWORK_FLOW.md</span>
  </a>
  <a class="service-card" href="#/operations">
    <h3>Platform Ops</h3>
    <p>Infra automation with Kubernetes manifests, Ansible, Harbor, and monitoring stack.</p>
    <span class="service-meta">Paths: k8s, goalixa-ansible, harbor_setup</span>
  </a>
</div>

## Build Progress (Mark Done)

- [x] Docsify + custom domain (`blog.goalixa.com`)
- [x] SEO baseline (`meta`, `robots.txt`, `sitemap.xml`)
- [x] Founder profile and project story
- [x] Service-oriented blog structure
- [ ] Publish incident case study
- [ ] Publish deployment deep dive

## Start Reading

- [Services](services.md)
- [Architecture](architecture.md)
- [Operations](operations.md)
- [Posts](posts/README.md)
- [About Me](about.md)
