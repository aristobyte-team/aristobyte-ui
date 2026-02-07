declare module 'eslint-plugin-only-warn' {
  import type { Linter } from 'eslint';
  const plugin: Linter.Plugin;
  export default plugin;
}
