export default function PostMeta({ date, category, author = "Amirreza Rezaie", readTime }) {
  return (
    <div className="post-meta-header">
      <div className="post-meta-row">
        {date && (
          <span className="post-meta-item">
            <span className="post-meta-label">Published</span>
            <span className="post-meta-value">{date}</span>
          </span>
        )}
        {category && (
          <span className="post-meta-item">
            <span className="post-meta-label">Category</span>
            <span className="post-meta-value post-meta-category">{category}</span>
          </span>
        )}
        {readTime && (
          <span className="post-meta-item">
            <span className="post-meta-label">Read Time</span>
            <span className="post-meta-value">{readTime}</span>
          </span>
        )}
      </div>
      <div className="post-meta-author">
        <img
          src="/assets/amirreza_rezaie.jpg"
          alt={author}
          className="post-meta-avatar"
        />
        <span className="post-meta-author-name">{author}</span>
      </div>
    </div>
  )
}
