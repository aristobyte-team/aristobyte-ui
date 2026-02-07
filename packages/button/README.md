# @aristobyte-ui/button

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Fbutton?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Fbutton?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

Fully-featured, modular Button components for AristoByteUI with ripple effects, composable groups, variants, appearances, sizes, radius options, icons, and loading states.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/button

# Or via npm
npm install -D @aristobyte-ui/button

# Or via pnpm
pnpm add -D @aristobyte-ui/button
```

## 🛠 Usage

```tsx
import { Button, ButtonGroup } from "@aristobyte-ui/button";
import { IconSample } from "@aristobyte-ui/icons";

<Button variant="primary" appearance="solid" size="md" radius="md" icon={{ component: IconSample, align: "left" }}>
  Click Me
</Button>

<ButtonGroup variant="secondary" size="md" align="horizontal">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

## 📂 Presets Available

- **Button Variants**: `default`, `primary`, `secondary`, `success`, `error`, `warning`
- **Button Appearances**: `solid`, `outline`,`outline-dashed`, `no-outline`, `glowing`
- **Button Sizes**: `xsm`, `sm`, `md`, `lg`, `xlg`
- **Button Radius**: `none`, `sm`, `md`, `lg`, `full`
- **ButtonGroup Alignment**: `horizontal`, `vertical`

## 🔧 Example in a Package

```tsx
<Button variant="success" appearance="glowing" size="lg" radius="full" isLoading spinnerAppearance="duo">
  Submit
</Button>

<ButtonGroup variant="primary" size="sm" align="vertical">
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>
```

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens and SCSS modules.
- **Flexible:** Supports multiple variants, appearances, sizes, radius options, icons, ripple-enabled interactive feedback, and composable groups.

## 🏆 Philosophy

- **Modular architecture:** Button and ButtonGroup components are fully composable.
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
