import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Documentations",
  description: "PARAMETRIKS Documentations Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/parametriks.png',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      {
        text: 'IoT-Dashboard-Frontend',
        items: [
          { text: 'About Project', link: '/IoT-Dashboard-Frontend/about-project.md' },
          { text: 'Getting Started', link: '/IoT-Dashboard-Frontend/getting-started.md' },
        ]
      },
      {
        text: 'IoT-Dashboard-Backend',
        items: [
          { text: 'Database Relational Diagram', link: '/IoT-Dashboard-Backend/database-relational-diagram.md' },
          { text: 'Machine Learning-Assisted Data Transformation for Insurance Platform', link: '/IoT-Dashboard-Backend/machine-learning-assisted-data-transformation-for-insurance-platform.md' }
        ]
      },
      {
        text: 'NOC-Intern',
        items: [
          { text: 'About Me', link: '/NOC-Intern/about-me.md' },
          { text: 'What to Know', link: '/NOC-Intern/what-to-know.md' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/gitparametriks/dashboard' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/parametriks-insurance/' }
    ]
  }
})
