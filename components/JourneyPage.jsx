export default function JourneyPage() {
  return (
    <div className="journey-container">
      <div className="journey-grid">
        {/* Header */}
        <div className="journey-header">
          <h1 className="journey-title">The Goalixa Journey</h1>
          <p className="journey-subtitle">
            The complete story of building Goalixa - from idea to production, through challenges and lessons learned.
          </p>
          <div className="journey-intro">
            <p>
              This is the narrative story of how Goalixa evolved from a concept to a production-ready productivity platform.
              Each chapter represents a phase of the journey, with personal reflections and technical details.
            </p>
          </div>
        </div>

        {/* Chapter 1 */}
        <div className="journey-chapter">
          <div className="journey-chapter-header">
            <span className="journey-chapter-number">01</span>
            <h2 className="journey-chapter-title">The Beginning</h2>
          </div>
          <div className="journey-chapter-content">
            <h3 className="journey-subtitle-h3">Why I Started Goalixa</h3>
            <p>
              The journey began with a simple problem: I needed a better way to manage my goals, projects, and daily tasks.
              Existing tools didn't quite fit the way I think about productivity - I wanted something that could bridge the gap
              between high-level goals and daily action items.
            </p>
            <div className="journey-meta">
              <span className="journey-status journey-status-story">📖 Story in progress</span>
              <span className="journey-period">Initial concept and early development</span>
            </div>
            <div className="journey-links">
              <h4>Key Posts</h4>
              <a href="/posts/goalixa-story/survive-in-war-time" className="journey-link">
                Survive in War Time →
              </a>
              <a href="/platform/why-goalixa-is-ai-developed" className="journey-link">
                Why Goalixa Is AI-Developed →
              </a>
            </div>
            <div className="journey-lessons">
              <h4>Lessons Learned</h4>
              <ul>
                <li>Start with a clear problem statement</li>
                <li>Build what you would use yourself</li>
                <li>Keep the vision simple but ambitious</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="journey-chapter">
          <div className="journey-chapter-header">
            <span className="journey-chapter-number">02</span>
            <h2 className="journey-chapter-title">Learning in Wartime</h2>
          </div>
          <div className="journey-chapter-content">
            <h3 className="journey-subtitle-h3">Building Under Crisis Conditions</h3>
            <p>
              Building a startup is hard. Building a startup during wartime in Iran with severe internet restrictions is
              exponentially harder. In March 2026, I found myself in exactly this situation - intermittent internet access,
              VPN services as the only connection method, and servers located outside the country.
            </p>
            <p>
              Despite these challenges, I used the downtime to study deeply and plan the infrastructure upgrades that Goalixa would need.
            </p>
            <div className="journey-meta">
              <span className="journey-status journey-status-ongoing">🔄 Ongoing challenges</span>
              <span className="journey-period">March 2026 - Present</span>
            </div>
            <div className="journey-links">
              <h4>Key Posts</h4>
              <a href="/posts/goalixa-story/survive-in-war-time" className="journey-link">
                Survive in War Time →
              </a>
              <a href="/posts/goalixa-story/learning-in-wartime-kubernetes-plan" className="journey-link">
                Learning in Wartime: Preparing Infrastructure →
              </a>
            </div>
            <div className="journey-lessons">
              <h4>Lessons Learned</h4>
              <ul>
                <li>Adaptability is everything when circumstances change</li>
                <li>Use downtime productively - study and plan</li>
                <li>Infrastructure resilience matters more than I thought</li>
                <li>Remote access patterns become critical in crisis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="journey-chapter">
          <div className="journey-chapter-header">
            <span className="journey-chapter-number">03</span>
            <h2 className="journey-chapter-title">First Deployments & Early Architecture</h2>
          </div>
          <div className="journey-chapter-content">
            <h3 className="journey-subtitle-h3">From Monolith to Microservices</h3>
            <p>
              The early architecture of Goalixa was straightforward: three main services (app, auth, landing), each with its own
              subdomain and frontend. While this worked initially, it created problems with complex redirect flows, cookie consistency,
              fragmented UI ownership, and high blast radius during incidents.
            </p>
            <div className="journey-meta">
              <span className="journey-status journey-status-complete">✅ Migration completed</span>
              <span className="journey-period">February 2026</span>
            </div>
            <div className="journey-links">
              <h4>Key Posts</h4>
              <a href="/platform/migrate-monolithic-to-microservice" className="journey-link">
                Migrate Monolithic to Microservice →
              </a>
              <a href="/platform/api-gateway-pwa-microservices" className="journey-link">
                From Fragmented UIs to One PWA →
              </a>
            </div>
            <div className="journey-lessons">
              <h4>Lessons Learned</h4>
              <ul>
                <li>Microservices require unified frontend experience</li>
                <li>API Gateway is essential for true microservices</li>
                <li>Fragmented UIs slow down product iteration</li>
                <li>Single points of failure create operational nightmares</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 4 */}
        <div className="journey-chapter">
          <div className="journey-chapter-header">
            <span className="journey-chapter-number">04</span>
            <h2 className="journey-chapter-title">The PWA Transformation</h2>
          </div>
          <div className="journey-chapter-content">
            <h3 className="journey-subtitle-h3">Unifying the Frontend Experience</h3>
            <p>
              The biggest milestone in Goalixa's early life was the successful migration to a Progressive Web App (PWA) architecture
              combined with an API Gateway. This transformed Goalixa from multiple fragmented UIs into a single, cohesive user experience.
            </p>
            <div className="journey-meta">
              <span className="journey-status journey-status-complete">✅ Completed</span>
              <span className="journey-period">February 20, 2026</span>
            </div>
            <div className="journey-links">
              <h4>Key Posts</h4>
              <a href="/platform/migrate-to-pwa-success-fully" className="journey-link">
                Migrate to PWA Successfully →
              </a>
              <a href="/platform/removing-ui-from-legacy-auth-redirection" className="journey-link">
                Removing UI from Legacy Services →
              </a>
            </div>
            <div className="journey-lessons">
              <h4>Lessons Learned</h4>
              <ul>
                <li>One UI is better than many</li>
                <li>BFF pattern keeps both frontend and backend clean</li>
                <li>API Gateway enables true service independence</li>
                <li>Migration is worth the effort</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="journey-section">
          <h2 className="journey-section-title">Key Milestones</h2>
          <div className="journey-milestones">
            <div className="journey-milestone">
              <div className="journey-milestone-icon">✅</div>
              <div className="journey-milestone-content">
                <h3>Initial Concept</h3>
                <p className="journey-milestone-date">Early 2026</p>
              </div>
            </div>
            <div className="journey-milestone">
              <div className="journey-milestone-icon">✅</div>
              <div className="journey-milestone-content">
                <h3>PWA + Gateway Launch</h3>
                <p className="journey-milestone-date">February 20, 2026</p>
              </div>
            </div>
            <div className="journey-milestone">
              <div className="journey-milestone-icon">✅</div>
              <div className="journey-milestone-content">
                <h3>GitOps with ArgoCD</h3>
                <p className="journey-milestone-date">February 2026</p>
              </div>
            </div>
            <div className="journey-milestone">
              <div className="journey-milestone-icon">🚧</div>
              <div className="journey-milestone-content">
                <h3>Staging Environment</h3>
                <p className="journey-milestone-date">March 2026 - In Progress</p>
              </div>
            </div>
            <div className="journey-milestone">
              <div className="journey-milestone-icon">📋</div>
              <div className="journey-milestone-content">
                <h3>Production Launch</h3>
                <p className="journey-milestone-date">Planned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="journey-section">
          <h2 className="journey-section-title">Technology Choices</h2>
          <div className="journey-tech">
            <div className="journey-tech-item">
              <h4>Frontend</h4>
              <p>Progressive Web App (PWA)</p>
            </div>
            <div className="journey-tech-item">
              <h4>API Gateway</h4>
              <p>Nginx-based gateway</p>
            </div>
            <div className="journey-tech-item">
              <h4>Backend</h4>
              <p>Python (Flask/FastAPI) microservices</p>
            </div>
            <div className="journey-tech-item">
              <h4>Orchestration</h4>
              <p>Kubernetes</p>
            </div>
            <div className="journey-tech-item">
              <h4>GitOps</h4>
              <p>ArgoCD + Harbor</p>
            </div>
            <div className="journey-tech-item">
              <h4>Monitoring</h4>
              <p>Prometheus, Grafana, Alertmanager</p>
            </div>
          </div>
        </div>

        {/* Personal Growth */}
        <div className="journey-section">
          <h2 className="journey-section-title">Personal Growth</h2>
          <div className="journey-growth">
            <p>
              Building Goalixa has been an incredible learning journey. From understanding microservices architecture to
              implementing GitOps, from handling production incidents to building during wartime - every challenge has taught
              valuable lessons about engineering, resilience, and product development.
            </p>
            <p className="journey-highlight">
              <strong>The most important lesson:</strong> Great engineering is not just about writing code - it's about building
              systems that stay fast, reliable, and understandable under real conditions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="journey-footer">
          <p>Want the technical timeline? See the <a href="/timeline">Timeline page</a> for chronological post listings.</p>
        </div>
      </div>
    </div>
  )
}
