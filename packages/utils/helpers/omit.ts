export const omit = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[]
): Omit<Obj, Keys> => {
  const res = Object.assign({}, obj);

  keys.forEach((key) => {
    delete res[key];
  });

  return res;
};
