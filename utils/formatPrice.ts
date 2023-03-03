export const formatPrice = (value: number): string => {
  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
  return formatter.format(value / 100);
};
