export default function PostCard({ title, description, href, date, category, featured = false }) {
  const cardStyle = {
    display: 'block',
    padding: featured ? '28px' : '20px',
    background: 'var(--card-bg, #ffffff)',
    border: featured ? '2px solid var(--link, #2563eb)' : '1px solid var(--border, #e2e8f0)',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    marginBottom: '16px'
  }

  const titleStyle = {
    color: featured ? 'var(--link, #2563eb)' : 'var(--heading, #0f172a)',
    fontSize: featured ? '1.35rem' : '1.1rem',
    fontWeight: 600,
    marginBottom: '8px',
    display: 'block'
  }

  const descStyle = {
    color: 'var(--muted, #64748b)',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: '12px'
  }

  const metaStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '0.85rem',
    color: 'var(--muted, #64748b)'
  }

  const badgeStyle = {
    display: 'inline-block',
    padding: '3px 10px',
    background: 'var(--accent-bg, #dbeafe)',
    color: 'var(--accent-text, #1e40af)',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 500
  }

  return (
    <a
      href={href}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = featured ? 'translateY(-4px)' : 'translateX(8px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
        e.currentTarget.style.borderColor = 'var(--link, #2563eb)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = featured ? 'var(--link, #2563eb)' : 'var(--border, #e2e8f0)'
      }}
    >
      <span style={titleStyle}>{title}</span>
      {description && <p style={descStyle}>{description}</p>}
      <div style={metaStyle}>
        {date && <span>{date}</span>}
        {category && <span style={badgeStyle}>{category}</span>}
      </div>
    </a>
  )
}
