# IoT Dashboard Frontend Repository Structure

This document provides an overview of the **IoT Dashboard Frontend** repository structure, key components, and dependencies. It supplements the README by explaining the organization of directories and files, purpose, and technical requirements for development. The **IoT Dashboard Frontend** is a feature-rich web application developed by **Parametriks** for real-time monitoring, control of IoT devices, and data visualization in the insurance industry.

## Project Overview

The **IoT Dashboard Frontend** is designed to provide an intuitive and responsive interface for monitoring IoT devices, visualizing metrics, and enabling real-time control. Key features include:

- **Real-time Data Monitoring**: Enables clients to track IoT device data and activities.
- **Data Visualization**: Displays metrics such as claims, risks, and sensor data through dynamic charts and graphs.
- **Authentication and User Management**: Integrated with AWS Cognito for secure user authentication.
- **Analytics**: Offers comprehensive insights for clients and insurers to make data-driven decisions.

Built with **Next.js**, **React**, **TailwindCSS**, and **AWS SDK**, this dashboard allows for scalable, modular, and efficient development.

## Directory Structure

The repository follows a modular structure, with each folder serving a specific purpose to maintain clean separation of concerns and code organization:

```plaintext
.
├── LICENSE                  # License file
├── README.md                # Project documentation
├── app                      # Main application code and page components
├── components               # Reusable components shared across the app
├── lib                      # Utility functions and configurations
├── public                   # Static assets (images, CSV data files)
├── types                    # TypeScript type definitions
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── tailwind.config.ts       # TailwindCSS configuration
└── tsconfig.json            # TypeScript configuration
```

### app Directory

The `app` directory contains the main application code for handling authentication, client and insurer pages, and visualizations. Key components include:

- **Authentication Pages**: Handles signup, verification, password reset for clients and insurers.
- **Dashboards**: Contains pages and charts for visualizing claims, risks, and sensor data for both clients and insurers.
- **AWS Configurations**: `aws-config.js` and `aws-exports.js` for AWS Cognito and other AWS integrations.
- **hooks**: Custom React hooks for managing state, such as sidebar toggle and notifications.

### components Directory

The `components` directory contains reusable UI components that enhance modularity and code reuse across the application:

- **client-navbar** and **insurer-navbar**: Navigation components customized for client and insurer dashboards.
- **table**: Contains components for data tables with functionalities like pagination, filtering, and sorting.
- **ui**: A collection of UI elements (buttons, modals, tooltips) styled with TailwindCSS, providing consistency in design.

### lib Directory

Utility functions and configuration files are located in the `lib` directory. These include:

- **client-menu-list.ts** and **insurer-menu-list.ts**: Define menu items for client and insurer dashboards.
- **utils.ts**: General utility functions used across the application for consistent data processing and formatting.

### public Directory

The `public` directory contains static assets and data files, such as:

- **Images**: Project logos and icons, including `parametriks.png` and `parametriksGif.gif`.
- **CSV Data**: Sample data files like `Claims.csv`, `Risks.csv`, and `Facilities.csv` for initial data loading and testing.

### types Directory

The `types` directory contains TypeScript type definitions to enforce type safety across the application. For example:

- **clientDataTypes.ts**: Defines data types specific to client-related data, ensuring type consistency.

## package.json

The `package.json` file defines the project's dependencies, development dependencies, and scripts.

### Scripts

| Script    | Command      | Description                                 |
| --------- | ------------ | ------------------------------------------- |
| **dev**   | `next dev`   | Runs the app in development mode.           |
| **build** | `next build` | Builds the app for production.              |
| **start** | `next start` | Starts the production server.               |
| **lint**  | `next lint`  | Runs linting checks to ensure code quality. |

### Key Dependencies

The IoT Dashboard relies on various dependencies to provide a comprehensive feature set for real-time data handling and visualization:

| Dependency                    | Purpose                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| **@hookform/resolvers**       | Used with `react-hook-form` for form validation.                                           |
| **@radix-ui/react-component** | Provides UI components (e.g., `avatar`, `checkbox`, `popover`) for consistent styling.     |
| **@tanstack/react-table**     | A powerful table component for data-heavy dashboards, with sorting and filtering features. |
| **aws-sdk**                   | AWS SDK for JavaScript, enabling access to AWS Cognito and other services.                 |
| **react-papaparse**           | CSV parser for handling data imports and conversions.                                      |
| **recharts**                  | Provides data visualization charts, used to graphically represent IoT metrics.             |
| **tailwindcss**               | Utility-first CSS framework for responsive design and component styling.                   |
| **zustand**                   | Lightweight state management library to manage global state in the app.                    |

### Development Dependencies

Development dependencies support code quality, formatting, and consistency. Some key dev dependencies include:

| Dependency                                       | Purpose                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **eslint** and **eslint-config-next**            | Enforces code standards and best practices.                                                 |
| **prettier** and **prettier-plugin-tailwindcss** | Formats code consistently and organizes TailwindCSS classes.                                |
| **typescript**                                   | TypeScript is used for static type-checking, enhancing code robustness and maintainability. |
| **tailwindcss-debug-screens**                    | Provides responsive screens for debugging and ensuring UI consistency across devices.       |

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure to have Node.js and npm installed. Install the latest npm version with:

```sh
npm install npm@latest -g
```

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/parametriks/iot-dashboard-frontend.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd iot-dashboard-frontend
   ```

3. **Install NPM packages**:

   ```sh
   npm install
   ```

4. **Update AWS Configuration**:
   Update AWS configuration paths in files that use AWS Cognito by replacing the import path with:

   ```js
   import cognito from "./app/aws/aws-config";
   ```

## Usage

The IoT Dashboard provides the following functionalities:

- **User Authentication**: Users can sign up, verify their accounts, and manage theisr credentials via AWS Cognito.
- **Data Visualization**: Interactive graphs and charts for visualizing IoT metrics, claims, and risk distributions.
- **Real-Time Monitoring**: Track trends and activities related to IoT devices and sensors for clients and insurers.

For more detailed examples and documentation, refer to the [Parametriks Documentation](https://www.parametriks.io).

## Additional Information

For more detailed information about the project, including contributions, licensing, and acknowledgments, refer to the main [README.md](./README.md) file. You can find links to resources such as the Next.js documentation, Radix UI, AWS Cognito, and more.
