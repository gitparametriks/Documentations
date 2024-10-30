import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  lang: "en-US",
  title: "PARMAETRIKS",
  description: "Official documentation site for PARAMETRIKS",
  themeConfig: {
    mermaidPlugin: {
      class: "mermaid my-class",
    },
    logo: "/parametriks.png",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      { text: "Introduction and Overview", link: "/introduction_overview.md" },
      {
        text: "Business and Market Strategy",
        link: "/business_market_strategy.md",
      },
      {
        text: "Investor Information",
        link: "/investor_information.md",
      },
      {
        text: "Technology",
        items: [
          { text: "Technology Overview", link: "/technology_overview.md" },
          {
            text: "Frontend",
            link: "/frontend.md",
          },
          {
            text: "Backend",
            link: "/backend.md",
          },
          {
            text: "Database Relational Diagram",
            link: "/database-relational-diagram.md",
          },
        ],
      },
      {
        text: "Project Management and Collaboration",
        link: "/project_management_collaboration.md",
      },
      {
        text: "Onboarding for New Employees",
        link: "/employee_onboarding.md",
      },
      {
        text: "Use Cases and Scenarios",
        link: "/use_cases_scenarios.md",
      },
      {
        text: "About Javian",
        link: "/about-me.md",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/orgs/gitparametriks/dashboard",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/parametriks-insurance/",
      },
    ],
  },
});
