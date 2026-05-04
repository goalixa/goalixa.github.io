'use client'

import { useEffect, useRef, useState } from 'react'

export default function Mermaid({ chart }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !chart) return

    // Clean the chart code (remove extra whitespace, trim)
    const cleanChart = typeof chart === 'string'
      ? chart.trim()
      : String(chart).trim()

    if (!cleanChart) {
      setError('Empty diagram code')
      return
    }

    import('mermaid').then((mermaid) => {
      mermaid.default.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
          fontSize: '14px',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis'
        },
        sequence: {
          useMaxWidth: true,
          actorMargin: 50,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35
        }
      })

      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

      mermaid.default.render(id, cleanChart).then(({ svg }) => {
        setSvg(svg)
        setError(null)
      }).catch((error) => {
        console.error('Mermaid rendering error:', error)
        console.error('Chart code:', cleanChart)
        setError(error.message)
      })
    }).catch((err) => {
      console.error('Failed to load mermaid:', err)
      setError('Failed to load mermaid library')
    })
  }, [chart])

  if (error) {
    return (
      <div className="mermaid-container" style={{ padding: '20px', background: '#fee', border: '1px solid #fcc', borderRadius: '4px' }}>
        <strong>Mermaid Error:</strong> {error}
        <pre style={{ marginTop: '10px', fontSize: '12px', overflow: 'auto' }}>
          {chart}
        </pre>
      </div>
    )
  }

  return (
    <div className="mermaid-container" ref={ref}>
      {svg ? (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="mermaid-loading" style={{ padding: '20px', textAlign: 'center', opacity: 0.6 }}>
          Loading diagram...
        </div>
      )}
    </div>
  )
}
