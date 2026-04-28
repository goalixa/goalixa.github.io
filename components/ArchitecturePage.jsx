export default function ArchitecturePage({ children }) {
  return (
    <div className="arch-container">
      <div className="arch-grid">
        {/* Header */}
        <div className="arch-header">
          <h1 className="arch-title">Goalixa Architecture</h1>
          <p className="arch-updated">Last Updated: April 2026</p>
        </div>

        {/* What is Goalixa */}
        <div className="arch-section">
          <h2 className="arch-section-title">What Is Goalixa?</h2>
          <div className="arch-card">
            <p>
              <strong>Goalixa</strong> is a personal productivity platform designed to help individuals transform big goals
              into actionable plans, organized projects, and daily tasks. The platform combines goal setting, project management,
              habit tracking, and time optimization into a unified experience that helps users stay focused and productive.
            </p>
            <p>
              Built as a modern cloud-native microservices application, Goalixa demonstrates production-ready architecture patterns
              with clear service boundaries, comprehensive observability, and GitOps-based deployment.
            </p>
          </div>
        </div>

        {/* Content from children (MDX) */}
        <div className="arch-content">
          {children}
        </div>
      </div>
    </div>
  )
}
