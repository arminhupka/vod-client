import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { boolean, object, string } from "yup";

import { LoginDto, OkResponseDto } from "../../../../api/api-types";
import { userLogin } from "../../../../api/user";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

const FormSchema = object({
  email: string()
    .email("Podana wartość mui bać mailem")
    .required("Email jest wymagany"),
  password: string().required("Hasło jest wymagane"),
  rememberMe: boolean().notRequired(),
});

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  onResetPasswordClick: () => void;
}

const LoginModal = ({ open, onClose, onResetPasswordClick }: IProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginDto>({
    resolver: yupResolver(FormSchema),
  });
  const [notFoundError, setNotFoundError] = useState(false);

  const {
    mutate,
    isLoading,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useMutation<OkResponseDto, ApiError, LoginDto>(
    async (vars) => userLogin(vars),
    {
      onSuccess: async () => {
        await router.push("/");
      },
      onError: (error) => {
        if (error.statusCode === 404) {
          setNotFoundError(true);
        }
      },
    },
  );

  const handleLogin: SubmitHandler<LoginDto> = async (form) =>
    mutate({
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    });

  const handleClose = () => {
    onClose();
    reset();
    resetMutation();
  };

  return (
    <BaseModal open={open} onClose={handleClose} title='Logowanie'>
      <>
        {(isLoading || isSuccess) && <Loading />}
        {!isLoading && !isSuccess && (
          <form onSubmit={handleSubmit(handleLogin)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Email'
                  type='email'
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Hasło'
                  type='password'
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password", { required: true })}
                />
              </Grid>
              {isError && (
                <Grid item xs={12}>
                  <Alert severity='error'>
                    Brak użytkownika lub nie poprawne hasło
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label='Zapamiętaj mnie'
                  {...register("rememberMe", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' fullWidth variant='contained'>
                  Zaloguj
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant='outlined'
                  onClick={onResetPasswordClick}>
                  Nie pamiętasz hasła?
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default LoginModal;
