import { client } from "./client";

export const payWithPayU = async (ids: string[]): Promise<string> => {
  const { data } = await client.post(
    "/payu/create",
    {
      products: ids,
    },
    { withCredentials: true },
  );

  return data;
};
