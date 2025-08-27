# `@aristobyte-ui/spinner`

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

A modular, highly customizable React spinner component, optimized for AristoByteUI projects. Supports multiple animation types, semantic color variants, and flexible sizing.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/spinner

# Or via npm
npm install -D @aristobyte-ui/spinner

# Or via pnpm
pnpm add -D @aristobyte-ui/spinner
```

## 🛠 Usage

```tsx
import { Spinner } from "@aristobyte-ui/spinner";

export const Demo = () => (
  <div>
    <Spinner type="default" variant="primary" size="md" />
    <Spinner type="duo" variant="success" size="lg" />
    <Spinner type="pulse-duo" variant="error" size="sm" />
  </div>
);
```

| Prop | Type | Default | Description |
| | - | -- | -- |
| type | `"default"`, `"duo"`, `"gradient"`, `"pulse"`, `"pulse-duo"` | `"default"` | Defines the spinner animation style |
| variant | `"default"`, `"primary"`, `"secondary"`, `"success"`, `"error"`, `"warning"` | `"default"` | Semantic color variant |
| size | `"xsm"`, `"sm"`, `"md"`, `"lg"`, `"xlg"` | `"md"` | Controls spinner dimensions |
| className | `string` | `""` | Optional additional class names |

## 📂 Presets Available

- Types: `default`, `duo`, `gradient`, `pulse`, `pulse-duo`
- Variants: `default`, `primary`, `secondary`, `success`, `error`, `warning`
- Sizes: `xsm`, `sm`, `md`, `lg`, `xlg`

## 🔧 Example in a Package

```tsx
import { Spinner } from "@aristobyte-ui/spinner";

export const LoadingState = () => (
  <div className="flex justify-center items-center">
    <Spinner type="gradient" variant="primary" size="lg" />
  </div>
);
```

## 📊 Why This Matters

- **Performance-first:** Engineered with lightweight, GPU-accelerated CSS keyframes for smooth, non-blocking animations.
- **Fully typed:** TypeScript-first API ensures strict type safety and predictable integration across multiple projects.
- **AristoByteUI ready:** Fully interoperable with AristoByte’s design tokens, semantic color palette, and styling architecture.
- **Flexible:** Supports multiple animation types, semantic variants, and responsive sizing to fit any UI scenario.

## 🏆 Philosophy

- **Modular architecture:** Components are built for maximum reusability and composability.
- **Declarative styling:** SCSS modules maintain a clean separation of concerns while leveraging design tokens.
- **Strict typing & runtime flexibility:** Type-safe props with optional runtime overrides.
- **Developer experience optimized:** Intuitive API with predictable behavior and minimal setup.

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
