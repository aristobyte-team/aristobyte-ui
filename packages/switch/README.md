# `@aristobyte-ui/switch`

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Fswitch?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Fswitch?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

A highly flexible and type-safe Switch component for React with multiple sizes, variants, and label alignment options.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/switch

# Or via npm
npm install -D @aristobyte-ui/switch

# Or via pnpm
pnpm add -D @aristobyte-ui/switch
```

## 🛠 Usage

```tsx
import { Switch } from '@aristobyte-ui/switch';

export const Demo = () => (
  <Switch
    label="Enable notifications"
    alignLabel="horizontal"
    switchSize="md"
    variant="primary"
    checked={true}
    onChange={() => console.log('Toggled!')}
  />
);
```

## 📂 Presets Available

**alignLabel**: `"horizontal"` | `"vertical"` (default: `"vertical"`)

**switchSize**: `"xsm"` | `"sm"` | `"md"` | `"lg"` | `"xlg"` (default: `"md"`)

**variant**: `"default"` | `"primary"` | `"secondary"` | `"success"` | `"error"` | `"warning"` (default: `"default"`)

**trackIcon** & **thumbIcon**: Optional React components for custom icons

**disabled**: Boolean flag to disable switch

## 🔧 Example in a Package

```tsx
<Switch
  label="Dark Mode"
  switchSize="lg"
  variant="secondary"
  trackIcon={{ checked: CheckIcon, unchecked: CloseIcon }}
  thumbIcon={StarIcon}
  checked={false}
/>
```

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS transitions ensure smooth toggling with zero layout thrashing.
- **Fully typed:** TypeScript-first API for predictable integration and IDE autocomplete.
- **AristoByteUI ready:** Integrates seamlessly with design tokens and SCSS modules.
- **Flexible:** Supports multiple sizes, label alignments, variants, and custom icons.

## 🏆 Philosophy

- **Modular architecture:** Switch component is fully composable.
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
</p>
