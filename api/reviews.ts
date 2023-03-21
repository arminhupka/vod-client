import { ReviewDto } from "./api-types";
import { client } from "./client";

export const DeleteReview = async (id: string): Promise<ReviewDto> => {
  const { data } = await client.delete<ReviewDto>(`/reviews/${id}`, {
    withCredentials: true,
  });
  return data;
};
