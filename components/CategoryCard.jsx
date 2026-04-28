export default function CategoryCard({ title, description, href, count, icon }) {
  return (
    <a href={href} className="category-card">
      <div className="category-card-icon">{icon}</div>
      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-description">{description}</p>
        {count && <span className="category-card-count">{count} posts</span>}
      </div>
    </a>
  )
}
