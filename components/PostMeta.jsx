export default function PostMeta({ date, category, author = "Amirreza Rezaie", readTime, hideAvatar = true }) {
  return (
    <div style={{
      marginTop: '2rem',
      marginBottom: '2.5rem',
      padding: '1.25rem 1.75rem',
      background: 'rgba(156, 163, 175, 0.05)',
      border: '2px solid rgba(156, 163, 175, 0.15)',
      borderRadius: '12px',
      fontSize: '0.95rem',
      fontFamily: 'var(--font-sans)',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        fontSize: '0.925rem'
      }}>
        {date && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontWeight: 500
          }}>
            <span style={{
              fontSize: '1.1rem',
              opacity: 0.7,
              filter: 'grayscale(0.3)'
            }}>📅</span>
            <span style={{
              color: 'var(--nextra-fg)',
              letterSpacing: '0.01em'
            }}>{date}</span>
          </div>
        )}
        {category && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span style={{
              fontSize: '1.1rem',
              opacity: 0.7,
              filter: 'grayscale(0.3)'
            }}>🏷️</span>
            <span style={{
              fontWeight: 600,
              padding: '0.375rem 1rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              color: 'rgb(59, 130, 246)',
              borderRadius: '6px',
              fontSize: '0.875rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>{category}</span>
          </div>
        )}
        {readTime && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontWeight: 500
          }}>
            <span style={{
              fontSize: '1.1rem',
              opacity: 0.7,
              filter: 'grayscale(0.3)'
            }}>⏱️</span>
            <span style={{
              color: 'var(--nextra-fg)',
              letterSpacing: '0.01em'
            }}>{readTime}</span>
          </div>
        )}
      </div>
      {!hideAvatar && (
        <div style={{
          marginTop: '1.25rem',
          paddingTop: '1.25rem',
          borderTop: '2px solid rgba(156, 163, 175, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem'
        }}>
          <img
            src="/assets/amirreza_rezaie.jpg"
            alt={author}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(156, 163, 175, 0.2)'
            }}
          />
          <span style={{
            fontWeight: 600,
            fontSize: '0.95rem',
            letterSpacing: '0.01em'
          }}>{author}</span>
        </div>
      )}
    </div>
  )
}
