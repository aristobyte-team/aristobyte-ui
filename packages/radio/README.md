# @aristobyte-ui/radio

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Fradio?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Fradio?style=for-the-badge" alt="NPM downloads" /> 
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> 
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" /> 
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /> 
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" /> 
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" /> 
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" /> 
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" /> 
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" /> 
</p>

Fully-typed, composable Radio and RadioGroup components for AristoByteUI, supporting multiple variants, sizes, appearances, alignments, and optional label highlights.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/radio

# Or via npm
npm install -D @aristobyte-ui/radio

# Or via pnpm
pnpm add -D @aristobyte-ui/radio
```

## 🛠 Usage

```tsx
import { Radio, RadioGroup } from '@aristobyte-ui/radio';

<RadioGroup
  name="options"
  value="option1"
  onChange={(val) => console.log(val)}
  variant="primary"
  size="md"
  align="horizontal"
  alignLabel="right"
>
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>;
```

##📂 Presets Available

- **variant**: `default` | `primary` | `secondary` | `success` | `error` | `warning`
- **appearance**: `default` | `solid` | `outline` | `outline-dashed` | `no-outline` | `glowing`
- **size**: `xsm` | `sm` | `md` | `lg` | `xlg`
- **align**: `horizontal` | `vertical`
- **alignLabel**: `top` | `right` | `bottom` | `left`
- **highlightLabel**: `boolean`

## 🔧 Example in a Package

```tsx
<Radio value="radio1" size="lg" variant="success" appearance="glowing" alignLabel="top">
  Radio Option
</Radio>
```

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens and SCSS modules.
- **Flexible:** Supports multiple variants, sizes, appearances, alignments, and optional label highlights.

## 🏆 Philosophy

- **Modular architecture:** Radio and RadioGroup components are fully composable.
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
