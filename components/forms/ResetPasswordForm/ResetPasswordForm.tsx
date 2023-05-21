import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

import { OkResponseDto, ResetPasswordDto } from "../../../api/api-types";
import { ResetPassword } from "../../../api/user";
import Loading from "../../atoms/Loading/Loading";
import { StyledWrapper } from "./ResetPasswordForm.styles";

const FormSchema = yup.object().shape({
  password: yup.string().required("Musisz podać hasło"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą się zgadzać"),
});

interface IProps {
  token: string;
}

const ResetPasswordForm = ({ token }: IProps): ReactElement => {
  const { register, formState, handleSubmit } = useForm<ResetPasswordDto>({
    resolver: yupResolver(FormSchema),
  });

  const mutation = useMutation<
    OkResponseDto,
    AxiosError<ApiError>,
    ResetPasswordDto
  >(async (form) => await ResetPassword(token, form));

  const handleResetPassword: SubmitHandler<ResetPasswordDto> = (form) => {
    mutation.mutate(form);
  };

  return (
    <StyledWrapper mt={2}>
      {!mutation.isLoading && mutation.isSuccess && (
        <Alert severity='success'>Twoje hasło zostalo zmienione</Alert>
      )}
      {!mutation.isLoading && mutation.isError && (
        <Box mb={2}>
          <Alert severity='error'>
            Link do zmiany hasła wygasł lub jest nie poprawny
          </Alert>
        </Box>
      )}
      {mutation.isLoading && <Loading />}
      {!mutation.isLoading && !mutation.isSuccess && (
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Nowe hasło'
                fullWidth
                type='password'
                {...register("password")}
                error={!!formState.errors.password}
                helperText={formState.errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Potwórz nowe hasło'
                fullWidth
                type='password'
                {...register("passwordConfirm")}
                error={!!formState.errors.passwordConfirm}
                helperText={formState.errors.passwordConfirm?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit'>
                Zmień hasło
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </StyledWrapper>
  );
};

export default ResetPasswordForm;
