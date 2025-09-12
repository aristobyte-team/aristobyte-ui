export const asThemeMap = <T extends string>(arr: readonly T[]): Record<T, T> =>
  Object.fromEntries(arr.map((v) => [v, v] as const)) as Record<T, T>;
