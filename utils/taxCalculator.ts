export const taxCalculator = (total: number): number => {
  return Math.floor(total * (100 / (23 + 100)));
};
