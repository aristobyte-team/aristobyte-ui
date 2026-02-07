# `@aristobyte-ui/utils`

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Futils?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Futils?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

A collection of shared utility functions for AristoByte projects, designed to provide reusable helpers, streamline common operations, and ensure consistency across applications and packages.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/utils

# Or via npm
npm install -D @aristobyte-ui/utils

# Or via pnpm
pnpm add -D @aristobyte-ui/utils
```

## 🛠 Usage

```tsx
import { Icons } from '@aristobyte-ui/utils';

export const Demo = () => (
  <div>
    <Icons.PaperCode size={18} color="#51a2ff" />
  </div>
);
```

| Prop | Type | Default | Description |
| | - | -- | -- |
| size | `number` | `24` | Defines the spinner animation style |
| color | `"#000000"`, `"#24f7b2"`, Any hex color |

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
