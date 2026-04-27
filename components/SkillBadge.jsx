export default function SkillBadge({ children, variant = 'default' }) {
  const variants = {
    default: {
      background: 'var(--accent-bg, #dbeafe)',
      color: 'var(--accent-text, #1e40af)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--link, #2563eb)',
      border: '1px solid var(--link, #2563eb)'
    },
    muted: {
      background: 'var(--bg-elev, #f8fafc)',
      color: 'var(--muted, #64748b)',
      border: '1px solid var(--border, #e2e8f0)'
    }
  }

  const style = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.85rem',
    fontWeight: 500,
    marginRight: '8px',
    marginBottom: '8px',
    ...variants[variant]
  }

  return <span style={style}>{children}</span>
}
