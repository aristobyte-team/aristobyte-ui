# @aristobyte-ui/sandbox

A lightweight Next.js sandbox for local development and visual QA of AristoByteUI components.

## ✨ Features

- Local workspace packages wired via TypeScript paths
- Minimal Next.js App Router setup
- SCSS globals for quick styling overrides

## 🚀 Getting Started

```bash
# From repo root

yarn install

yarn workspace @aristobyte-ui/sandbox dev
```

Open http://localhost:3001 to view the sandbox.

## 📝 Notes

- This sandbox is intentionally isolated; its tsconfig should not be used outside of `apps/sandbox`.
- Component imports resolve to local sources via `tsconfig.json` paths.

## 🧰 Scripts

- `dev`: start Next.js dev server on port 3001
- `build`: production build
- `start`: run production server
- `lint`: Next.js lint
