# AristoByteUI

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

AristoByteUI is a **performance-first, fully typed React component library** designed for enterprise-grade frontends, internal tools, and modular web applications. Every package is optimized for **TypeScript**, SCSS modularity, and seamless integration into modern monorepo architectures powered by **TurboRepo**.

---

## 📦 Packages Overview

AristoByteUI consists of a curated set of components and utilities:

### 1. @aristobyte-ui/button

- Exports: `Button`, `ButtonGroup`
- Features: Ripple-enabled interactive feedback, multiple variants, appearances, sizes, border-radius options, icons, loading states, and fully composable button groups.
- Use case: Buttons and grouped controls across applications with consistent design tokens.

### 2. @aristobyte-ui/dropdown

- Exports: `Dropdown`, `DropdownOptions`
- Features: Fully interactive dropdowns leveraging `Button` for triggers, supports multiple variants, sizes, radius, and customizable option lists.
- Use case: Select menus, action lists, or contextual menus with consistent styling.

### 3. @aristobyte-ui/anchor

- Exports: `Anchor`
- Features: Variants with ripple-enabled interactions, lightweight CSS, fully typed props, seamless design token integration.
- Use case: Links, call-to-actions, and navigational elements with interactive feedback.

### 4. @aristobyte-ui/radio

- Exports: `Radio`, `RadioGroup`
- Features: Modular, accessible radio buttons supporting multiple variants, sizes, alignments, and label highlights.
- Use case: Forms, surveys, and selection interfaces.

### 5. @aristobyte-ui/switch

- Exports: `Switch`
- Features: Toggle components with accessible states, customizable colors, and smooth transition animations.
- Use case: Form toggles, feature flags, and interactive on/off controls.

### 6. @aristobyte-ui/spinner

- Exports: `Spinner`
- Features: Fully typed spinners with multiple sizes, types, and variants for loading states.
- Use case: Indicators for asynchronous operations or content loading.

### 7. @aristobyte-ui/message-box

- Exports: `MessageBox`
- Features: Modular message boxes supporting variants, types, icons, and border-radius options.
- Use case: Alerts, notifications, and inline feedback components.

### 8. @aristobyte-ui/jest-config

- Exports: `jest.config.js`
- Features: Preconfigured Jest environment optimized for TypeScript monorepo projects.
- Use case: Unit testing setup for all internal packages.

### 9. @aristobyte-ui/eslint-config

- Exports: ESLint configuration presets
- Features: Strict linting rules for TypeScript and React, consistent code style.
- Use case: Code quality enforcement across all monorepo packages.

### 10. @aristobyte-ui/typescript-config

- Exports: TypeScript configuration presets
- Features: Optimized `tsconfig.json` setups for monorepo modular development.
- Use case: Ensures type safety and consistent compiler behavior across packages.

---

## 🔧 Installation

### Globally:

```bash
# Yarn
yarn add @aristobyte-ui

# NPM
npm install @aristobyte-ui

# PNPM
pnpm add @aristobyte-ui
```

### Individual Package:

```bash
# Yarn
yarn add @aristobyte-ui/$PACKAGE

# NPM
npm install @aristobyte-ui/$PACKAGE

# PNPM
pnpm add @aristobyte-ui/$PACKAGE
```

> Dev tools (eslint-config, jest-config, typescript-config) can be installed individually if needed.

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens and SCSS modules.
- **Flexible:** Supports multiple variants, appearances, sizes, radius options, icons, ripple-enabled feedback, and composable groups.

## 🏆 Philosophy

- **Modular architecture:** Components are fully composable for scalable UI design.
- **Declarative styling:** SCSS modules keep styles maintainable and scoped.
- **Strict typing & runtime flexibility:** Props fully typed while allowing runtime overrides.
- **Developer experience optimized:** Easy to use with predictable behavior and minimal boilerplate.

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
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" />
</p>
