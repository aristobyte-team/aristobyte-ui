# `@aristobyte-ui/jest-config`

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Fjest-config?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Fjest-config?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Jest-29-red?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/Testing-Library-blueviolet?style=for-the-badge&logo=testinglibrary&logoColor=white" alt="Testing Library" />
  <img src="https://img.shields.io/badge/React-Supported-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Support" />
  <img src="https://img.shields.io/badge/Next.js-Supported-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Support" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

Centralized, shareable **Jest configuration presets** for AristoByteUI monorepo projects, supporting Node, React, and Next.js environments.

## 📦 Installation

```bash
# Install via Yarn
yarn add -D @aristobyte-ui/jest-config

# Or via npm
npm install -D @aristobyte-ui/jest-config

# Or via pnpm
pnpm add -D @aristobyte-ui/jest-config
```

## 🛠 Usage

**Base config (Node environment):**

```ts
import { config } from '@aristobyte-ui/jest-config/base';
export default config;
```

**React config (includes Testing Library):**

```ts
import { config } from '@aristobyte-ui/jest-config/react';
export default config;
```

**Next.js config (includes React + moduleNameMapper for CSS/Assets):**

```ts
import { config } from '@aristobyte-ui/jest-config/next';
export default config;
```

## 📂 Presets Available

- `base` → Node-first Jest configuration with TypeScript & Babel integration.
- `react` → Extends `base` with jsdom environment and Testing Library setup.
- `next` → Extends react with moduleNameMapper and CSS/asset mocking for Next.js.

## 🔧 Example in a Package

```json
{
  "name": "@aristobyte-ui/button",
  "version": "1.0.0",
  "scripts": {
    "test": "jest --config jest.config.js"
  },
  "devDependencies": {
    "@aristobyte-ui/jest-config": "2.0.0",
    "jest": "^29.0.0",
    "@testing-library/jest-dom": "^6.0.0"
  }
}
```

And `jest.config.js`:

```ts
import { config } from '@aristobyte-ui/jest-config/react';
export default config;
```

## 📊 Why This Matters

| Feature                | Benefit                                            |
| ---------------------- | -------------------------------------------------- |
| Base config            | Node-first, TypeScript-ready testing               |
| React support          | jsdom environment + Testing Library integration    |
| Next.js support        | Module mapping for CSS/Assets + React integration  |
| Coverage config        | Centralized coverage reporting and ignore patterns |
| Monorepo-ready         | Consistent Jest behavior across packages           |
| Babel & TS integration | Compile TS & modern JS seamlessly                  |

## 🏆 Philosophy

At **AristoByte**, testing is **foundational** for reliability and team scalability.  
These configs empower developers to **write consistent, predictable, and maintainable tests** across the monorepo.

## 📜 License

[MIT](./LICENSE) © AristoByte

## 🛡 Shields Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Consistency-100%25-green?style=for-the-badge&logo=jest" />
  <img src="https://img.shields.io/badge/Maintained-Active-brightgreen?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/React-Tested-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Next.js-Supported-black?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/Babel-Integrated-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?style=for-the-badge&logo=typescript" />
</p>
