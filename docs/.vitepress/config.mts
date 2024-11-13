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
      { text: "Home", link: "/" },
      { text: "Introduction ", link: "/introduction_overview.md" },
      {
        text: "Business and Market Strategy",
        link: "/business_market_strategy.md",
      },
      {
        text: "Investor Information",
        link: "/investor_information.md",
      },
      {
        text: "Use Cases and Scenarios",
        link: "/use_cases_scenarios.md",
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
            text: "Database Schema",
            link: "/database_schema.md",
          },
          {
            text: "Coding Conventions",
            link: "/coding_conventions.md",
          },
          {
            text: "AWS Resource Naming Conventions",
            link: "/aws_resource_naming_conventions.md",
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
        text: "Onboarding for NOC Interns",
        link: "/noc_onboarding.md",
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
