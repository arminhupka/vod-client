import { LoginDto, OkResponseDto, ResetPasswordRequestDto } from "./api-types";
import { client } from "./client";

export const userLogin = async (form: LoginDto): Promise<OkResponseDto> => {
  const { data } = await client.post<OkResponseDto>(
    "auth/login",
    {
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    },
    { withCredentials: true },
  );

  return data;
};

export const resetPasswordRequest = async (
  form: ResetPasswordRequestDto,
): Promise<OkResponseDto> => {
  const { data } = await client.post("/users/reset-password", form);
  return data;
};
