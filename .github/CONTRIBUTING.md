# Contributing to AristoByteUI

Welcome! 👋 Thank you for considering contributing to **AristoByteUI**. Whether you’re reporting bugs, suggesting new features, improving documentation, or submitting code, your contributions help make this UI ecosystem stronger and more accessible.

---

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Reporting Issues](#reporting-issues)
3. [Code Contributions](#code-contributions)
4. [Style & Guidelines](#style--guidelines)
5. [Branching & Workflow](#branching--workflow)
6. [Pull Request Process](#pull-request-process)
7. [Code of Conduct](#code-of-conduct)

---

## How to Contribute

There are multiple ways to contribute to AristoByteUI:

- **Bug Reports:** Help us identify problems in our components or packages.
- **Feature Requests:** Suggest new features or improvements to existing functionality.
- **Documentation:** Improve guides, examples, and READMEs.
- **Code Contributions:** Add new components, enhance existing ones, or fix issues.

We welcome contributions of all sizes, from small documentation fixes to major component updates.

---

## Reporting Issues

When opening an issue, please include:

- A descriptive title
- Clear description of the problem or feature request
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots or code snippets (if applicable)

Use the appropriate labels if available (bug, enhancement, documentation, etc.) to help maintainers triage efficiently.

---

## Code Contributions

### Prerequisites

- Node.js >= 20.17.0
- Yarn >= 1.22 or NPM >= 10.8
- Familiarity with React, TypeScript, and SCSS modules

### Steps to Contribute

1. **Fork the Repository** and clone it locally.
2. **Install dependencies:**

```bash
yarn install
```

3. Run the development environment:

```bash
yarn dev
```

4. Make your changes in a new branch with a descriptive name.

5. Test your changes in all supported browsers and screen sizes.

6. Add or update documentation if applicable.

### Style & Guidelines

To maintain a consistent codebase across packages:

- **TypeScript**: Fully typed APIs, strict mode enabled.
- **SCSS**: Alphabetically ordered, modular, scoped per component.
- **Naming Conventions**: `PascalCase` for components, `camelCase` for props and functions.
- **Linting & Formatting**: ESLint and Prettier are enforced. Run:

```bash
yarn lint
yarn format
```

- **Commit Messages**: Use conventional commits for clarity (feat, fix, docs, style, refactor, test, chore).

---

## Branching & Workflow

- **Main Branch:** `master` (stable production-ready code)
- **Development Branches:** `feature/<feature-name>` or `bugfix/<issue-name>`
- **Pull Requests:** Target `main` or a feature branch as specified

All PRs should pass tests and CI checks before being merged.

---

## Pull Request Process

1. **Create a descriptive PR title and description**
2. **Link relevant issues** (if any)
3. **Ensure tests pass** and code is formatted
4. **Add screenshots** for visual changes (if applicable)
5. **Wait for maintainers review**
6. **Address review comments** promptly

After approval, a maintainer will merge your PR.

---

## Code of Conduct

All contributors are expected to follow the **[Code of Conduct](./CODE_OF_CONDUCT.md)**.  
Harassment, discrimination, or inappropriate behavior will not be tolerated.

---

Thank you for helping make **AristoByteUI** a robust, reliable, and enjoyable UI ecosystem! 🚀
