export const uniqueString = (length = 8) => {
  return (Math.random().toString(36) + "00000000000000000").slice(
    2,
    length + 2
  );
};
