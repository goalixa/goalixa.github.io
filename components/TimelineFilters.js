import { useState } from 'react'

export default function TimelineFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'engineering', label: 'Software Engineering' },
    { id: 'devops', label: 'DevOps' },
    { id: 'gitops', label: 'GitOps' },
    { id: 'incident', label: 'Incidents' },
    { id: 'story', label: 'Story' }
  ]

  const handleFilter = (filterId) => {
    setActiveFilter(filterId)
    // Filter logic will be handled by CSS/JS on the page
    const items = document.querySelectorAll('.timeline-item')
    const milestones = document.querySelectorAll('.timeline-milestone')

    items.forEach(item => {
      const category = item.getAttribute('data-category')
      if (filterId === 'all' || category === filterId) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })

    milestones.forEach(milestone => {
      if (filterId === 'all') {
        milestone.style.display = 'block'
      } else {
        milestone.style.display = 'none'
      }
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      margin: '24px 0',
      padding: '16px',
      background: 'var(--bg-elev, #ffffff)',
      border: '1px solid var(--border, #e2e8f0)',
      borderRadius: '12px'
    }}>
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => handleFilter(filter.id)}
          style={{
            padding: '8px 16px',
            border: '1px solid var(--border, #e2e8f0)',
            background: activeFilter === filter.id
              ? 'var(--link, #2563eb)'
              : 'var(--card-bg, #ffffff)',
            color: activeFilter === filter.id
              ? 'white'
              : 'var(--text, #1e293b)',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.borderColor = 'var(--link, #2563eb)'
              e.currentTarget.style.background = 'var(--card-hover-bg, #f8fafc)'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.borderColor = 'var(--border, #e2e8f0)'
              e.currentTarget.style.background = 'var(--card-bg, #ffffff)'
            }
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
