import { useState, useEffect } from 'react'

export default function TableOfContents() {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Extract all h2 and h3 headings from the article
    const article = document.querySelector('article')
    if (!article) return

    const headingElements = article.querySelectorAll('h2, h3')
    const headingData = Array.from(headingElements).map((heading) => {
      // Create ID if it doesn't exist
      if (!heading.id) {
        heading.id = heading.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      }

      return {
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName.toLowerCase()
      }
    })

    setHeadings(headingData)

    // Set initial active heading
    if (headingData.length > 0) {
      setActiveId(headingData[0].id)
    }
  }, [])

  useEffect(() => {
    // Scroll spy: track which heading is currently in view
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean)

      // Find the heading that's currently in view
      // We check which heading is closest to the top of the viewport
      let current = headings[0]?.id || ''

      for (const heading of headingElements) {
        const rect = heading.getBoundingClientRect()
        // If heading is above the middle of the viewport, it's the current one
        if (rect.top <= 100) {
          current = heading.id
        }
      }

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  if (headings.length === 0) return null

  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false) // Close on mobile after clicking
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="toc-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <span>Contents</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Table of Contents */}
      <nav className={`toc ${isOpen ? 'toc-open' : ''}`} aria-label="Table of contents">
        <div className="toc-header">
          <span className="toc-title">On This Page</span>
        </div>

        <ul className="toc-list">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`toc-item toc-item-${heading.level} ${activeId === heading.id ? 'toc-item-active' : ''}`}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className="toc-link"
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
