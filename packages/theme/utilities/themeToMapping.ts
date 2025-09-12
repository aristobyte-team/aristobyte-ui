export const themeToMapping = <P extends object, R extends string[]>(
  theme: P
) => Object.keys(theme) as R;
