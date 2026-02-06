export const zeroFill = (n: number): string => {
  return n < 10 ? '0' + n.toString() : n.toString();
};
