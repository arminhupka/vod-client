import { OkResponseDto } from "./api-types";
import { client } from "./client";

export const logout = async (): Promise<OkResponseDto> => {
  const { data } = await client.get<OkResponseDto>("/auth/logout", {
    withCredentials: true,
  });
  return data;
};
