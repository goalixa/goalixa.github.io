import PostCard from './PostCard'

const featuredPosts = [
  {
    title: 'From k3s to kubeadm: My Kubernetes Migration Journey',
    description: 'Every infrastructure decision is a trade-off. Why I migrated from k3s to kubeadm and the practical strategy for the transition.',
    href: '/sre/migrating-from-k3s-to-kubeadm',
    date: 'April 2026',
    category: 'SRE',
    readTime: '12 min'
  },
  {
    title: 'Syntra Architecture: AI DevOps Orchestration',
    description: 'Deep dive into building an AI-powered DevOps assistant using CrewAI and Claude.',
    href: '/posts/ai/syntra-architecture',
    date: 'April 2026',
    category: 'AI',
    readTime: '15 min'
  },
  {
    title: 'Latency Taught Me Better Software Engineering',
    description: 'When performance moved from a dashboard metric to something I could feel directly while using the app.',
    href: '/software-engineering/latency-taught-me-better-software-engineering',
    date: 'February 2026',
    category: 'Engineering',
    readTime: '8 min'
  }
]

export default function FeaturedPosts() {
  return (
    <div className="featured-posts-grid">
      {featuredPosts.map((post, idx) => (
        <PostCard
          key={idx}
          title={post.title}
          description={post.description}
          href={post.href}
          date={post.date}
          category={post.category}
          readTime={post.readTime}
          featured={idx === 0}
        />
      ))}
    </div>
  )
}
