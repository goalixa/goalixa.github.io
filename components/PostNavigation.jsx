import Link from 'next/link'

export default function PostNavigation({ previousPost, nextPost }) {
  if (!previousPost && !nextPost) {
    return null
  }

  return (
    <nav className="post-navigation">
      <div className="post-nav-grid">
        {previousPost && (
          <Link href={previousPost.href} className="post-nav-link post-nav-prev">
            <div className="post-nav-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Previous
            </div>
            <div className="post-nav-title">{previousPost.title}</div>
          </Link>
        )}

        {nextPost && (
          <Link href={nextPost.href} className="post-nav-link post-nav-next">
            <div className="post-nav-label">
              Next
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
            <div className="post-nav-title">{nextPost.title}</div>
          </Link>
        )}
      </div>
    </nav>
  )
}
