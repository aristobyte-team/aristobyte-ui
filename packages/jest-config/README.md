# @aristobyte-ui/jest-config

Scalable, centralized Jest configurations for AristoByte’s TypeScript monorepos — with first-class support for Node, React, and Next.js environments.

---

## 📦 Exported Config Profiles

| Config Path                        | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| `@aristobyte-ui/jest-config/base`  | Core config for libraries and backend packages. Targets Node.js environments.     |
| `@aristobyte-ui/jest-config/react` | Extends `base` for React-based packages with jsdom and Testing Library support.   |
| `@aristobyte-ui/jest-config/next`  | Builds on `react`, adding CSS module mocks and alias resolution for Next.js apps. |

---

## 🚀 Usage

1. **Install peer dependencies** (in consuming package):

```bash
yarn add -D jest babel-jest @babel/preset-env @babel/preset-typescript @testing-library/jest-dom identity-obj-proxy
```

2. Consume a config in your jest.config.js or jest.config.mjs:

## Node / Base

```js
import { config as base } from "@aristobyte-ui/jest-config/base.js";

export default {
  ...base,
  displayName: "my-lib",
};
```

## React

```js
import { config as react } from "@aristobyte-ui/jest-config/react.js";

export default {
  ...react,
  displayName: "ui-components",
  rootDir: ".",
};
```

## Next.js

```js
import { config as next } from "@aristobyte-ui/jest-config/next.js";

export default {
  ...next,
  displayName: "web-app",
};
```

## 🧠 Why Use This?

- ✅ Unified test strategy across apps and packages
- 📐 Consistent coverage + transformation rules
- 🧪 Seamless Testing Library support for React
- ⚙️ Clean path aliasing & style mock handling for Next.js

---

© AristoByte Inc. — Streamlining test infrastructure at scale.
