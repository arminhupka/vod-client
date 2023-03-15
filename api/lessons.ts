import { LessonResponseDto, NewLessonDto } from "./api-types";
import { client } from "./client";

export const newLesson = async (
  form: NewLessonDto,
): Promise<LessonResponseDto> => {
  const { data } = await client.post<LessonResponseDto>("/lessons", form, {
    withCredentials: true,
  });
  return data;
};
