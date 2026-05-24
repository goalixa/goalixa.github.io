import postsData from '../data/posts.json'

export default function AllPostsPage() {
  // Get top categories (max 6)
  const topCategories = postsData.categories
    .filter(cat => cat.name !== 'Uncategorized')
    .slice(0, 6);

  // Get recent posts (max 10)
  const recentPosts = postsData.posts.slice(0, 10);

  // Category icon mapping
  const getCategoryIcon = (name) => {
    const icons = {
      'Goalixa Story': '📖',
      'GitOps': '🔄',
      'Incident Reports': '🚨',
      'AI & Automation': '🤖',
      'Monthly Recaps': '📅',
      'Platform': '⚙️',
      'Infrastructure': '🏗️',
      'CI/CD': '🚀',
      'Security': '🔐',
      'Observability': '📊',
      'Software Engineering': '💻',
      'Services': '🎯',
      'Kubernetes': '☸️'
    };
    return icons[name] || '📝';
  };

  // Category tag colors
  const getCategoryColor = (name) => {
    const colors = {
      'Platform': 'bg-blue-100 text-blue-800',
      'Infrastructure': 'bg-purple-100 text-purple-800',
      'CI/CD': 'bg-indigo-100 text-indigo-800',
      'Software Engineering': 'bg-yellow-100 text-yellow-800',
      'GitOps': 'bg-green-100 text-green-800',
      'Incident Reports': 'bg-red-100 text-red-800',
      'Goalixa Story': 'bg-orange-100 text-orange-800',
      'AI & Automation': 'bg-pink-100 text-pink-800',
      'Security': 'bg-teal-100 text-teal-800',
      'Observability': 'bg-cyan-100 text-cyan-800',
      'Services': 'bg-violet-100 text-violet-800'
    };
    return colors[name] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {/* Header */}
        <div className="posts-header">
          <h1 className="posts-title">All Posts</h1>
          <p className="posts-subtitle">
            Browse all {postsData.total} engineering articles organized by category. Each post documents real challenges,
            solutions, and lessons learned while building Goalixa.
          </p>
        </div>

        {/* Categories */}
        <div className="posts-section">
          <h2 className="posts-section-title">Browse by Category</h2>

          <div className="posts-categories">
            {topCategories.map(category => (
              <a
                key={category.name}
                href={getCategoryUrl(category.name)}
                className="posts-category"
              >
                <div className="posts-category-icon">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="posts-category-title">{category.name}</h3>
                <p className="posts-category-desc">{category.description}</p>
                <div className="posts-category-count">
                  {category.count} {category.count === 1 ? 'post' : 'posts'}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="posts-section">
          <h2 className="posts-section-title">Recent Posts</h2>

          <div className="posts-list">
            {recentPosts.map(post => (
              <a key={post.path} href={post.path} className="posts-card">
                <div className="posts-card-meta">
                  <span className={`posts-card-tag ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="posts-card-date">{formatDate(post.date)}</span>
                  <span className="posts-card-dot">•</span>
                  <span className="posts-card-read">{post.readTime}</span>
                </div>
                <h3 className="posts-card-title">{post.title}</h3>
                <p className="posts-card-desc">
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* More Topics */}
        <div className="posts-section">
          <h2 className="posts-section-title">Explore More</h2>

          <div className="posts-topics">
            <a href="/infrastructure/" className="posts-topic">
              <div className="posts-topic-icon">🏗️</div>
              <div className="posts-topic-title">Infrastructure</div>
            </a>
            <a href="/platform/" className="posts-topic">
              <div className="posts-topic-icon">⚙️</div>
              <div className="posts-topic-title">Platform</div>
            </a>
            <a href="/software-engineering/" className="posts-topic">
              <div className="posts-topic-icon">💻</div>
              <div className="posts-topic-title">Engineering</div>
            </a>
            <a href="/services/" className="posts-topic">
              <div className="posts-topic-icon">🎯</div>
              <div className="posts-topic-title">Services</div>
            </a>
            <a href="/timeline/" className="posts-topic">
              <div className="posts-topic-icon">📅</div>
              <div className="posts-topic-title">Timeline</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category URL
function getCategoryUrl(categoryName) {
  const urlMap = {
    'Platform': '/platform/',
    'Infrastructure': '/infrastructure/',
    'CI/CD': '/infrastructure/cicd/',
    'Security': '/infrastructure/security/',
    'Observability': '/infrastructure/observability/',
    'Kubernetes': '/infrastructure/kubernetes/',
    'Software Engineering': '/software-engineering/',
    'Goalixa Story': '/posts/goalixa-story/',
    'GitOps': '/infrastructure/cicd/gitops/',
    'AI & Automation': '/posts/ai-automation/',
    'Incident Reports': '/infrastructure/incident-reports/',
    'Monthly Recaps': '/posts/monthly-recaps/',
    'Services': '/services/'
  };

  return urlMap[categoryName] || '/posts/';
}

// Helper function to format date
function formatDate(dateStr) {
  if (!dateStr) return '';

  try {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  } catch {
    return dateStr;
  }
}
