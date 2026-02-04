#!/usr/bin/env bash
set -euo pipefail

FG_CYAN="\033[36m"
FG_GREEN="\033[32m"
FG_YELLOW="\033[33m"
FG_RED="\033[31m"
FG_GRAY="\033[90m"
RESET="\033[0m"

log_info() { printf "%b[INFO]%b %s\n" "$FG_CYAN" "$RESET" "$*"; }
log_ok() { printf "%b[OK]%b %b✓%b %s\n" "$FG_GREEN" "$RESET" "$FG_GREEN" "$RESET" "$*"; }
log_warn() { printf "%b[WARN]%b %b!%b %s\n" "$FG_YELLOW" "$RESET" "$FG_YELLOW" "$RESET" "$*"; }
log_err() { printf "%b[FAIL]%b %b×%b %s\n" "$FG_RED" "$RESET" "$FG_RED" "$RESET" "$*"; }
log_muted() { printf "%b%s%b\n" "$FG_GRAY" "$*" "$RESET"; }

# ----------------------------------------
# Input validation
# ----------------------------------------

PACKAGE_NAME="${1:-}"

if [[ -z "$PACKAGE_NAME" ]]; then
  log_err "PACKAGE_NAME is required (e.g. message-box)"
  exit 1
fi

if [[ ! "$PACKAGE_NAME" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  log_err "Invalid package name. Use kebab-case only."
  exit 1
fi

# ----------------------------------------
# Derived variables
# ----------------------------------------

COMPONENT_NAME="$(
  echo "$PACKAGE_NAME" \
  | awk -F'-' '{ for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2) }1' \
  | tr -d ' '
)"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PKG_DIR="$ROOT_DIR/packages/$PACKAGE_NAME"

if [[ -d "$PKG_DIR" ]]; then
  log_err "Package already exists: packages/$PACKAGE_NAME"
  exit 1
fi

log_info "Provisioning package"
log_muted "  package   : $PACKAGE_NAME"
log_muted "  component : $COMPONENT_NAME"

# ----------------------------------------
# Directory structure
# ----------------------------------------

mkdir -p \
  "$PKG_DIR/src/main/components/$COMPONENT_NAME"

# ----------------------------------------
# package.json
# ----------------------------------------

cat > "$PKG_DIR/package.json" <<EOF_PKG
{
  "name": "@aristobyte-ui/$PACKAGE_NAME",
  "description": "@TODO_docs: Short description for $PACKAGE_NAME package",
  "version": "1.0.113",
  "license": "MIT",
  "private": false,
  "author": "AristoByte <info@aristobyte.com>",
  "homepage": "https://www.npmjs.com/package/@aristobyte-ui/$PACKAGE_NAME",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aristobyte-team/aristobyte-ui.git",
    "directory": "packages/$PACKAGE_NAME"
  },
  "bugs": {
    "url": "https://github.com/aristobyte-team/aristobyte-ui.git/issues"
  },
  "engines": {
    "node": ">=20.17.0",
    "npm": ">=10.8.2",
    "yarn": ">=1.22.22"
  },
  "keywords": [
    "aristobyte",
    "ui",
    "component",
    "react",
    "typescript"
  ],
  "files": [
    "es",
    "lib"
  ],
  "publishConfig": {
    "access": "public"
  },
  "main": "lib/index.js",
  "module": "es/index.js",
  "types": "es/index.d.ts",
  "peerDependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
}
EOF_PKG

# ----------------------------------------
# README.md
# ----------------------------------------

cat > "$PKG_DIR/README.md" <<EOF_README
# @aristobyte-ui/$PACKAGE_NAME

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

<!-- @TODO_docs - package description -->

## Installation

```bash
# Install via yarn
yarn add -D @aristobyte-ui/$PACKAGE_NAME

# Or via npm
npm install -D @aristobyte-ui/$PACKAGE_NAME

# Or via bun
bun add -D @aristobyte-ui/$PACKAGE_NAME

# Or via pnpm
pnpm add -D @aristobyte-ui/$PACKAGE_NAME
```

