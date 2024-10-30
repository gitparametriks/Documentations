# Project Management and Collaboration

At Parametriks, we prioritize effective project management and collaborative practices to ensure seamless teamwork, high-quality code, and efficient workflows. This document outlines our project management principles, collaboration tools, and GitHub conventions that help maintain consistency and clarity across all projects.

## Agile Development Processes

Our development is structured around Agile principles, enabling us to iterate quickly and deliver value through continuous integration and feedback. Regular sprints, planning meetings, and retrospectives help us identify areas for improvement and adapt to evolving requirements.

### Key Agile Practices

- **Sprint Planning**: Defining goals for each sprint to ensure focused and manageable objectives.
- **Daily Standups**: Short daily meetings to discuss progress, blockers, and next steps.
- **Retrospectives**: End-of-sprint meetings to reflect on successes and areas for improvement.
- **Backlog Grooming**: Regular review and prioritization of backlog items to keep our pipeline up-to-date and aligned with business goals.

## Coding Standards and Best Practices

Maintaining coding standards ensures readability, scalability, and consistent structure across our codebase. All TypeScript and JavaScript files should follow our formatting and naming conventions to improve collaboration and code quality.

- **Indentation**: Use 4 spaces for indentation.
- **Line Length**: Keep lines under 120 characters when possible.
- **File Naming**: Use `camelCase` for `.ts` files and `PascalCase` for `.tsx` files (except Next.js pages, which are named `index.tsx`).
- **File Structure**: Place each component in its own file unless closely related, and always keep related files in the same directory.

## Documentation Practices

Documentation is an essential part of our workflow. All team members are encouraged to document code, processes, and project decisions to facilitate knowledge transfer and onboarding.

- **Inline Comments**: Explain complex code logic or algorithm steps.
- **Project Documentation**: Each project should have a README with setup instructions, usage, and dependencies.

## Communication Protocols

Effective communication is key to our project success. We use the following tools and protocols:

- **Slack**: For real-time communication, questions, and quick updates.
- **GitHub**: For code reviews, version control, and issue tracking.

## GitHub Issues Conventions

This section outlines our GitHub workflow conventions for issue tracking, commit messages, and pull requests to ensure clear version control and organized project management.

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when writing commit messages. Each commit message should adhere to the following format:

```git
<type>[optional scope]: <description>
```

- **Types**:
  - `feat`: For new features
  - `fix`: For bug fixes
  - `refactor`: For code changes that neither fix a bug nor add a feature
  - `build`: For dependency or build script changes
  - `style`: For code formatting changes
  - `chore`: For other changes that don't modify code functionality
- **Description**: Written in the imperative mood, lowercase, with no trailing period.

Examples:

- `feat(api): add endpoint for user authentication`
- `fix(db): resolve null pointer in migration script`

### Pull Requests

Pull request (PR) titles should follow the same format as commit messages. Each PR should:

- Include a description of the changes made and link to any related issues.
- Attach screenshots for UI changes to demonstrate visual impact.
- Follow a single, focused purpose without unrelated changes.
- Include `Resolves #<issue number>` if the PR closes an issue upon merging.

> **Note**: For work-in-progress PRs, add `(wip, don't merge)` as the scope in the title.

### TypeScript Coding Standards

To maintain consistency in our TypeScript files, we adhere to the following standards:

- Use 4 spaces for indentation.
- Keep line lengths below 120 characters when possible.
- Run `npm run format` before committing to format code automatically.
- All TypeScript files should end with `.ts`, and all React components should use `.tsx` with `PascalCase` filenames.

#### `.tsx` Conventions for React Components

- Declare types for props as `<ComponentName>Props`.
- Keep each exported component in a separate file for clarity.
- Return types should generally be inferred rather than explicitly declared.
- Use `className` (not `class`) for TailwindCSS classes in JSX.

#### `index.tsx` Conventions for Next.js Pages

- For pages using `getServerSideProps` or `getStaticProps`, place these functions directly under the imports, typed with `GetServerSideProps` or `GetStaticProps` from `next`.
- Page components without data fetching functions should be named `Page`, e.g., `export default function Page()`.

### GitHub Link for GitHub and Git Workflow Documentation

For more information on our GitHub workflow, refer to our [Git and GitHub Workflow Documentation](https://www.lfg.travel/docs/git-github-workflow).

## Tools and Software for Collaboration

Our collaboration and project management toolkit includes:

- **GitHub**: For code reviews, issue tracking, and repository management.
- **Slack**: For team communication, quick queries, and updates.
- **Figma**: For design collaboration and visual asset creation.

---

By following these conventions and best practices, Parametriks ensures consistency, scalability, and effective collaboration across projects.
