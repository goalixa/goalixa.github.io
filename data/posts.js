// Blog posts data for search and browsing functionality
export const posts = [
  // Infrastructure - Security
  {
    title: "Cloudflare Zero Trust: Securing Infrastructure & Private Services",
    description: "Complete guide to implementing Cloudflare Zero Trust for securing infrastructure tools with identity-based access and WARP tunneling.",
    category: "Infrastructure",
    href: "/infrastructure/security/cloudflare-zero-trust"
  },
  {
    title: "Cloudflare Zero Trust Architecture",
    description: "Deep dive into Cloudflare Zero Trust architecture, traffic flows, and how components work together.",
    category: "Infrastructure",
    href: "/infrastructure/security/cloudflare-zero-trust/architecture"
  },
  {
    title: "Cloudflare Zero Trust Setup Guide",
    description: "Step-by-step guide to configuring Cloudflare Tunnel, Access, and WARP for infrastructure security.",
    category: "Infrastructure",
    href: "/infrastructure/security/cloudflare-zero-trust/setup"
  },
  {
    title: "Cloudflare Zero Trust Performance & Metrics",
    description: "Real-world performance data and metrics from production Cloudflare Zero Trust implementation.",
    category: "Infrastructure",
    href: "/infrastructure/security/cloudflare-zero-trust/performance"
  },
  {
    title: "Cloudflare Zero Trust Troubleshooting",
    description: "Common issues and solutions when implementing Cloudflare Zero Trust.",
    category: "Infrastructure",
    href: "/infrastructure/security/cloudflare-zero-trust/troubleshooting"
  },

  // Infrastructure - Kubernetes
  {
    title: "Migrating from K3s to Kubeadm",
    description: "Complete guide to migrating from K3s to kubeadm-based Kubernetes cluster with zero downtime.",
    category: "Infrastructure",
    href: "/infrastructure/kubernetes/migrating-from-k3s-to-kubeadm"
  },
  {
    title: "Migrating to New Kubernetes Cluster",
    description: "Strategy and execution plan for migrating workloads to a new Kubernetes cluster.",
    category: "Infrastructure",
    href: "/infrastructure/kubernetes/migrate-to-new-cluster"
  },

  // Infrastructure - CI/CD
  {
    title: "Monitoring Stack: Prometheus, Grafana, Alertmanager",
    description: "Building a complete monitoring solution with Prometheus, Grafana, and Alertmanager on Kubernetes.",
    category: "Infrastructure",
    href: "/infrastructure/cicd/monitoring-stack-prometheus-grafana-alertmanager"
  },
  {
    title: "Why Staging Environment with Kustomize",
    description: "Benefits and implementation of staging environments using Kustomize for Kubernetes deployments.",
    category: "Infrastructure",
    href: "/infrastructure/cicd/why-staging-with-kustomize"
  },
  {
    title: "ArgoCD: First Steps with GitOps",
    description: "Getting started with ArgoCD for GitOps-based continuous delivery.",
    category: "Infrastructure",
    href: "/infrastructure/cicd/gitops/argocd-first-step"
  },
  {
    title: "ArgoCD Applications Sync Strategy",
    description: "Understanding and configuring ArgoCD application sync strategies for different deployment scenarios.",
    category: "Infrastructure",
    href: "/infrastructure/cicd/gitops/argocd-applications-sync-strategy"
  },

  // Infrastructure - Observability
  {
    title: "Prometheus: Metrics Collection",
    description: "Setting up Prometheus for metrics collection in Kubernetes environments.",
    category: "Infrastructure",
    href: "/infrastructure/observability/prometheus"
  },
  {
    title: "Grafana: Visualization & Dashboards",
    description: "Creating effective dashboards and visualizations with Grafana.",
    category: "Infrastructure",
    href: "/infrastructure/observability/grafana"
  },
  {
    title: "Alertmanager: Alert Management",
    description: "Configuring Alertmanager for intelligent alert routing and management.",
    category: "Infrastructure",
    href: "/infrastructure/observability/alertmanager"
  },
  {
    title: "Application Metrics Best Practices",
    description: "Best practices for instrumenting applications with Prometheus metrics.",
    category: "Infrastructure",
    href: "/infrastructure/observability/application-metrics"
  },

  // Infrastructure - Incidents
  {
    title: "PWA Path Latency Incident",
    description: "Post-mortem analysis of a path latency issue in Progressive Web App routing.",
    category: "Infrastructure",
    href: "/infrastructure/incident-reports/pwa-path-latency-incident"
  },

  // Platform Engineering
  {
    title: "API Gateway & PWA: Real Microservices Architecture",
    description: "A better model for Goalixa: One UI on app.goalixa.com, one API entry point, independent backend services.",
    category: "Platform",
    href: "/platform/api-gateway-pwa-microservices"
  },
  {
    title: "Removing UI from Legacy Auth Service",
    description: "Strategy for removing UI from auth service and redirecting to PWA while maintaining backward compatibility.",
    category: "Platform",
    href: "/platform/removing-ui-from-legacy-auth-redirection"
  },
  {
    title: "Migrating Monolithic to Microservices",
    description: "Guide to breaking down a monolithic application into independent microservices with clear boundaries.",
    category: "Platform",
    href: "/platform/migrate-monolithic-to-microservice"
  },
  {
    title: "Migrating to PWA Successfully",
    description: "Complete guide to transforming a traditional web app into a Progressive Web Application with offline support.",
    category: "Platform",
    href: "/platform/migrate-to-pwa-success-fully"
  },
  {
    title: "Event-Driven Architecture with NATS",
    description: "Implementing event-driven patterns in Goalixa using NATS messaging for asynchronous communication.",
    category: "Platform",
    href: "/platform/event-driven-architecture-nats"
  },
  {
    title: "Syntra: AI DevOps Agent Architecture",
    description: "Building an intelligent DevOps assistant using CrewAI and LangChain for infrastructure automation.",
    category: "Platform",
    href: "/platform/syntra-architecture"
  },
  {
    title: "Why Goalixa is AI-Developed",
    description: "How AI-assisted development accelerated the Goalixa platform build process and improved code quality.",
    category: "Platform",
    href: "/platform/why-goalixa-is-ai-developed"
  },

  // Software Engineering
  {
    title: "Latency Taught Me Better Software Engineering",
    description: "Lessons learned from debugging latency issues and how it shaped my approach to software engineering.",
    category: "Software Engineering",
    href: "/software-engineering/latency-taught-me-better-software-engineering"
  },
  {
    title: "Using Claude for Goalixa Development",
    description: "How Claude AI helps accelerate Goalixa development through pair programming and code generation.",
    category: "Software Engineering",
    href: "/software-engineering/using-claude-for-goalixa"
  }
]

// Export total count for stats
export const totalPosts = posts.length

// Export categories
export const categories = [
  { name: "Infrastructure", count: posts.filter(p => p.category === "Infrastructure").length },
  { name: "Platform", count: posts.filter(p => p.category === "Platform").length },
  { name: "Software Engineering", count: posts.filter(p => p.category === "Software Engineering").length }
]
