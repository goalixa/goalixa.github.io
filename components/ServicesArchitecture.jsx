import { useState, useEffect } from 'react'

export default function ServicesArchitecture() {
  const [activeNode, setActiveNode] = useState(null)
  const [flowActive, setFlowActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Auto-animate flow on mount
    const timer = setTimeout(() => setFlowActive(true), 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const nodes = [
    {
      id: 'user',
      label: 'USER',
      x: 50,
      y: 50,
      type: 'start',
      description: 'Entry point to Goalixa ecosystem'
    },
    {
      id: 'landing',
      label: 'LANDING',
      x: 200,
      y: 50,
      type: 'frontend',
      description: 'Marketing website at goalixa.com',
      tech: 'HTML/CSS/JS + Nginx',
      port: '80'
    },
    {
      id: 'pwa',
      label: 'PWA',
      x: 350,
      y: 50,
      type: 'frontend',
      description: 'Progressive Web App at app.goalixa.com',
      tech: 'Vanilla JS + Service Worker',
      port: '80'
    },
    {
      id: 'ingress',
      label: 'INGRESS',
      x: 500,
      y: 50,
      type: 'gateway',
      description: 'nginx-ingress on master node',
      tech: 'Kubernetes Ingress',
      ip: '5.75.206.111'
    },
    {
      id: 'bff',
      label: 'BFF',
      x: 500,
      y: 180,
      type: 'backend',
      description: 'Backend for Frontend - API Gateway',
      tech: 'FastAPI + Redis',
      port: '80',
      routes: '/bff/auth/*, /bff/app/*, /bff/aggregate/*'
    },
    {
      id: 'auth',
      label: 'AUTH',
      x: 350,
      y: 310,
      type: 'backend',
      description: 'Authentication Service - Dual Token JWT',
      tech: 'Flask + SQLAlchemy',
      port: '80',
      features: 'Google OAuth, Email verification, Password reset'
    },
    {
      id: 'core-api',
      label: 'CORE-API',
      x: 650,
      y: 310,
      type: 'backend',
      description: 'Main Business Logic API',
      tech: 'Flask + PostgreSQL',
      port: '80',
      features: 'Tasks, Projects, Goals, Habits, Time Tracking'
    },
    {
      id: 'postgres',
      label: 'POSTGRES',
      x: 650,
      y: 440,
      type: 'database',
      description: 'Primary Database',
      tech: 'PostgreSQL 14 + Longhorn PVC',
      tables: '14 tables'
    },
    {
      id: 'redis',
      label: 'REDIS',
      x: 350,
      y: 440,
      type: 'database',
      description: 'Cache Layer',
      tech: 'Redis 7',
      purpose: 'BFF caching'
    }
  ]

  const connections = [
    { from: 'user', to: 'landing', label: '1. DISCOVER', delay: 0 },
    { from: 'landing', to: 'pwa', label: '2. SIGNUP', delay: 0.2 },
    { from: 'pwa', to: 'ingress', label: '3. REQUEST', delay: 0.4 },
    { from: 'ingress', to: 'bff', label: '4. ROUTE', delay: 0.6 },
    { from: 'bff', to: 'auth', label: '5. AUTHENTICATE', delay: 0.8 },
    { from: 'bff', to: 'core-api', label: '6. PROCESS', delay: 1.0 },
    { from: 'core-api', to: 'postgres', label: '7. PERSIST', delay: 1.2 },
    { from: 'bff', to: 'redis', label: 'CACHE', delay: 1.4, type: 'cache' }
  ]

  const getNodePosition = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }

  const getNodeColor = (type) => {
    switch(type) {
      case 'start': return 'var(--node-start)'
      case 'frontend': return 'var(--node-frontend)'
      case 'gateway': return 'var(--node-gateway)'
      case 'backend': return 'var(--node-backend)'
      case 'database': return 'var(--node-database)'
      default: return 'var(--node-default)'
    }
  }

  return (
    <div className="services-architecture">
      <div className="architecture-header">
        <div className="architecture-title-group">
          <span className="architecture-label">SYSTEM DIAGRAM</span>
          <h2 className="architecture-title">Request Flow Architecture</h2>
        </div>
        <div className="architecture-legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--node-frontend)' }}></div>
            <span>Frontend</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--node-gateway)' }}></div>
            <span>Gateway</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--node-backend)' }}></div>
            <span>Backend</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--node-database)' }}></div>
            <span>Data</span>
          </div>
        </div>
      </div>

      {isMobile ? (
        // Mobile: Simplified vertical flow
        <div className="architecture-canvas-mobile">
          {[
            { label: 'USER', desc: 'Entry point', type: 'start' },
            { label: 'LANDING', desc: 'Marketing at goalixa.com', type: 'frontend' },
            { label: 'PWA', desc: 'App at app.goalixa.com', type: 'frontend' },
            { label: 'INGRESS', desc: 'nginx-ingress gateway', type: 'gateway' },
            { label: 'BFF', desc: 'API Gateway', type: 'backend' },
            { label: 'AUTH + CORE-API', desc: 'Auth & Business Logic', type: 'backend' },
            { label: 'POSTGRES + REDIS', desc: 'Database & Cache', type: 'database' }
          ].map((node, idx) => (
            <div key={idx} className="mobile-flow-item">
              <div className={`mobile-node ${node.type}`}>
                <div className="mobile-node-label">{node.label}</div>
                <div className="mobile-node-desc">{node.desc}</div>
              </div>
              {idx < 6 && (
                <div className="mobile-arrow">
                  <svg width="20" height="40" viewBox="0 0 20 40">
                    <path d="M10 0 L10 30 M10 30 L5 25 M10 30 L15 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop: Interactive diagram
        <div className="architecture-canvas" role="img" aria-label="Interactive architecture diagram showing request flow">
          <svg className="architecture-connections" viewBox="0 0 800 500">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="var(--flow-color)" />
            </marker>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {connections.map((conn, idx) => {
            const from = getNodePosition(conn.from)
            const to = getNodePosition(conn.to)
            const isCache = conn.type === 'cache'

            return (
              <g key={idx}>
                <line
                  x1={from.x + 60}
                  y1={from.y + 40}
                  x2={to.x + 60}
                  y2={to.y + 40}
                  className={`connection ${flowActive ? 'active' : ''} ${isCache ? 'cache-line' : ''}`}
                  markerEnd="url(#arrowhead)"
                  style={{ animationDelay: `${conn.delay}s` }}
                />

                {flowActive && (
                  <circle
                    className="flow-particle"
                    r="4"
                    fill="var(--accent-glow)"
                    filter="url(#glow)"
                    style={{ animationDelay: `${conn.delay}s` }}
                  >
                    <animateMotion
                      dur="2s"
                      begin={`${conn.delay}s`}
                      repeatCount="indefinite"
                      path={`M ${from.x + 60} ${from.y + 40} L ${to.x + 60} ${to.y + 40}`}
                    />
                  </circle>
                )}

                <text
                  x={(from.x + to.x) / 2 + 60}
                  y={(from.y + to.y) / 2 + 30}
                  className="connection-label"
                  style={{ animationDelay: `${conn.delay + 0.3}s` }}
                >
                  {conn.label}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="architecture-nodes">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`arch-node ${node.type} ${activeNode === node.id ? 'active' : ''}`}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                '--node-color': getNodeColor(node.type)
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="node-header">
                <div className="node-status"></div>
                <span className="node-label">{node.label}</span>
              </div>

              {activeNode === node.id && (
                <div className="node-tooltip">
                  <div className="tooltip-title">{node.description}</div>
                  {node.tech && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">TECH:</span>
                      <span className="tooltip-value">{node.tech}</span>
                    </div>
                  )}
                  {node.port && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">PORT:</span>
                      <span className="tooltip-value">{node.port}</span>
                    </div>
                  )}
                  {node.ip && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">IP:</span>
                      <span className="tooltip-value">{node.ip}</span>
                    </div>
                  )}
                  {node.routes && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">ROUTES:</span>
                      <span className="tooltip-value">{node.routes}</span>
                    </div>
                  )}
                  {node.features && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">FEATURES:</span>
                      <span className="tooltip-value">{node.features}</span>
                    </div>
                  )}
                  {node.tables && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">SCHEMA:</span>
                      <span className="tooltip-value">{node.tables}</span>
                    </div>
                  )}
                  {node.purpose && (
                    <div className="tooltip-row">
                      <span className="tooltip-key">PURPOSE:</span>
                      <span className="tooltip-value">{node.purpose}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      )}

      <div className="architecture-footer">
        <div className="footer-stat">
          <span className="stat-value">9</span>
          <span className="stat-label">Components</span>
        </div>
        <div className="footer-stat">
          <span className="stat-value">6</span>
          <span className="stat-label">Microservices</span>
        </div>
        <div className="footer-stat">
          <span className="stat-value">~50ms</span>
          <span className="stat-label">Avg Latency</span>
        </div>
        <div className="footer-stat">
          <span className="stat-value">99.9%</span>
          <span className="stat-label">Uptime</span>
        </div>
      </div>
    </div>
  )
}
