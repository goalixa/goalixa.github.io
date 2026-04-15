/** @type {import('nextra-theme-docs').ThemeConfig} */
const themeConfig = {
  project: {
    link: 'https://github.com/goalixa',
  },
  docsRepositoryBase: 'https://github.com/goalixa/goalixa.github.io/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Goalixa'
    }
  },
  logo: (
    <img src="/assets/goalixa-logo.png" alt="Goalixa" style={{ height: '28px', width: 'auto' }} />
  ),
  head: (
    <>
      <link rel="icon" href="/assets/goalixa-logo.png" type="image/png" />
      <meta name="description" content="Amirreza Rezaie's engineering blog - Site Reliability Engineer at Snapp" />
    </>
  ),
  footer: {
    text: '© ' + new Date().getFullYear() + ' Amirreza Rezaie — Site Reliability Engineer at Snapp. Building reliable systems and learning every day.'
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
    useLink: () => 'https://github.com/goalixa/goalixa.github.io/issues/new'
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  }
}

export default themeConfig
