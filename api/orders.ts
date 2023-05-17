import { GetOrderResponseDto } from "./api-types";
import { client } from "./client";

export const getOrder = async (id: string): Promise<GetOrderResponseDto> => {
  const { data } = await client.get<GetOrderResponseDto>(`/user/orders/${id}`, {
    withCredentials: true,
  });
  return data;
};

export const getInvoice = async (id: string) => {
  return await client.get(`/order/${id}/invoice`);
};
