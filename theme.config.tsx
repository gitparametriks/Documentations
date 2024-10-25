import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PARAMETRIKS { Documentations }" />
      <meta
        property="og:description"
        content="Documentations for the PARAMETRIKS"
      />
    </>
  ),
  logo: <span>PARAMETRIKS &#123; Documentations &#125;</span>,
  project: {
    link: "https://github.com/orgs/gitparametriks/dashboard",
  },
  footer: {
    text: "© 2024 PARAMETRIKS { Documentations }",
  },
};

export default config;
