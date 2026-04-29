import Link from 'next/link'

export default function RelatedPosts({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="related-posts">
      <h3 className="related-posts-title">Related Posts</h3>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="related-post-card"
          >
            {post.category && (
              <div className="related-post-category">{post.category}</div>
            )}
            <h4 className="related-post-title">{post.title}</h4>
            {post.description && (
              <p className="related-post-description">{post.description}</p>
            )}
            <span className="related-post-link">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
