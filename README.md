# AristoByteUI

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/aristobyte-ui/aristobyte-ui/ci.yml?branch=master&style=for-the-badge" alt="CI" />
  <img src="https://img.shields.io/github/actions/workflow/status/aristobyte-ui/aristobyte-ui/release-stable.yml?branch=master&style=for-the-badge" alt="Release" />
  <img src="https://img.shields.io/github/v/release/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Latest release" />
</p>

<p align="center">
  AristoByteUI is a performance-first, fully typed React component library built for modern monorepos. It ships modular UI packages, presets, and shared tooling for consistent builds, linting, and tests across the ecosystem.
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/%40aristobyte-ui%2Freact?style=for-the-badge" alt="NPM version" />
  <img src="https://img.shields.io/npm/dm/%40aristobyte-ui%2Freact?style=for-the-badge" alt="NPM downloads" />
  <img src="https://img.shields.io/github/commit-activity/m/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Commit activity" />
  <img src="https://img.shields.io/github/last-commit/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Last commit" />
  <img src="https://img.shields.io/github/stars/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="GitHub stars" />
  <img src="https://img.shields.io/github/issues/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Open issues" />
  <img src="https://img.shields.io/github/issues-pr/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Open PRs" />
  <img src="https://img.shields.io/github/contributors/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Contributors" />
  <img src="https://img.shields.io/github/repo-size/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="Repo size" />
  <img src="https://img.shields.io/npm/l/%40aristobyte-ui%2Freact?style=for-the-badge" alt="NPM license" />
  <img src="https://img.shields.io/github/license/aristobyte-ui/aristobyte-ui?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Docs-ui.aristobyte.com-0ea5e9?style=for-the-badge" alt="Docs" />
  <img src="https://img.shields.io/badge/GH%20Pages-Enabled-4c1?style=for-the-badge&logo=github" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node-20.17.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20.17.0" />
  <img src="https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn >=1.22" />
  <img src="https://img.shields.io/badge/NPM-10.8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10.8" />
</p>

---

## 🎬 Product Overview

[![AristoByteUI Demo](https://img.youtube.com/vi/aKAhw2RkZfA/maxresdefault.jpg)](https://www.youtube.com/watch?v=aKAhw2RkZfA)

---

## 📦 Packages Overview

| Package                            | Category   | Exports (high-level)         | NPM                                                                   |
| ---------------------------------- | ---------- | ---------------------------- | --------------------------------------------------------------------- |
| `@aristobyte-ui/button`            | Component  | `Button`, `ButtonGroup`      | [NPM](https://www.npmjs.com/package/@aristobyte-ui/button)            |
| `@aristobyte-ui/dropdown`          | Component  | `Dropdown`, `DropdownOption` | [NPM](https://www.npmjs.com/package/@aristobyte-ui/dropdown)          |
| `@aristobyte-ui/anchor`            | Component  | `Anchor`                     | [NPM](https://www.npmjs.com/package/@aristobyte-ui/anchor)            |
| `@aristobyte-ui/radio`             | Component  | `Radio`, `RadioGroup`        | [NPM](https://www.npmjs.com/package/@aristobyte-ui/radio)             |
| `@aristobyte-ui/switch`            | Component  | `Switch`                     | [NPM](https://www.npmjs.com/package/@aristobyte-ui/switch)            |
| `@aristobyte-ui/spinner`           | Component  | `Spinner`                    | [NPM](https://www.npmjs.com/package/@aristobyte-ui/spinner)           |
| `@aristobyte-ui/message-box`       | Component  | `MessageBox`                 | [NPM](https://www.npmjs.com/package/@aristobyte-ui/message-box)       |
| `@aristobyte-ui/card`              | Component  | `Card`                       | [NPM](https://www.npmjs.com/package/@aristobyte-ui/card)              |
| `@aristobyte-ui/label`             | Component  | `Label`                      | [NPM](https://www.npmjs.com/package/@aristobyte-ui/label)             |
| `@aristobyte-ui/presets`           | Presets    | UI presets                   | [NPM](https://www.npmjs.com/package/@aristobyte-ui/presets)           |
| `@aristobyte-ui/utils`             | Utilities  | Icons + helpers              | [NPM](https://www.npmjs.com/package/@aristobyte-ui/utils)             |
| `@aristobyte-ui/react`             | Aggregator | Unified entrypoint           | [NPM](https://www.npmjs.com/package/@aristobyte-ui/react)             |
| `@aristobyte-ui/cli`               | Tooling    | CLI utilities                | [NPM](https://www.npmjs.com/package/@aristobyte-ui/cli)               |
| `@aristobyte-ui/eslint-config`     | Tooling    | ESLint flat configs          | [NPM](https://www.npmjs.com/package/@aristobyte-ui/eslint-config)     |
| `@aristobyte-ui/jest-config`       | Tooling    | Jest configs                 | [NPM](https://www.npmjs.com/package/@aristobyte-ui/jest-config)       |
| `@aristobyte-ui/typescript-config` | Tooling    | TS presets                   | [NPM](https://www.npmjs.com/package/@aristobyte-ui/typescript-config) |
| `@aristobyte-ui/prettier-config`   | Tooling    | Prettier config              | [NPM](https://www.npmjs.com/package/@aristobyte-ui/prettier-config)   |

---

## 🧭 Repo Structure

| Path           | Purpose                                     |
| -------------- | ------------------------------------------- |
| `packages/*`   | Publishable packages (components + configs) |
| `apps/docs`    | Documentation site (Next.js)                |
| `apps/sandbox` | Local dev sandbox                           |
| `config/*`     | Shared build/test configuration             |
| `scripts/*`    | Build + release automation                  |

---

## 🚀 Getting Started

```bash
yarn install
```

### Dev servers

```bash
yarn dev:docs
yarn dev:sandbox
yarn dev:cli
```

### Build

```bash
yarn build
```

### Lint / Test

```bash
yarn lint
yarn test:ci
```

---

## 🧪 CI & Automation

- `ci.yml`: lint, build, tests on PRs and `master`.
- `codeql.yml`: security scanning (scheduled + PR + push).
- `dependency-review.yml`: dependency diff checks on PRs.
- `labeler.yml`: auto-label PRs.
- `release-drafter.yml`: keeps release notes up to date.
- `release-stable.yml`: version, tag, publish, and release.

---

## 🌐 Docs & Demos

- Docs: [ui.aristobyte.com](https://ui.aristobyte.com)
- Local docs: `yarn dev:docs`
- Local sandbox: `yarn dev:sandbox`

---

## 📦 Releases & Publishing

- Releases are automated in `release-stable.yml`.
- Versioning uses Changesets.
- Packages are published to NPM and GitHub Packages.
- Docs are deployed to GitHub Pages at [ui.aristobyte.com](https://ui.aristobyte.com).
- CI can be skipped by adding `[skip ci]` to a PR title or commit message.

---

## 🧰 Tooling Packages

- `@aristobyte-ui/eslint-config`
- `@aristobyte-ui/jest-config`
- `@aristobyte-ui/typescript-config`
- `@aristobyte-ui/prettier-config`

---

## 🤝 Contributing

See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for guidelines.

---

## 🔐 Security

Report vulnerabilities via `SECURITY.md`.

---

## 📜 License

[MIT](./LICENSE) © AristoByte
