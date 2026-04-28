export default function AllPostsPage() {
  return (
    <div className="posts-container">
      <div className="posts-grid">
        {/* Header */}
        <div className="posts-header">
          <h1 className="posts-title">All Posts</h1>
          <p className="posts-subtitle">
            Browse all engineering articles organized by category. Each post documents real challenges,
            solutions, and lessons learned while building Goalixa.
          </p>
        </div>

        {/* Categories */}
        <div className="posts-section">
          <h2 className="posts-section-title">Browse by Category</h2>

          <div className="posts-categories">
            <a href="/posts/goalixa-story" className="posts-category">
              <div className="posts-category-icon">Story</div>
              <h3 className="posts-category-title">Goalixa Story</h3>
              <p className="posts-category-desc">The personal journey of building a productivity platform</p>
              <div className="posts-category-count">3 posts</div>
            </a>

            <a href="/posts/gitops" className="posts-category">
              <div className="posts-category-icon">GitOps</div>
              <h3 className="posts-category-title">GitOps</h3>
              <p className="posts-category-desc">ArgoCD, deployment automation, and infrastructure as code</p>
              <div className="posts-category-count">2 posts</div>
            </a>

            <a href="/posts/incident-reports" className="posts-category">
              <div className="posts-category-icon">Alert</div>
              <h3 className="posts-category-title">Incident Reports</h3>
              <p className="posts-category-desc">Production incidents, root cause analysis, and post-mortems</p>
              <div className="posts-category-count">1 post</div>
            </a>

            <a href="/posts/ai" className="posts-category">
              <div className="posts-category-icon">AI</div>
              <h3 className="posts-category-title">AI & Automation</h3>
              <p className="posts-category-desc">CrewAI, LangChain, and intelligent DevOps assistants</p>
              <div className="posts-category-count">1 post</div>
            </a>

            <a href="/posts/monthly-recaps" className="posts-category">
              <div className="posts-category-icon">Recap</div>
              <h3 className="posts-category-title">Monthly Recaps</h3>
              <p className="posts-category-desc">Monthly progress updates and reflections</p>
              <div className="posts-category-count">2 posts</div>
            </a>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="posts-section">
          <h2 className="posts-section-title">Recent Posts</h2>

          <div className="posts-list">
            <a href="/posts/ai/syntra-architecture" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">AI</span>
                <span className="posts-card-date">April 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">15 min read</span>
              </div>
              <h3 className="posts-card-title">Syntra Architecture: AI DevOps Orchestration</h3>
              <p className="posts-card-desc">
                Deep dive into building an AI-powered DevOps assistant using CrewAI and Claude.
              </p>
            </a>

            <a href="/posts/gitops/argocd-applications-sync-strategy" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">GitOps</span>
                <span className="posts-card-date">March 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">10 min read</span>
              </div>
              <h3 className="posts-card-title">ArgoCD Sync Strategy: Managing Application Deployments</h3>
              <p className="posts-card-desc">
                Understanding sync policies, waves, and hooks for reliable GitOps deployments.
              </p>
            </a>

            <a href="/posts/gitops/argocd-first-step" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">GitOps</span>
                <span className="posts-card-date">February 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">8 min read</span>
              </div>
              <h3 className="posts-card-title">ArgoCD First Step: Getting Started with GitOps</h3>
              <p className="posts-card-desc">
                Setting up ArgoCD for the first time and connecting it to your Kubernetes cluster.
              </p>
            </a>

            <a href="/posts/incident-reports/pwa-path-latency-incident" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">Incident</span>
                <span className="posts-card-date">February 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">6 min read</span>
              </div>
              <h3 className="posts-card-title">PWA Path Latency Incident</h3>
              <p className="posts-card-desc">
                A production incident caused by path changes in the PWA, and how we diagnosed and fixed it.
              </p>
            </a>

            <a href="/posts/goalixa-story/learning-in-wartime-kubernetes-plan" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">Story</span>
                <span className="posts-card-date">February 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">7 min read</span>
              </div>
              <h3 className="posts-card-title">Learning in Wartime: Kubernetes Planning</h3>
              <p className="posts-card-desc">
                How external challenges shaped my approach to infrastructure and learning priorities.
              </p>
            </a>

            <a href="/posts/goalixa-story/survive-in-war-time" className="posts-card">
              <div className="posts-card-meta">
                <span className="posts-card-tag">Story</span>
                <span className="posts-card-date">February 2026</span>
                <span className="posts-card-dot">•</span>
                <span className="posts-card-read">5 min read</span>
              </div>
              <h3 className="posts-card-title">Surviving in Wartime</h3>
              <p className="posts-card-desc">
                Personal reflections on continuing to build and learn during difficult circumstances.
              </p>
            </a>
          </div>
        </div>

        {/* Other Sections */}
        <div className="posts-section">
          <h2 className="posts-section-title">More Topics</h2>

          <div className="posts-topics">
            <a href="/sre" className="posts-topic">
              <div className="posts-topic-icon">SRE</div>
              <div className="posts-topic-title">Site Reliability</div>
            </a>
            <a href="/devops" className="posts-topic">
              <div className="posts-topic-icon">Ops</div>
              <div className="posts-topic-title">DevOps</div>
            </a>
            <a href="/platform" className="posts-topic">
              <div className="posts-topic-icon">Arch</div>
              <div className="posts-topic-title">Platform</div>
            </a>
            <a href="/software-engineering" className="posts-topic">
              <div className="posts-topic-icon">Dev</div>
              <div className="posts-topic-title">Engineering</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
