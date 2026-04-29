import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function Search({ posts = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const router = useRouter()

  // Search posts
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase()
    const filtered = posts.filter(post => {
      const titleMatch = post.title?.toLowerCase().includes(searchQuery)
      const descriptionMatch = post.description?.toLowerCase().includes(searchQuery)
      const categoryMatch = post.category?.toLowerCase().includes(searchQuery)
      return titleMatch || descriptionMatch || categoryMatch
    })

    setResults(filtered.slice(0, 8)) // Limit to 8 results
    setSelectedIndex(0)
  }, [query, posts])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }

      // Arrow keys for navigation
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % results.length)
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
        }
        if (e.key === 'Enter' && results[selectedIndex]) {
          e.preventDefault()
          router.push(results[selectedIndex].href)
          setIsOpen(false)
          setQuery('')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, router])

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const handleClose = () => {
    setIsOpen(false)
    setQuery('')
  }

  const handleSelectResult = (href) => {
    router.push(href)
    handleClose()
  }

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={handleOpen}
        className="search-trigger"
        aria-label="Search posts"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <span className="search-trigger-text">Search posts...</span>
        <kbd className="search-trigger-kbd">⌘K</kbd>
      </button>

      {/* Search modal */}
      {isOpen && (
        <div className="search-modal-overlay" onClick={handleClose}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            {/* Search input */}
            <div className="search-input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              <button onClick={handleClose} className="search-close" aria-label="Close search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Search results */}
            <div className="search-results">
              {query.trim() === '' && (
                <div className="search-empty">
                  <p>Start typing to search posts...</p>
                </div>
              )}

              {query.trim() !== '' && results.length === 0 && (
                <div className="search-empty">
                  <p>No results found for "{query}"</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="search-results-list">
                  {results.map((result, index) => (
                    <button
                      key={result.href}
                      className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                      onClick={() => handleSelectResult(result.href)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      {result.category && (
                        <span className="search-result-category">{result.category}</span>
                      )}
                      <div className="search-result-title">{result.title}</div>
                      {result.description && (
                        <div className="search-result-description">{result.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="search-footer">
              <div className="search-footer-shortcuts">
                <kbd>↑↓</kbd> Navigate
                <kbd>↵</kbd> Select
                <kbd>ESC</kbd> Close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
