# `@aristobyte-ui/typescript-config`

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

Centralized **TypeScript configuration presets** for the AristoByte UI ecosystem.  
Opinionated, consistent, and production-ready.

## 🚀 Overview

`@aristobyte-ui/typescript-config` provides **shared TypeScript configurations** that enforce strict standards across all AristoByte UI packages.

This ensures:

- 🔒 **Consistency** across the monorepo ecosystem.
- ⚡ **Developer Velocity** by removing redundant boilerplate.
- 📦 **Scalability** with unified upgrades and evolving presets.
- 🧹 **Clean output** with correct declaration mapping for distributable packages.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/typescript-config

# Or via npm
npm install -D @aristobyte-ui/typescript-config

# Or via pnpm
pnpm add -D @aristobyte-ui/typescript-config
```

## 🛠 Usage

In your `tsconfig.json,` extend one of the provided presets.

**Base configuration (for libraries):**

```json
{
  "extends": "@aristobyte-ui/typescript-config/base",
  "compilerOptions": {
    "outDir": "dist",
    "declarationDir": "dist/types"
  },
  "include": ["src", "index.ts"]
}
```

**React packages:**

```json
{
  "extends": "@aristobyte-ui/typescript-config/react",
  "include": ["components", "index.ts"],
  "exclude": ["dist", "node_modules"]
}
```

**Next.js projects:**

```json
{
  "extends": "@aristobyte-ui/typescript-config/next",
  "include": ["app", "pages", "components"],
  "exclude": ["dist", "node_modules"]
}
```

**Package-ready builds (library publishing):**

```json
{
  "extends": "@aristobyte-ui/typescript-config/package",
  "include": ["src"],
  "exclude": ["dist", "node_modules"]
}
```

**Node.js tools / CLI projects:**

```json
{
  "extends": "@aristobyte-ui/typescript-config/node",
  "include": ["src"],
  "exclude": ["dist", "node_modules"]
}
```

**Library preset (bundler-first projects):**

```json
{
  "extends": "@aristobyte-ui/typescript-config/library",
  "include": ["src"],
  "exclude": ["dist", "node_modules"]
}
```

## 📂 Presets Available

- `base` → Strict, modern TypeScript defaults for libraries.
- `react` → Extends `base` with React + JSX optimizations.
- `next` → Opinionated config optimized for Next.js projects.
- `package` → Publishing-friendly output with declarations and ESNext module resolution.
- `node` → Node.js-first config with NodeNext module resolution.
- `library` → Bundler-first config with modern libs and declarations.

## 🔧 Example in a Package

`package.json`:

```json
{
  "name": "@aristobyte-ui/button",
  "version": "1.0.0",
  "scripts": {
    "build": "tsup"
  },
  "devDependencies": {
    "@aristobyte-ui/typescript-config": "2.0.0",
    "typescript": "^5.8.3"
  }
}
```

`tsconfig.json`:

```json
{
  "extends": "@aristobyte-ui/typescript-config/react",
  "include": ["components", "index.ts"]
}
```

## 📊 Why This Matters

| Feature                          | Benefit                               |
| -------------------------------- | ------------------------------------- |
| `strict: true`                   | Eliminates runtime edge cases early   |
| `noUncheckedIndexedAccess: true` | Safer array/object access             |
| `declaration: true`              | Ensures correct `.d.ts` output        |
| `jsx: react-jsx`                 | Optimized for React 17+ and beyond    |
| `incremental`                    | Faster rebuilds in monorepo workflows |
| `moduleResolution: NodeNext`     | Modern interoperability for ESM/CJS   |

## 🏆 Philosophy

At **AristoByte UI**, we believe **configuration should empower, not obstruct**.  
This package encapsulates our best practices into **ready-to-consume presets** that evolve alongside the ecosystem.

## 📜 License

[MIT](./LICENSE) © AristoByte

## 🛡 Shields Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Consistency-100%25-green?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Maintained-Active-brightgreen?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Strictness-High-critical?style=for-the-badge&logo=eslint" />
  <img src="https://img.shields.io/badge/Declarations-Enabled-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Monorepo-Turbo-green?style=for-the-badge&logo=monorepo" />
  <img src="https://img.shields.io/badge/Interop-ESM%2FCJS-orange?style=for-the-badge&logo=javascript" />
</p>
