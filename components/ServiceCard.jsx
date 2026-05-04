export default function ServiceCard({ service }) {
  const {
    name,
    slug,
    icon,
    tagline,
    tech,
    port,
    keyFeatures,
    metrics,
    status = 'production'
  } = service

  return (
    <a href={`/docs/services/${slug}/`} className="service-card">
      <div className="service-card-header">
        <div className="service-icon-wrapper">
          <div className="service-icon">{icon}</div>
          <div className={`service-status status-${status}`}>
            <span className="status-pulse"></span>
            {status}
          </div>
        </div>
        <div className="service-meta">
          <h3 className="service-name">{name}</h3>
          <p className="service-tagline">{tagline}</p>
        </div>
      </div>

      <div className="service-tech-stack">
        <span className="tech-label">STACK:</span>
        <span className="tech-value">{tech}</span>
      </div>

      {port && (
        <div className="service-port">
          <span className="port-label">PORT:</span>
          <span className="port-value">{port}</span>
        </div>
      )}

      <ul className="service-features">
        {keyFeatures.map((feature, idx) => (
          <li key={idx} className="service-feature">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {metrics && (
        <div className="service-metrics">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="service-card-footer">
        <span className="service-link">
          Explore Service
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </a>
  )
}
