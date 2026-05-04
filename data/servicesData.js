export const services = [
  {
    name: 'Core-API',
    slug: 'core-api',
    icon: 'API',
    tagline: 'Main business logic service for task management and productivity tracking',
    tech: 'Python 3.11 + Flask + PostgreSQL',
    port: '80',
    keyFeatures: [
      'Task tracking with timer functionality',
      'Projects and goals management',
      'Habits tracking and logging',
      'Time entries and reports',
      'Prometheus metrics integration'
    ],
    metrics: [
      { value: '14', label: 'Database Tables' },
      { value: '40+', label: 'API Endpoints' },
      { value: '<100ms', label: 'P95 Latency' },
      { value: '99.9%', label: 'Uptime' }
    ],
    status: 'production'
  },
  {
    name: 'goalixa-auth',
    slug: 'goalixa-auth',
    icon: 'AUTH',
    tagline: 'Secure authentication service with dual-token JWT system',
    tech: 'Python 3.11 + Flask + SQLAlchemy',
    port: '80',
    keyFeatures: [
      'Dual-token JWT (15min access, 7-day refresh)',
      'Google OAuth integration',
      'Email verification system',
      'Password reset flows',
      'Token rotation on refresh'
    ],
    metrics: [
      { value: '2', label: 'Token Types' },
      { value: '15min', label: 'Access TTL' },
      { value: '7 days', label: 'Refresh TTL' },
      { value: 'OAuth', label: 'Google SSO' }
    ],
    status: 'production'
  },
  {
    name: 'goalixa-BFF',
    slug: 'goalixa-bff',
    icon: 'BFF',
    tagline: 'Backend for Frontend - API Gateway with intelligent request aggregation',
    tech: 'Python 3.11 + FastAPI + Redis',
    port: '80',
    keyFeatures: [
      'Unified API entry point (/bff/*)',
      'Authentication proxy and token refresh',
      'Aggregate endpoints for optimized data fetching',
      'Redis-based response caching',
      'Service health monitoring'
    ],
    metrics: [
      { value: '3', label: 'Service Proxies' },
      { value: 'Redis', label: 'Cache Layer' },
      { value: 'Async', label: 'FastAPI Runtime' },
      { value: '/bff/*', label: 'API Prefix' }
    ],
    status: 'production'
  },
  {
    name: 'goalixa-PWA',
    slug: 'goalixa-pwa',
    icon: 'PWA',
    tagline: 'Progressive Web Application with offline support and installability',
    tech: 'Vanilla JS + Service Worker + Nginx',
    port: '80',
    keyFeatures: [
      'Installable progressive web app',
      'Offline support via service worker',
      'Custom client-side routing',
      'Unified auth and app experience',
      'Mobile-optimized interface'
    ],
    metrics: [
      { value: 'PWA', label: 'App Type' },
      { value: 'Offline', label: 'Service Worker' },
      { value: '<50KB', label: 'Initial Load' },
      { value: '100', label: 'Lighthouse Score' }
    ],
    status: 'production'
  },
  {
    name: 'goalixa-landing',
    slug: 'goalixa-landing',
    icon: 'LAND',
    tagline: 'Marketing landing page for product presentation and user acquisition',
    tech: 'HTML/CSS/JS + Nginx',
    port: '80',
    keyFeatures: [
      'Responsive mobile-first design',
      'Product features showcase',
      'Clean modern UI (Inter font)',
      'Static site (no build process)',
      'Fast page load performance'
    ],
    metrics: [
      { value: 'Static', label: 'Site Type' },
      { value: '<100KB', label: 'Total Size' },
      { value: '<1s', label: 'First Paint' },
      { value: 'goalixa.com', label: 'Domain' }
    ],
    status: 'production'
  },
  {
    name: 'Syntra',
    slug: 'syntra',
    icon: 'AI',
    tagline: 'AI DevOps orchestration platform with CrewAI intelligent agents',
    tech: 'Python 3.11 + FastAPI + CrewAI',
    port: '80',
    keyFeatures: [
      'Multi-agent AI orchestration',
      'Planner, DevOps, and Reviewer agents',
      'LangChain integration with Claude AI',
      'Task decomposition and execution',
      'Automated code review flows'
    ],
    metrics: [
      { value: '3', label: 'AI Agents' },
      { value: 'Claude', label: 'LLM Model' },
      { value: 'CrewAI', label: 'Framework' },
      { value: 'DevOps', label: 'Domain' }
    ],
    status: 'production'
  }
]
