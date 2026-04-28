export default function PostCard({ title, description, href, date, category, readTime, featured = false }) {
  const cardClass = featured ? 'post-card post-card-featured' : 'post-card'

  return (
    <a href={href} className={cardClass}>
      <div className="post-card-content">
        <h3 className="post-card-title">{title}</h3>
        {description && <p className="post-card-description">{description}</p>}
        <div className="post-card-meta">
          {date && <span className="post-card-date">{date}</span>}
          {readTime && <span className="post-card-read-time">{readTime} read</span>}
          {category && <span className="post-card-category">{category}</span>}
        </div>
      </div>
    </a>
  )
}
