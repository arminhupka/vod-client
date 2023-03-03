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
import { boolean, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSchema = object({
  email: string()
    .email("Podana wartość mui bać mailem")
    .required("Email jest wymagany"),
  password: string().required("Hasło jest wymagane"),
  rememberMe: boolean().notRequired(),
});

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const LoginModal = ({ open, onClose }: TProps) => {
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
    status,
    reset: resetMutation,
  } = useMutation<OkResponseDto, ApiError, LoginDto>(
    async (vars) => userLogin(vars),
    {
      onSuccess: async () => {
        router.reload();
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
        {isLoading && <Loading />}
        {!isLoading && (
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
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default LoginModal;
