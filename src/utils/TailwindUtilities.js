export const classMerge = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
