import PostCard from './PostCard'

const featuredPosts = [
  {
    title: 'From k3s to kubeadm: My Kubernetes Migration Journey',
    description: 'Every infrastructure decision is a trade-off. Why I migrated from k3s to kubeadm and the practical strategy for the transition.',
    href: '/sre/migrating-from-k3s-to-kubeadm',
    date: 'April 2026',
    category: 'SRE'
  },
  {
    title: 'Syntra Architecture: AI DevOps Orchestration',
    description: 'Deep dive into building an AI-powered DevOps assistant using CrewAI and Claude.',
    href: '/posts/ai/syntra-architecture',
    date: 'April 2026',
    category: 'AI'
  },
  {
    title: 'Latency Taught Me Better Software Engineering',
    description: 'When performance moved from a dashboard metric to something I could feel directly while using the app.',
    href: '/software-engineering/latency-taught-me-better-software-engineering',
    date: 'February 2026',
    category: 'Engineering'
  }
]

export default function FeaturedPosts() {
  return (
    <div style={{ marginTop: '32px' }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--heading, #0f172a)',
        marginBottom: '20px'
      }}>
        Featured Posts
      </h2>
      <div>
        {featuredPosts.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            description={post.description}
            href={post.href}
            date={post.date}
            category={post.category}
            featured={idx === 0}
          />
        ))}
      </div>
    </div>
  )
}
