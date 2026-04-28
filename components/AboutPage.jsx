export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-grid">
        {/* Profile Header */}
        <div className="about-profile">
          <div className="about-profile-image">
            <img
              src="/assets/amirreza_rezaie.jpg"
              alt="Amirreza Rezaie"
              className="about-avatar"
            />
          </div>
          <div className="about-profile-content">
            <h1 className="about-name">Amirreza Rezaie</h1>
            <p className="about-role">Site Reliability Engineer at Snapp</p>
            <p className="about-bio">
              I work on large-scale distributed systems at Iran's leading ride-hailing platform,
              focusing on infrastructure reliability, observability, and building systems that work under pressure.
            </p>
            <p className="about-bio">
              Beyond my day job, I'm the creator of <strong>Goalixa</strong> — a productivity platform
              I've been developing to deepen my understanding of modern software architecture, from microservices to GitOps deployments.
            </p>
            <div className="about-social">
              <a href="https://linkedin.com/in/amirreza-rezaie-" className="about-social-link" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/AmirrezaRezaie" className="about-social-link" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://goalixa.com" className="about-social-link" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Goalixa
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="about-section">
          <h2 className="about-section-title">Work Experience</h2>
          <div className="about-card">
            <div className="about-card-header">
              <h3 className="about-card-title">Site Reliability Engineer</h3>
              <span className="about-card-meta">Snapp • 2022 - Present</span>
            </div>
            <ul className="about-list">
              <li>Incident management and on-call response for critical production systems</li>
              <li>OpenShift cluster management for containerized workloads</li>
              <li>Designing and implementing alerting rules for system reliability</li>
              <li>Developing Python-based SRE microservices for automation</li>
              <li>Working with message queue technologies (RabbitMQ, Kafka, NATS)</li>
              <li>Ensuring reliability and performance of high-traffic services</li>
            </ul>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="about-section">
          <h2 className="about-section-title">Personal Projects</h2>
          <div className="about-card about-card-highlight">
            <h3 className="about-card-title">Goalixa — Productivity Platform</h3>
            <p className="about-card-text">
              My learning playground where I experiment with modern software architecture
            </p>
            <div className="about-badges">
              <span className="about-badge">Kubernetes</span>
              <span className="about-badge">Prometheus</span>
              <span className="about-badge">Grafana</span>
              <span className="about-badge">Microservices</span>
              <span className="about-badge">BFF Pattern</span>
              <span className="about-badge">PWA</span>
              <span className="about-badge">ArgoCD</span>
              <span className="about-badge">NATS</span>
              <span className="about-badge">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="about-section">
          <h2 className="about-section-title">Skills & Technologies</h2>
          <div className="about-skills">
            <div className="about-skill-category">
              <h4 className="about-skill-title">Container Orchestration</h4>
              <p className="about-skill-items">Kubernetes, OpenShift, Docker</p>
            </div>
            <div className="about-skill-category">
              <h4 className="about-skill-title">Storage</h4>
              <p className="about-skill-items">Ceph storage systems</p>
            </div>
            <div className="about-skill-category">
              <h4 className="about-skill-title">Languages</h4>
              <p className="about-skill-items">Python, Go, Bash</p>
            </div>
            <div className="about-skill-category">
              <h4 className="about-skill-title">Observability</h4>
              <p className="about-skill-items">Prometheus, Grafana, Thanos, ELK</p>
            </div>
            <div className="about-skill-category">
              <h4 className="about-skill-title">Message Queues</h4>
              <p className="about-skill-items">RabbitMQ, Kafka, NATS</p>
            </div>
            <div className="about-skill-category">
              <h4 className="about-skill-title">CI/CD & GitOps</h4>
              <p className="about-skill-items">ArgoCD, GitHub Actions</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section">
          <h2 className="about-section-title">Certifications</h2>
          <div className="about-certs">
            <div className="about-cert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>CKA (Certified Kubernetes Administrator)</span>
            </div>
            <div className="about-cert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Chaos Engineering</span>
            </div>
            <div className="about-cert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Prompt Engineering</span>
            </div>
          </div>
        </div>

        {/* Featured Work */}
        <div className="about-section">
          <h2 className="about-section-title">Featured Work</h2>
          <div className="about-featured">
            <a href="/sre/migrating-from-k3s-to-kubeadm" className="about-featured-card">
              <h3 className="about-featured-title">From k3s to kubeadm: My Kubernetes Migration Journey</h3>
              <p className="about-featured-desc">
                Every infrastructure decision is a trade-off. This documents why I migrated and the practical strategy for the transition.
              </p>
              <span className="about-featured-link">Read more →</span>
            </a>
            <a href="/software-engineering/latency-taught-me-better-software-engineering" className="about-featured-card">
              <h3 className="about-featured-title">Latency Taught Me Better Software Engineering</h3>
              <p className="about-featured-desc">
                The mindset shift when performance moved from a dashboard metric to something I could feel directly.
              </p>
              <span className="about-featured-link">Read more →</span>
            </a>
            <a href="/posts/incident-reports/pwa-path-latency-incident" className="about-featured-card">
              <h3 className="about-featured-title">PWA Path Latency Incident Report</h3>
              <p className="about-featured-desc">
                A production incident, full timeline, root cause analysis, and lessons learned.
              </p>
              <span className="about-featured-link">Read more →</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer">
          <p>Last updated: April 2026</p>
        </div>
      </div>
    </div>
  )
}
