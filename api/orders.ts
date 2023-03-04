import { GetOrderResponseDto } from "./api-types";
import { client } from "./client";

export const getOrder = async (id: string): Promise<GetOrderResponseDto> => {
  const { data } = await client.get<GetOrderResponseDto>(`/user/orders/${id}`, {
    withCredentials: true,
  });
  return data;
};
