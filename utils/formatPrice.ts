export const formatPrice = (value: number, sign?: boolean): string => {
  const options: Intl.NumberFormatOptions = {
    currency: "PLN",
    style: "currency",
  };

  const formatter = new Intl.NumberFormat("pl-PL", options);

  if (sign) {
    return formatter.format(value / 100);
  }

  return formatter
    .format(value / 100)
    .replace("zł", "")
    .trim();
};
