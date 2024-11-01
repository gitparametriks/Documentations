# Technology Overview

The **IoT Dashboard Frontend** is a sophisticated web application designed to manage and visualize IoT data for real-time monitoring and decision-making. Built with a modern tech stack, this dashboard leverages Next.js for optimized performance, React for a dynamic user interface, AWS for backend support, TailwindCSS for styling, and shadcn/ui for modular, customizable UI components. This document provides an overview of the core technologies, architectural choices, and development tools used.

## Core Technology Stack

| Technology      | Purpose                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Next.js**     | Provides a React-based framework with server-side rendering, static generation, and routing.                |
| **React**       | Used for building reusable components and handling the user interface.                                      |
| **TailwindCSS** | Utility-first CSS framework for responsive design and fast UI styling.                                      |
| **AWS SDK**     | Facilitates integration with AWS services, specifically AWS Cognito for authentication and user management. |
| **Recharts**    | Charting library for dynamic and interactive data visualization.                                            |
| **shadcn/ui**   | Component library built on Radix UI and TailwindCSS, offering customizable and accessible UI elements.      |

## Architecture and Key Components

The IoT Dashboard follows a modular and scalable architecture, with clear separation between core application code, reusable components, and configuration files. This structure enhances code maintainability and allows for feature expansion. Below are some of the architectural highlights:

### Next.js

Next.js is the backbone of the IoT Dashboard, enabling server-side rendering (SSR), static generation, and API routing. These features provide the following benefits:

- **Server-Side Rendering (SSR)**: Enhances performance by pre-rendering pages on the server, reducing load times for users.
- **Static Generation**: Allows certain pages to be generated at build time, optimizing performance and improving scalability.
- **API Routes**: Enables the creation of custom APIs within the application, facilitating data fetching and interaction with external services.

### React

React is used for building interactive and component-based UI. The application extensively utilizes React's component-based structure to create reusable, modular components across the dashboard. Key features of the React implementation include:

- **Hooks**: Custom hooks such as `use-sidebar-toggle`, `use-toast`, and `use-store` manage state and logic, making the codebase cleaner and more maintainable.
- **Context API**: The `auth-context.tsx` file uses React Context to handle authentication state globally across the app, allowing seamless access to user data for components that need it.

### AWS SDK and Cognito Integration

The application integrates with AWS services to support backend functionality, specifically focusing on user authentication and data security:

- **AWS Cognito**: Manages user sign-up, sign-in, and account verification, offering secure, scalable authentication. The configuration files `aws-config.js` and `aws-exports.js` handle AWS credentials and settings.
- **AWS SDK**: The SDK enables interaction with AWS services directly from the frontend, allowing real-time updates and data retrieval. AWS Cognito ensures secure and scalable user management, a critical feature for multi-client and multi-user environments.

### TailwindCSS

TailwindCSS is the primary styling framework, chosen for its utility-first approach that speeds up development while maintaining a consistent design language. Tailwind’s component-based styling works seamlessly with React components, allowing for responsive and customizable UI elements. Key benefits include:

- **Utility-First Design**: Accelerates the process of applying styles, with classes that map directly to CSS properties.
- **Responsive Design**: Built-in responsive breakpoints enable fluid design across devices without additional configuration.
- **Customization**: Tailwind can be extended using `tailwind.config.ts`, which centralizes design customizations like color schemes, spacing, and typography.

### shadcn/ui for Customizable UI Components

[shadcn/ui](https://ui.shadcn.dev/) is a UI component library built on top of **Radix UI** and **TailwindCSS**. It offers a set of pre-built, accessible components that can be customized to fit the application’s unique requirements. Using shadcn/ui enhances the consistency, usability, and accessibility of the UI.

- **Component Flexibility**: shadcn/ui components are highly customizable due to their integration with TailwindCSS, allowing for seamless style adjustments to fit brand guidelines.
- **Accessible Design**: Built with accessibility in mind, shadcn/ui ensures that components meet WCAG standards, providing a better user experience for users with disabilities.
- **Radix UI Foundation**: shadcn/ui components are built on Radix UI primitives, ensuring high-quality interactions and consistent behavior across different browsers and devices.
- **Component Examples**: Common components used from shadcn/ui include buttons, modals, dialogs, and navigation elements, which are integrated throughout the dashboard to maintain a cohesive design and consistent behavior.

### Recharts for Data Visualization

Recharts is used to provide interactive, customizable charts and graphs, which are essential for visualizing IoT metrics and analytics. The charts are designed to be responsive, ensuring an optimal user experience across devices. Some of the key data visualizations include:

- **Claims and Risks Data**: Charts showing trends, distributions, and real-time updates of claims and risk assessments.
- **Sensor Data**: Visualizes metrics from IoT sensors, helping users understand operational metrics like temperature, humidity, and motion activity.

## Development Lifecycle and Tools

### Git and GitHub Workflow

The project uses a standardized GitHub workflow, ensuring version control and collaboration. Contributors follow these conventions:

- **Commit Messages**: Commit messages use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format to maintain a readable and structured history.
- **Pull Requests**: PR titles follow the same format as commit messages, and PRs are kept small and focused on specific tasks, enhancing readability and maintainability.
- **Branching Strategy**: Feature branches are created for new functionalities, with the main branch reserved for stable, production-ready code.

For detailed Git and PR conventions, refer to the [Coding Conventions](./coding_conventions.md) page.

### TypeScript

TypeScript is used to enforce type safety and reduce runtime errors, especially beneficial in a complex application with various data flows and APIs. TypeScript improves code quality and helps catch potential errors during development. Key practices include:

- **Type Definitions**: Custom types are stored in the `types` directory (e.g., `clientDataTypes.ts`), ensuring consistent data structures across the app.
- **Typing API Responses**: API calls and responses are typed to prevent errors and improve code readability.

### Linting and Code Formatting

The project maintains code quality through `eslint` and `prettier`, with configurations for Next.js and TailwindCSS. These tools enforce a consistent code style across the repository:

- **ESLint**: Ensures best practices and catches potential issues, especially useful in a TypeScript and React environment.
- **Prettier with TailwindCSS Plugin**: Formats code, ensuring consistent spacing, line breaks, and ordering of Tailwind classes.

### Testing

Testing is an integral part of the development process. While the primary testing strategy focuses on manual testing and QA for UI components, future plans include integration and unit tests for critical components and functions.

## Future Enhancements

Parametriks plans to implement additional technologies and improvements to enhance the functionality and scalability of the IoT Dashboard:

- **Unit and Integration Testing**: Adding automated tests to improve reliability and coverage.
- **Internationalization (i18n)**: To support multiple languages, improving accessibility for a global user base.
- **AI-Based Data Analysis**: Leveraging AI for predictive analytics and enhanced data insights based on IoT sensor data.
