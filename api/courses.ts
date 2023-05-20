import { CourseResponseDto, ReviewDto } from "./api-types";
import { client } from "./client";

export const DeleteCourse = async (id: string): Promise<CourseResponseDto> => {
  const { data } = await client.delete(`/courses/${id}`, {
    withCredentials: true,
  });
  return data;
};

export const GetCourseReviews = async (
  courseId: string,
): Promise<ReviewDto[]> => {
  const { data } = await client.get<ReviewDto[]>(`/course/${courseId}/review`);
  return data;
};

export const DownloadCertificate = async (courseId: string) => {
  const { data } = await client.get(`/courses/${courseId}/certificate`, {
    withCredentials: true,
    responseType: "blob",
  });
  return data;
};
