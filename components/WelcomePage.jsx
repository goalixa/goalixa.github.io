export default function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="welcome-grid">
        <div className="welcome-hero">
          <h1 className="welcome-title">
            <span className="welcome-title-line">Building Systems</span>
            <span className="welcome-title-line welcome-title-accent">That Scale</span>
          </h1>

          <p className="welcome-subtitle">
            Deep technical explorations into microservices, Kubernetes, GitOps, and platform engineering.
            Real production stories, architecture decisions, and lessons learned.
          </p>

          <div className="welcome-cta-group">
            <a href="/posts" className="welcome-btn welcome-btn-primary">
              <span>Read Articles</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/journey" className="welcome-btn welcome-btn-secondary">
              <span>My Journey</span>
            </a>
          </div>

          <div className="welcome-stats">
            <div className="welcome-stat">
              <div className="welcome-stat-number">20+</div>
              <div className="welcome-stat-label">Articles</div>
            </div>
            <div className="welcome-stat-divider"></div>
            <div className="welcome-stat">
              <div className="welcome-stat-number">6</div>
              <div className="welcome-stat-label">Categories</div>
            </div>
            <div className="welcome-stat-divider"></div>
            <div className="welcome-stat">
              <div className="welcome-stat-number">1</div>
              <div className="welcome-stat-label">Platform</div>
            </div>
          </div>
        </div>

        <div className="welcome-categories">
          <h2 className="welcome-section-title">Explore Topics</h2>

          <div className="welcome-category-grid">
            <a href="/sre" className="welcome-category-card">
              <div className="welcome-category-icon">K8s</div>
              <h3 className="welcome-category-title">Site Reliability Engineering</h3>
              <p className="welcome-category-desc">Kubernetes migrations, cluster management, production reliability</p>
              <div className="welcome-category-count">4 articles →</div>
            </a>

            <a href="/devops" className="welcome-category-card">
              <div className="welcome-category-icon">CI</div>
              <h3 className="welcome-category-title">DevOps</h3>
              <p className="welcome-category-desc">Monitoring, automation, infrastructure operations</p>
              <div className="welcome-category-count">3 articles →</div>
            </a>

            <a href="/platform" className="welcome-category-card">
              <div className="welcome-category-icon">Git</div>
              <h3 className="welcome-category-title">Platform Engineering</h3>
              <p className="welcome-category-desc">Microservices, API design, system architecture</p>
              <div className="welcome-category-count">5 articles →</div>
            </a>

            <a href="/posts/ai" className="welcome-category-card">
              <div className="welcome-category-icon">AI</div>
              <h3 className="welcome-category-title">AI & Automation</h3>
              <p className="welcome-category-desc">CrewAI, LangChain, intelligent DevOps assistants</p>
              <div className="welcome-category-count">2 articles →</div>
            </a>

            <a href="/posts/gitops" className="welcome-category-card">
              <div className="welcome-category-icon">Argo</div>
              <h3 className="welcome-category-title">GitOps</h3>
              <p className="welcome-category-desc">ArgoCD workflows, deployment strategies, automation</p>
              <div className="welcome-category-count">3 articles →</div>
            </a>

            <a href="/posts/incident-reports" className="welcome-category-card">
              <div className="welcome-category-icon">Log</div>
              <h3 className="welcome-category-title">Incident Reports</h3>
              <p className="welcome-category-desc">Production incidents, post-mortems, lessons learned</p>
              <div className="welcome-category-count">2 articles →</div>
            </a>
          </div>
        </div>

        <div className="welcome-featured">
          <h2 className="welcome-section-title">Recent Posts</h2>

          <div className="welcome-featured-grid">
            <a href="/posts/monthly-recaps/march-2026" className="welcome-featured-card">
              <div className="welcome-featured-meta">
                <span className="welcome-featured-tag">Monthly Recap</span>
                <span>March 2026</span>
              </div>
              <h3 className="welcome-featured-title">March 2026 Recap</h3>
              <p className="welcome-featured-desc">
                Monthly highlights and achievements in platform engineering and infrastructure work.
              </p>
              <span className="welcome-featured-link">
                Read more →
              </span>
            </a>

            <a href="/sre/k3s-to-kubeadm-migration" className="welcome-featured-card">
              <div className="welcome-featured-meta">
                <span className="welcome-featured-tag">SRE</span>
                <span>Recent</span>
              </div>
              <h3 className="welcome-featured-title">K3s to Kubeadm Migration</h3>
              <p className="welcome-featured-desc">
                Complete journey of migrating from K3s to kubeadm cluster with zero downtime.
              </p>
              <span className="welcome-featured-link">
                Read more →
              </span>
            </a>

            <a href="/devops/monitoring-stack-prometheus-grafana-alertmanager" className="welcome-featured-card">
              <div className="welcome-featured-meta">
                <span className="welcome-featured-tag">DevOps</span>
                <span>Popular</span>
              </div>
              <h3 className="welcome-featured-title">Monitoring Stack Setup</h3>
              <p className="welcome-featured-desc">
                Building a complete monitoring solution with Prometheus, Grafana, and Alertmanager.
              </p>
              <span className="welcome-featured-link">
                Read more →
              </span>
            </a>
          </div>
        </div>

        <div className="welcome-about">
          <div className="welcome-about-card">
            <div className="welcome-about-header">
              <h3 className="welcome-author-name">Amirreza Rezaie</h3>
              <p className="welcome-author-role">Site Reliability Engineer at Snapp</p>
            </div>
            <p className="welcome-about-text">
              Building reliable systems at Iran's leading ride-hailing platform. Outside work, I'm developing
              <strong> Goalixa</strong> — a productivity platform that serves as my playground for modern software
              architecture, from microservices to GitOps.
            </p>
            <div className="welcome-social-links">
              <a href="https://linkedin.com/in/amirreza-rezaie-" className="welcome-social-link" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a href="https://github.com/AmirrezaRezaie" className="welcome-social-link" target="_blank" rel="noopener">
                GitHub
              </a>
              <a href="https://goalixa.com" className="welcome-social-link" target="_blank" rel="noopener">
                Goalixa
              </a>
            </div>
          </div>

          <div className="welcome-nav-cards">
            <a href="/architecture" className="welcome-nav-card">
              <div className="welcome-nav-number">01</div>
              <div className="welcome-nav-title">Architecture</div>
            </a>
            <a href="/timeline" className="welcome-nav-card">
              <div className="welcome-nav-number">02</div>
              <div className="welcome-nav-title">Timeline</div>
            </a>
            <a href="/about" className="welcome-nav-card">
              <div className="welcome-nav-number">03</div>
              <div className="welcome-nav-title">About</div>
            </a>
          </div>
        </div>

        <footer className="welcome-footer">
          <p>© 2026 Amirreza Rezaie</p>
        </footer>
      </div>
    </div>
  )
}
