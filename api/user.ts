import {
  LoginDto,
  OkResponseDto,
  RegisterUserDto,
  ResetPasswordRequestDto,
} from "./api-types";
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

export const userRegister = async (
  form: RegisterUserDto,
): Promise<OkResponseDto> => {
  const { data } = await client.post("/users", {
    email: form.email,
    password: form.password,
    passwordConfirm: form.passwordConfirm,
    firstName: form.firstName,
    lastName: form.lastName,
  });
  return data;
};
