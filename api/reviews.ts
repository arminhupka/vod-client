import { NewReviewDto, ReviewDto, UpdateReviewDto } from "./api-types";
import { client } from "./client";

export const DeleteReview = async (id: string): Promise<ReviewDto> => {
  const { data } = await client.delete<ReviewDto>(`/reviews/${id}`, {
    withCredentials: true,
  });
  return data;
};

export const NewReview = async (form: NewReviewDto): Promise<ReviewDto> => {
  const { data } = await client.post("/reviews", form, {
    withCredentials: true,
  });
  return data;
};

export const UpdateReview = async (
  id: string,
  form: UpdateReviewDto,
): Promise<ReviewDto> => {
  const { data } = await client.patch(`/reviews/${id}`, form, {
    withCredentials: true,
  });
  return data;
};
