import {
  LessonResponseDto,
  NewLessonDto,
  OkResponseDto,
  UpdateLessonDto,
} from "./api-types";
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

export const deleteLesson = async (id: string): Promise<LessonResponseDto> => {
  const { data } = await client.delete<LessonResponseDto>(`/lessons/${id}`, {
    withCredentials: true,
  });
  return data;
};

export const addLessonToWatched = async (
  id: string,
): Promise<OkResponseDto> => {
  const { data } = await client.put<OkResponseDto>(
    `/lessons/${id}/watched`,
    {},
    { withCredentials: true },
  );
  return data;
};
