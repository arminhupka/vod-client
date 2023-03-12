export const convertStatus = (status: string): string => {
  if (status === "DRAFT") {
    return "Szkic";
  }

  if (status === "PUBLISHED") {
    return "Opublikowano";
  }

  return "";
};
