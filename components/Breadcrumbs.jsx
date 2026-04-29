import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Breadcrumbs() {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter(segment => segment && !segment.startsWith('#'))

  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) {
    return null
  }

  const formatSegment = (segment) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      return {
        label: formatSegment(decodeURIComponent(segment)),
        href: href
      }
    })
  ]

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="breadcrumbs-item">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className="breadcrumbs-link">
                  {crumb.label}
                </Link>
                <span className="breadcrumbs-separator">/</span>
              </>
            ) : (
              <span className="breadcrumbs-current">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
