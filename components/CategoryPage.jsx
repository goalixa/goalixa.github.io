export default function CategoryPage({ title, description, icon, children }) {
  return (
    <div className="category-container">
      <div className="category-grid">
        {/* Header */}
        <div className="category-header">
          {icon && <div className="category-icon">{icon}</div>}
          {title && <h1 className="category-title">{title}</h1>}
          <p className="category-description">{description}</p>
        </div>

        {/* Content (article list from MDX) */}
        <div className="category-content">
          {children}
        </div>
      </div>
    </div>
  )
}