## Usage

```tsx
// @TODO_docs
// import { $COMPONENT_NAME } from '@aristobyte-ui/$PACKAGE_NAME';

// export default function App() {
//   return (
//     <div>
//       <$COMPONENT_NAME variant="success" type="solid" radius="md" withIcon>
//         This is a success message!
//       </$COMPONENT_NAME>
//     </div>
//   );
// }
```

## Presets Available

// @TODO_docs

<!-- - **Variants**: `default`, `info`, `warning`, `success`, `error`
- **Types**: `solid`, `outline`, `outline-dashed`, `no-outline`, `glowing`
- **Radius options**: `none`, `sm`, `md`, `lg`, `full`
- **Icons**: optional via `withIcon` or custom via `customIcon` prop -->

## Example in a Package

```tsx
// @TODO_docs
```

## Why This Matters

<!-- - **Performance-first:** Lightweight CSS ensures fast rendering and smooth transitions.
- **Fully typed:** TypeScript-first API ensures predictable usage and IDE autocomplete.
- **AristoByteUI ready:** Seamlessly integrates with design tokens and SCSS modules.
- **Flexible:** Supports multiple variants, types, border-radius options, and optional icons. -->
 <!-- @TODO_docs -->

## Philosophy

<!-- - **Modular architecture:** $COMPONENT_NAME component is fully composable.
- **Declarative styling:** SCSS modules keep styles maintainable and scoped.
- **Strict typing & runtime flexibility:** Props fully typed while allowing runtime overrides.
- **Developer experience optimized:** Easy to use with predictable behavior and minimal boilerplate. -->
<!-- @TODO_docs -->

## License

[MIT](./LICENSE) © AristoByte

## Shields Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Consistency-100%25-green?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Maintained-Active-brightgreen?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Strictness-High-critical?style=for-the-badge&logo=eslint" />
  <img src="https://img.shields.io/badge/Declarations-Enabled-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Monorepo-Turbo-green?style=for-the-badge&logo=monorepo" />
  <img src="https://img.shields.io/badge/Interop-ESM%2FCJS-orange?style=for-the-badge&logo=javascript" />
</p>
EOF_README

log_info "Linking workspace dependency: @aristobyte-ui/utils"

yarn workspace "@aristobyte-ui/$PACKAGE_NAME" add "@aristobyte-ui/utils"

# ----------------------------------------
# src/main/index.ts
# ----------------------------------------

cat > "$PKG_DIR/src/main/index.ts" <<EOF_SRC_INDEX
export * from './components';
EOF_SRC_INDEX

# ----------------------------------------
# src/main/components/index.ts
# ----------------------------------------

cat > "$PKG_DIR/src/main/components/index.ts" <<EOF_COMPONENTS_INDEX
export * from './$COMPONENT_NAME';
EOF_COMPONENTS_INDEX

# ----------------------------------------
# Component index.tsx
# ----------------------------------------

cat > "$PKG_DIR/src/main/components/$COMPONENT_NAME/index.tsx" <<EOF_COMPONENT
import * as React from 'react';

import './$COMPONENT_NAME.scss';

export interface I$COMPONENT_NAME {}

export const $COMPONENT_NAME: React.FC<I$COMPONENT_NAME> = ({}) => {
  return <div className="$PACKAGE_NAME"></div>;
};
EOF_COMPONENT

# ----------------------------------------
# Component SCSS
# ----------------------------------------

cat > "$PKG_DIR/src/main/components/$COMPONENT_NAME/$COMPONENT_NAME.scss" <<EOF_SCSS
@use '@aristobyte-ui/utils/styles/settings' as *;

.$PACKAGE_NAME {
  // @TODO_styles
}
EOF_SCSS

# ----------------------------------------
# Done
# ----------------------------------------

log_ok "Package created: packages/$PACKAGE_NAME"
