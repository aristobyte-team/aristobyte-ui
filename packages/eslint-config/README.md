# @aristobyte-ui/eslint-config

Scalable, modular, and shareable ESLint configurations for AristoByte’s modern TypeScript/JavaScript monorepos.

---

## 🔧 Overview

This package delivers a suite of opinionated ESLint configurations, designed to enforce code quality, consistency, and developer efficiency across the AristoByte ecosystem. Powered by ESLint Flat Config and aligned with monorepo-first tooling like TurboRepo and Prettier, it enables fast, frictionless linting with a single source of truth.

---

## 📦 Exported Config Profiles

| Config Path                                   | Description                                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `@aristobyte-ui/eslint-config/base`           | Core ruleset for JS/TS projects. Includes Prettier formatting, TurboRepo support, and `eslint-plugin-only-warn`. |
| `@aristobyte-ui/eslint-config/react-internal` | Optimized for internal React component libraries with hooks and JSX best practices.                              |
| `@aristobyte-ui/eslint-config/next-js`        | Tailored specifically for Next.js applications, aligned with Next’s linting expectations.                        |

---

## 🚀 Quick Start

### 1. Install the Config Package & Peer Dependencies

```bash
yarn add -D eslint @aristobyte-ui/eslint-config
```

You may also need to install peer dependencies such as:

- `prettier`
- `eslint-plugin-react`
- `*eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react-hooks`
- `eslint-plugin-turbo`
- `eslint-plugin-only-warn`

### 2. Configure Your ESLint Flat Config (eslint.config.js)

Example for a React package:

```js
import base from "@aristobyte-ui/eslint-config/base";
import react from "@aristobyte-ui/eslint-config/react-internal";

export default [...base, ...react];
```

Or for a Next.js app:

```js
import base from "@aristobyte-ui/eslint-config/base";
import next from "@aristobyte-ui/eslint-config/next-js";

export default [...base, ...next];
```

## 💡 Why Use This?

- Single Source of Linting Truth across projects.
- Pre-optimized rules for React, Next.js, and monorepo workflows.
- Flat Config architecture for modern ESLint performance and flexibility.
- First-class Prettier integration with zero conflicts.
- TurboRepo-friendly — supports parallelized linting out of the box.

## 🤝 Contribution

Feel free to extend or override specific configs as your project requirements evolve. PRs are welcome for additional presets or plugin integrations.

---

© AristoByte Inc. — Enforcing code excellence at scale.
