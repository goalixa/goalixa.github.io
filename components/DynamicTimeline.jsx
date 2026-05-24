import postsData from '../data/posts.json'

// Category badge styles matching the existing timeline
const categoryStyles = {
  'Infrastructure': { bg: '#f3e8ff', color: '#6b21a8', label: 'Infrastructure' },
  'Platform': { bg: '#dbeafe', color: '#1e40af', label: 'Architecture' },
  'Software Engineering': { bg: '#fef3c7', color: '#92400e', label: 'Software Engineering' },
  'GitOps': { bg: '#dcfce7', color: '#166534', label: 'GitOps' },
  'Incident': { bg: '#fee2e2', color: '#991b1b', label: 'Incident Report' },
  'Story': { bg: '#fed7aa', color: '#9a3412', label: 'Goalixa Story' }
}

// Determine badge category from path
function getBadgeCategory(path) {
  if (path.includes('gitops')) return 'GitOps'
  if (path.includes('incident')) return 'Incident'
  if (path.includes('goalixa-story')) return 'Story'

  // For posts, use the category from posts.json
  const post = postsData.posts.find(p => p.path === path)
  return post ? post.category : 'Infrastructure'
}

// Group posts by month/year
function groupPostsByMonth(posts) {
  const grouped = {}

  posts.forEach(post => {
    const date = new Date(post.date)
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    if (!grouped[monthYear]) {
      grouped[monthYear] = []
    }

    grouped[monthYear].push({
      ...post,
      dateObj: date,
      formattedDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    })
  })

  // Sort posts within each month by date
  Object.keys(grouped).forEach(month => {
    grouped[month].sort((a, b) => a.dateObj - b.dateObj)
  })

  return grouped
}

export default function DynamicTimeline() {
  // Sort posts by date (oldest first for chronological timeline)
  const sortedPosts = [...postsData.posts].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  )

  const postsByMonth = groupPostsByMonth(sortedPosts)
  const months = Object.keys(postsByMonth).sort((a, b) =>
    new Date(a) - new Date(b)
  )

  return (
    <>
      {months.map(month => (
        <div key={month}>
          <h2>{month}</h2>

          {postsByMonth[month].map((post, index) => {
            const badgeCategory = getBadgeCategory(post.path)
            const style = categoryStyles[badgeCategory] || categoryStyles['Infrastructure']

            // Check if we should show a date header
            const showDateHeader = index === 0 ||
              post.formattedDate !== postsByMonth[month][index - 1].formattedDate

            return (
              <div key={post.path}>
                {showDateHeader && (
                  <h3>{post.formattedDate}</h3>
                )}

                <a href={post.path}>
                  <strong>{post.title}</strong>
                </a>

                <span style={{
                  background: style.bg,
                  color: style.color,
                  padding: '3px 9px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginLeft: '8px'
                }}>
                  {style.label}
                </span>

                <span style={{
                  marginLeft: '8px',
                  color: '#64748b',
                  fontSize: '0.85rem'
                }}>
                  🕐 {post.readTime}
                </span>

                <hr />
              </div>
            )
          })}
        </div>
      ))}

      <h2>Timeline Categories</h2>

      <ul>
        <li><strong>Architecture</strong> - System design, microservices, API Gateway, BFF patterns</li>
        <li><strong>Software Engineering</strong> - Development practices, AI-assisted coding, lessons learned</li>
        <li><strong>Infrastructure</strong> - Kubernetes, monitoring, security, and infrastructure operations</li>
        <li><strong>GitOps</strong> - ArgoCD, deployment automation, Git workflows</li>
        <li><strong>Incident Reports</strong> - Production issues, root cause analysis, resolutions</li>
        <li><strong>Goalixa Story</strong> - Personal journey, challenges, learning experiences</li>
      </ul>

      <hr />

      <p style={{ fontStyle: 'italic' }}>
        Want the narrative version? See the <a href="/journey">Journey page</a> for the full story format.
      </p>
    </>
  )
}
