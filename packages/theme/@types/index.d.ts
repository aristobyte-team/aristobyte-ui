declare module "tailwindcss/plugin" {
  import Plugin from "tailwindcss";
  const plugin: (
    cb: (helpers: {
      addBase: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
      addComponents: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
      addUtilities: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
      matchUtilities: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
      theme: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
    }) => void
  ) => typeof Plugin;
  export default plugin;
}
