import {
  AdminGetCourseDetailsResponseDto,
  CourseResponseDto,
  NewCourseDto,
  UpdateCourseDto,
} from "./api-types";
import { client } from "./client";

export const createNewCourse = async (
  form: NewCourseDto,
): Promise<CourseResponseDto> => {
  const { data } = await client.post<CourseResponseDto>("/courses", form, {
    withCredentials: true,
  });
  return data;
};

export const updateCourse = async (
  id: string,
  form: UpdateCourseDto,
): Promise<AdminGetCourseDetailsResponseDto> => {
  const { data } = await client.patch<AdminGetCourseDetailsResponseDto>(
    `/courses/${id}`,
    form,
    {
      withCredentials: true,
    },
  );
  return data;
};
