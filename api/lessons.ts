import { LessonResponseDto, NewLessonDto, UpdateLessonDto } from "./api-types";
import { client } from "./client";

export const newLesson = async (
  form: NewLessonDto,
): Promise<LessonResponseDto> => {
  const { data } = await client.post<LessonResponseDto>("/lessons", form, {
    withCredentials: true,
  });
  return data;
};

export const updateLesson = async (
  id: string,
  form: UpdateLessonDto,
): Promise<LessonResponseDto> => {
  const { data } = await client.patch<LessonResponseDto>(
    `/lessons/${id}`,
    form,
    { withCredentials: true },
  );

  return data;
};
