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
  logo: 'Goalixa Blog',
  footer: {
    text: '© ' + new Date().getFullYear() + ' Goalixa. Built with Nextra.'
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
