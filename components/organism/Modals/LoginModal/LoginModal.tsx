import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import { useMutation } from "react-query";
import { LoginDto, OkResponseDto } from "../../../../api/api-types";
import { ApiError } from "next/dist/server/api-utils";
import { userLogin } from "../../../../api/user";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../../../atoms/Loading/Loading";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const LoginModal = ({ open, onClose }: TProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginDto>();
  const [notFoundError, setNotFoundError] = useState(false);

  const { mutate, isLoading, isSuccess, isError, status } = useMutation<
    OkResponseDto,
    ApiError,
    LoginDto
  >(async (vars) => userLogin(vars), {
    onSuccess: async () => {
      // await router.push("/konto");
    },
    onError: (error) => {
      if (error.statusCode === 404) {
        setNotFoundError(true);
      }
    },
  });

  const handleLogin: SubmitHandler<LoginDto> = async (form) =>
    mutate({
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    });

  return (
    <BaseModal open={open} onClose={onClose} title='Logowanie'>
      {isLoading && <Loading />}
      {!isLoading && (
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Email'
                type='email'
                fullWidth
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Hasło'
                type='password'
                fullWidth
                {...register("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Zapamiętaj mnie'
                {...register("rememberMe")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' fullWidth variant='contained'>
                Zaloguj
              </Button>
            </Grid>
          </Grid>
          {isError && (
            <Alert severity='error'>
              Brak użytkownika lub nie poprawne hasło
            </Alert>
          )}
        </form>
      )}
    </BaseModal>
  );
};

export default LoginModal;
