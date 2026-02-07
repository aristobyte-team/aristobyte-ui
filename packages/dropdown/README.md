# @aristobyte-ui/dropdown

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Fdropdown?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Fdropdown?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Build-Turbo-green?style=for-the-badge&logo=turbo&logoColor=white" alt="TurboRepo" />
  <img src="https://img.shields.io/badge/Lint-Strict-red?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/AristoByte-UI-purple?style=for-the-badge&logo=react&logoColor=white" alt="AristoByte UI" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

> A fully typed, modular, and composable Dropdown component built for AristoByteUI, leveraging Button for interactive triggers and providing lightweight, performant, and flexible menus for React applications.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/dropdown

# Or via npm
npm install -D @aristobyte-ui/dropdown

# Or via pnpm
pnpm add -D @aristobyte-ui/dropdown

```

## 🛠 Usage

```tsx
import { Dropdown } from '@aristobyte-ui/dropdown';
import { Button } from '@aristobyte-ui/button';

export default function Example() {
  return (
    <Dropdown
      trigger={<Button variant="primary">Options</Button>}
      items={[
        { label: 'Profile', onClick: () => console.log('Profile clicked') },
        { label: 'Settings', onClick: () => console.log('Settings clicked') },
        { label: 'Logout', onClick: () => console.log('Logout clicked') },
      ]}
      placement="bottom-start"
      disabled={false}
    />
  );
}
```

##📂 Presets Available

- **trigger**: Any React element, commonly a Button, to toggle the dropdown.
- **items**: Array of menu items, each with label, optional icon, and onClick callback.
- **placement**: Positioning of the dropdown menu (e.g., `top`, `bottom`, `left`, `right` with variations like -start or -end).
- **disabled**: Boolean to disable the dropdown trigger.

## 🔧 Example in a Package

```tsx
import { Dropdown } from '@aristobyte-ui/dropdown';
import { Button } from '@aristobyte-ui/button';
import { FiSettings, FiUser } from 'react-icons/fi';

export function UserMenu() {
  return (
    <Dropdown
      trigger={
        <Button variant="secondary" appearance="outline">
          Menu
        </Button>
      }
      items={[
        {
          label: 'Profile',
          icon: FiUser,
          onClick: () => console.log('Profile'),
        },
        {
          label: 'Settings',
          icon: FiSettings,
          onClick: () => console.log('Settings'),
        },
        { label: 'Logout', onClick: () => console.log('Logout') },
      ]}
      placement="bottom-end"
    />
  );
}
```

## 📊 Why This Matters

- **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens, SCSS modules, and Button component composition.
- **Flexible:** Supports multiple variants, appearances, sizes, radius options, icons, ripple-enabled interactive feedback, and nested menu structures.

## 🏆 Philosophy

- **Modular architecture:** Dropdown component is fully composable with Button and other interactive elements.
- **Declarative styling:** SCSS modules keep styles maintainable and scoped.
- **Strict typing & runtime flexibility:** Props fully typed while allowing runtime overrides.
- **Developer experience optimized:** Easy to use with predictable behavior and minimal boilerplate.

## 📜 License

MIT © AristoByte

## 🛡 Shields Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Consistency-100%25-green?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Maintained-Active-brightgreen?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Strictness-High-critical?style=for-the-badge&logo=eslint" />
  <img src="https://img.shields.io/badge/Declarations-Enabled-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Monorepo-Turbo-green?style=for-the-badge&logo=monorepo" />
  <img src="https://img.shields.io/badge/Interop-ESM%2FCJS-orange?style=for-the-badge&logo=javascript" />
</p>
