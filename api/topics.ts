import { NewTopicDto, TopicResponseDto } from "./api-types";
import { client } from "./client";

export const CreateNewTopic = async (
  form: NewTopicDto,
): Promise<TopicResponseDto> => {
  const { data } = await client.post<TopicResponseDto>("/topics", form, {
    withCredentials: true,
  });
  return data;
};

export const DeleteTopic = async (
  topicId: string,
): Promise<TopicResponseDto> => {
  const { data } = await client.delete<TopicResponseDto>(`/topics/${topicId}`, {
    withCredentials: true,
  });
  return data;
};
