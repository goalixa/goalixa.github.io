export default function TimelinePage({ children }) {
  return (
    <div className="timeline-container">
      <div className="timeline-grid">
        {/* Header */}
        <div className="timeline-header">
          <h1 className="timeline-title">Timeline</h1>
          <p className="timeline-subtitle">
            A chronological view of the Goalixa journey - from initial architecture decisions to incident responses and future planning.
          </p>
        </div>

        {/* Content from MDX */}
        <div className="timeline-content">
          {children}
        </div>
      </div>
    </div>
  )
}
