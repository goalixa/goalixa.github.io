export default function Hero() {
  return (
    <div className="landing-hero">
      <div className="landing-hero-content">
        <img
          src="/assets/goalixa-logo.png"
          alt="Goalixa"
          className="landing-logo"
        />
        <h1 className="landing-title">Goalixa Engineering</h1>
        <p className="landing-subtitle">
          Building reliable systems, learning in public, and sharing the journey
        </p>
        <p className="landing-description">
          Follow along as I build a productivity platform from scratch — exploring microservices,
          Kubernetes, GitOps, and modern software engineering practices.
        </p>
        <div className="landing-cta">
          <a href="/posts/" className="btn-primary">
            Explore Posts
          </a>
          <a href="/journey/" className="btn-secondary">
            Read the Journey
          </a>
        </div>
        <div className="landing-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Platform</span>
          </div>
        </div>
      </div>
    </div>
  )
}
