import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Grid, TextField } from "@mui/material";
import { ApiError } from "next/dist/server/api-utils";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

import {
  OkResponseDto,
  ResetPasswordRequestDto,
} from "../../../../api/api-types";
import { resetPasswordRequest } from "../../../../api/user";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Nie poprawny format",
    )
    .required("Musisz podać adres email"),
});

const ResetPasswordModal = ({ open, onClose }: TProps): ReactElement => {
  const { mutate, isLoading, isSuccess } = useMutation<
    OkResponseDto,
    ApiError,
    ResetPasswordRequestDto
  >(async (form) => resetPasswordRequest(form));

  const { register, formState, handleSubmit } =
    useForm<ResetPasswordRequestDto>({
      resolver: yupResolver(FormSchema),
      mode: "onSubmit",
    });

  const handleResetPassword: SubmitHandler<ResetPasswordRequestDto> = (form) =>
    mutate(form);

  return (
    <BaseModal title='Zresetuj hasło' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && !isSuccess && (
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Adres E-Mail'
                  fullWidth
                  {...register("email")}
                  helperText={formState.errors.email?.message}
                  error={!!formState.errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' fullWidth variant='contained'>
                  Zresetuj hasło
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
        {!isLoading && isSuccess && (
          <Alert severity='success'>
            Link do zresetowania hasła został wysłany
          </Alert>
        )}
      </>
    </BaseModal>
  );
};

export default ResetPasswordModal;
