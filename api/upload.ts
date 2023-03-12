import { client } from "./client";

export const uploadImage = async (id: string, file: Blob): Promise<string> => {
  const fd = new FormData();
  fd.append("courseId", id);
  fd.append("file", file);

  const { data } = await client.post("/upload", fd, { withCredentials: true });
  return data;
};
