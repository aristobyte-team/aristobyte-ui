# @aristobyte/typescript-config

Centralized TypeScript configuration package for AristoByte monorepo.

---

## Overview

This package consolidates shared TypeScript configurations to ensure consistent type safety, module resolution, and build standards across all AristoByte projects, including `apps/storybook`, `docs`, and UI packages.

Leveraging a base config (`tsconfig.base.json`), it provides extended presets for library builds and Next.js apps, streamlining developer experience and enforcing best practices at scale.

---

## Included Configurations

- **tsconfig.base.json**  
  Core compiler settings with strictness, module resolution (NodeNext), declaration output, and path aliases for seamless cross-package imports.

- **tsconfig.react.json**  
  Extends the base config, optimized for building React component libraries with JSX support and declaration-only emission.

- **tsconfig.next.json**  
  Tailored for Next.js projects, featuring JSX preservation, ESNext modules, bundler-aware resolution, and integration with Next.js plugins.

---

## Usage

In your project `tsconfig.json`, extend the relevant config depending on the context:

```json
{
  "extends": "@aristobyte/typescript-config/tsconfig.base.json"
}
```

or

```json
{
  "extends": "@aristobyte/typescript-config/tsconfig.react.json"
}
```

or

```json
{
  "extends": "@aristobyte/typescript-config/tsconfig.next.json"
}
```

## Benefits

- Enforces strict type safety and consistent compiler behavior.
- Simplifies path aliasing and module resolution across packages.
- Enhances incremental build performance and tooling compatibility.
- Aligns configurations for React libraries and Next.js apps out-of-the-box.

## Contribution

Feel free to propose improvements or extensions to adapt to evolving codebase requirements.

---

© AristoByte Inc. — Empowering scalable, maintainable TypeScript architectures.
