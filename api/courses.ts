import { CourseResponseDto } from "./api-types";
import { client } from "./client";

export const DeleteCourse = async (id: string): Promise<CourseResponseDto> => {
  const { data } = await client.delete(`/courses/${id}`, {
    withCredentials: true,
  });
  return data;
};
