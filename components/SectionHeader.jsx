export default function SectionHeader({ title, description, action, actionHref }) {
  return (
    <div className="section-header">
      <div className="section-header-text">
        <h2 className="section-header-title">{title}</h2>
        {description && <p className="section-header-description">{description}</p>}
      </div>
      {action && actionHref && (
        <a href={actionHref} className="section-header-action">
          {action}
          <span className="section-header-arrow">→</span>
        </a>
      )}
    </div>
  )
}
