export const mapKeys = (
  obj: Record<string, any>,
  iteratee: (value: any, key: string) => any
): Record<string, any> => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [iteratee(value, key), value])
  );
};
