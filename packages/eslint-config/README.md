# `@aristobyte-ui/eslint-config`

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/ESLint-9.x-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Config-Prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" />
  <img src="https://img.shields.io/badge/React-Supported-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Support" />
  <img src="https://img.shields.io/badge/Next.js-Supported-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Support" />
  <img src="https://img.shields.io/badge/TurboRepo-Optimized-00A3E0?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

Centralized **ESLint configuration presets** for AristoByte UI packages.  
Provides **base**, **React**, and **Next.js** linting standards with TypeScript-first principles.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/eslint-config

# Or via npm
npm install -D @aristobyte-ui/eslint-config

# Or via pnpm
pnpm add -D @aristobyte-ui/eslint-config
```

## 🛠 Usage

Extend one of the provided configs in your `eslint.config.js` (Flat Config):

**Base (TypeScript + general rules):**

```js
import { config } from "@aristobyte-ui/eslint-config/base";
export default config;
```

**React (includes React + Hooks best practices):**

```js
import { config } from "@aristobyte-ui/eslint-config/react";
export default config;
```

**Next.js (includes React + Next.js rules):**

```js
import { nextJsConfig } from "@aristobyte-ui/eslint-config/next";
export default nextJsConfig;
```

## 📂 Presets Available

- `base` → Core TypeScript + Prettier + TurboRepo rules.
- `react` → Extends base with React + React Hooks recommendations.
- `next` → Extends base with Next.js & Core Web Vitals rules.

## 🔧 Example in a Package

```json
{
  "name": "@aristobyte-ui/button",
  "version": "1.0.0",
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "@aristobyte-ui/eslint-config": "*",
    "eslint": "^9.0.0"
  }
}
```

And `eslint.config.js:`

```js
import { config } from "@aristobyte-ui/eslint-config/react";
export default config;
```

## 📊 Why This Matters

| Feature                 | Benefit                                     |
| ----------------------- | ------------------------------------------- |
| Flat Config (ESLint 9)  | Modern, future-proof linting structure      |
| TypeScript support      | Type-aware linting for safer codebases      |
| Prettier integration    | Automatic formatting alignment              |
| React & Hooks rules     | Enforces idiomatic React code               |
| Next.js core-web-vitals | Ensures optimal Next.js app performance     |
| TurboRepo plugin        | Catches misconfigured env vars in monorepos |

## 🏆 Philosophy

At **AristoByte**, linting is not just about **style** — it’s about **preventing bugs, scaling teams, and enforcing architectural patterns**.  
This config empowers developers with **out-of-the-box rules** that evolve alongside the ecosystem.

## 📜 License

[MIT](./LICENSE) © AristoByte

## 🛡 Shields Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Consistency-100%25-green?style=for-the-badge&logo=eslint" />
  <img src="https://img.shields.io/badge/Maintained-Active-brightgreen?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Prettier-Integrated-ff69b4?style=for-the-badge&logo=prettier" />
  <img src="https://img.shields.io/badge/React-Hooks-optimized?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Next.js-Core%20Web%20Vitals-black?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TurboRepo-Ready-blue?style=for-the-badge&logo=turbo" />
</p>
