import { NextPage } from "next";
import MainLayout from "../../../components/layouts/MainLayout";
import { Alert, Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { OkResponseDto, ResetPasswordRequestDto } from "../../../api/api-types";
import { useMutation } from "react-query";
import { ApiError } from "next/dist/server/api-utils";
import { resetPasswordRequest } from "../../../api/user";
import Loading from "../../../components/atoms/Loading/Loading";

const ResetPasswordPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ResetPasswordRequestDto>();

  const { mutate, isLoading, isSuccess } = useMutation<
    OkResponseDto,
    ApiError,
    ResetPasswordRequestDto
  >(async (form) => resetPasswordRequest(form));

  const handleResetPasswordRequest: SubmitHandler<ResetPasswordRequestDto> = (
    form,
  ) => mutate(form);

  return (
    <MainLayout>
      {isSuccess && (
        <Alert severity='success'>
          Link do zresetowania hasła został wysłany
        </Alert>
      )}
      {isLoading && <Loading />}
      {!isLoading && (
        <form onSubmit={handleSubmit(handleResetPasswordRequest)}>
          <TextField label='E-Mail' fullWidth required {...register("email")} />
          <Button variant='contained' fullWidth type='submit'>
            Przypomnij haslo
          </Button>
        </form>
      )}
    </MainLayout>
  );
};

export default ResetPasswordPage;
