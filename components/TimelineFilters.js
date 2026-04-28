import { useState, useEffect } from 'react'

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

  const getCategoryFromBadge = (badge) => {
    const text = badge.textContent.trim().toLowerCase()
    if (text.includes('architecture')) return 'architecture'
    if (text.includes('software engineering')) return 'engineering'
    if (text.includes('devops')) return 'devops'
    if (text.includes('gitops')) return 'gitops'
    if (text.includes('incident')) return 'incident'
    if (text.includes('story')) return 'story'
    return null
  }

  const handleFilter = (filterId) => {
    setActiveFilter(filterId)

    // Get all timeline content links (posts)
    const timelineLinks = document.querySelectorAll('.timeline-content a[href^="/"]')

    // Get all h3 elements (date headers and milestones)
    const dateHeaders = document.querySelectorAll('.timeline-content h3')

    // Get all paragraphs (milestone descriptions)
    const paragraphs = document.querySelectorAll('.timeline-content p')

    // Get all hr elements
    const hrs = document.querySelectorAll('.timeline-content hr')

    // First, show everything
    timelineLinks.forEach(link => link.style.display = 'block')
    dateHeaders.forEach(h3 => h3.style.display = 'flex')
    paragraphs.forEach(p => p.style.display = 'block')
    hrs.forEach(hr => hr.style.display = 'block')

    if (filterId === 'all') {
      return
    }

    // Hide items that don't match the filter
    timelineLinks.forEach(link => {
      // Find the next span element (category badge)
      const nextElement = link.nextElementSibling
      if (nextElement && nextElement.tagName === 'SPAN') {
        const category = getCategoryFromBadge(nextElement)
        if (category !== filterId) {
          link.style.display = 'none'
          // Hide the badges and read time
          let sibling = link.nextElementSibling
          while (sibling && sibling.tagName === 'SPAN') {
            sibling.style.display = 'none'
            sibling = sibling.nextElementSibling
          }
          // Hide the following hr
          if (sibling && sibling.tagName === 'HR') {
            sibling.style.display = 'none'
          }
        }
      }
    })

    // Hide milestone headers and descriptions when filtering
    dateHeaders.forEach(h3 => {
      const nextP = h3.nextElementSibling
      if (nextP && nextP.tagName === 'P') {
        const strong = nextP.querySelector('strong:first-child')
        if (strong && (strong.textContent.includes('🚀') || strong.textContent.includes('🔧') || strong.textContent.includes('⚠️') || strong.textContent.includes('🇮🇷'))) {
          // This is a milestone, hide it when filtering
          h3.style.display = 'none'
          nextP.style.display = 'none'
          // Hide the following hr
          const nextHr = nextP.nextElementSibling
          if (nextHr && nextHr.tagName === 'HR') {
            nextHr.style.display = 'none'
          }
        }
      }
    })

    // Check if any posts are visible under each date header
    dateHeaders.forEach(h3 => {
      // Skip if already hidden (milestone)
      if (h3.style.display === 'none') return

      // Find all links after this header until the next h3
      let hasVisiblePosts = false
      let sibling = h3.nextElementSibling

      while (sibling && sibling.tagName !== 'H3' && sibling.tagName !== 'H2') {
        if (sibling.tagName === 'A' && sibling.style.display !== 'none') {
          hasVisiblePosts = true
          break
        }
        sibling = sibling.nextElementSibling
      }

      // Hide the date header if no posts are visible
      if (!hasVisiblePosts) {
        h3.style.display = 'none'
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
