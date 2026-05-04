import Mermaid from './components/Mermaid'

/** @type {import('nextra-theme-docs').ThemeConfig} */
const themeConfig = {
  components: {
    code: (props) => {
      // Check if this is a mermaid code block
      const { className, children, ...rest } = props

      if (className === 'language-mermaid') {
        // Extract the actual code content
        const code = typeof children === 'string' ? children : String(children)
        return <Mermaid chart={code} />
      }

      // Default code rendering
      return <code className={className} {...rest}>{children}</code>
    }
  },
  project: {
    link: 'https://github.com/goalixa',
  },
  docsRepositoryBase: 'https://github.com/goalixa/goalixa.github.io/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Amirreza Rezaie'
    }
  },
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
      <img src="/assets/goalixa-icon-192.png" alt="Goalixa" style={{ height: '28px', width: 'auto' }} />
      <span>Engineering Blog</span>
    </span>
  ),
  head: (
    <>
      <link rel="icon" href="/assets/goalixa-icon-192.png" type="image/png" />
      <meta name="description" content="Amirreza Rezaie - Site Reliability Engineer at Snapp. Building reliable systems, learning in public." />
      <meta name="author" content="Amirreza Rezaie" />
      <meta property="og:title" content="Amirreza Rezaie - Engineering Blog" />
      <meta property="og:description" content="SRE insights, platform engineering, and building Goalixa - a productivity platform." />
      <meta property="og:type" content="website" />
    </>
  ),
  banner: {
    key: 'goalixa-2026',
    text: (
      <a href="/journey" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        Read the full Goalixa journey - from concept to production →
      </a>
    )
  },
  footer: {
    text: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://linkedin.com/in/amirreza-rezaie-" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AmirrezaRezaie" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://goalixa.com" target="_blank" rel="noopener noreferrer">Goalixa</a>
        </div>
        <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Amirreza Rezaie — Site Reliability Engineer at Snapp
        </span>
      </div>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true
  },
  toc: {
    float: true,
    backToTop: true
  },
  navigation: {
    prev: true,
    next: true
  },
  feedback: {
    content: 'Question? Give feedback →',
    useLink: () => 'https://github.com/goalixa/goalixa.github.io/issues/new'
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  primaryHue: 220,
  primarySaturation: 100
}

export default themeConfig
