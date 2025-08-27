# @aristobyte-ui/message-box

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

A fully typed, customizable MessageBox component for React, supporting multiple variants, types, border-radius options, and optional icons. Built with AristoByteUI design tokens and SCSS modules, leveraging the `@aristobyte-ui/utils` package for icons.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/message-box

# Or via npm
npm install -D @aristobyte-ui/message-box

# Or via pnpm
pnpm add -D @aristobyte-ui/message-box
```

## 🛠 Usage

```tsx
import { MessageBox } from "@aristobyte-ui/message-box";

export default function App() {
  return (
    <div>
      <MessageBox variant="success" type="solid" radius="md" withIcon>
        This is a success message!
      </MessageBox>
    </div>
  );
}
```

## 📂 Presets Available

- **Variants**: `default`, `info`, `warning`, `success`, `error`
- **Types**: `solid`, `outline`, `outline-dashed`, `no-outline`, `glowing`
- **Radius options**: `none`, `sm`, `md`, `lg`, `full`
- **Icons**: optional via `withIcon` or custom via `customIcon` prop

## 🔧 Example in a Package

```tsx
<MessageBox variant="warning" type="outline-dashed" radius="lg" withIcon>
  Warning! Check your input.
</MessageBox>
```

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens and SCSS modules.
- **Flexible:** Supports multiple variants, types, border-radius options, and optional icons.

## 🏆 Philosophy

- **Modular architecture:** MessageBox component is fully composable.
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
