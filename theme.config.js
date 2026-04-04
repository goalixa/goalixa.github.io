/** @type {import('nextra-theme-docs').ThemeConfig} */
const themeConfig = {
  project: {
    link: 'https://github.com/AmirrezaRezaie/goalixa.github.io',
  },
  docsRepositoryBase: 'https://github.com/AmirrezaRezaie/goalixa.github.io/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Goalixa Blog'
    }
  },
  logo: <span>Goalixa Blog</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Engineering notes, architecture updates, DevOps and SRE learnings from Goalixa" />
      <link rel="icon" type="image/png" href="/assets/goalixa-icon-192.png" />
      <link rel="apple-touch-icon" href="/assets/goalixa-icon-192.png" />
    </>
  ),
  footer: {
    text: (
      <div>
        <p>© {new Date().getFullYear()} Goalixa. Built with <a href="https://nextra.site">Nextra</a>.</p>
        <p style={{ marginTop: '8px' }}>
          <a href="https://linkedin.com/in/amirreza-rezaie-">LinkedIn</a>
          {' • '}
          <a href="https://github.com/AmirrezaRezaie">GitHub</a>
          {' • '}
          <a href="https://goalixa.com">goalixa.com</a>
        </p>
      </div>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  toc: {
    float: true
  },
  feedback: {
    content: 'Question? Give feedback →',
    useLink: () => 'https://github.com/AmirrezaRezaie/goalixa.github.io/issues/new'
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  }
}

export default themeConfig
