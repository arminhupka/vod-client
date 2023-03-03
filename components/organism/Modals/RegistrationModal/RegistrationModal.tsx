import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { boolean, object, string } from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { OkResponseDto, RegisterUserDto } from "../../../../api/api-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { ApiError } from "next/dist/server/api-utils";
import { userRegister } from "../../../../api/user";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const RegisterSchema = object({
  email: string().email("Podaj adres email").required("Email jest wymagany"),
  password: string()
    .min(6, "Hasło musi mieć conajmniej 6 znaków")
    .required("Musisz podać hasło"),
  passwordConfirm: string()
    .min(6, "Powtórzone hasło musi mieć conajmniej 6 znaków")
    .required("Musisz powtórzyć hasło"),
  firstName: string().required("Podaj swoje imię"),
  lastName: string().required("Podaj swoje nazwisko"),
  agreementConfirm: boolean().required("Musisz zaakceptować regulamin"),
});

interface IForm extends RegisterUserDto {
  agreementConfirm: boolean;
}

const RegistrationModal = ({ open, onClose }: TProps) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({
    resolver: yupResolver(RegisterSchema),
  });

  const {
    mutate,
    isSuccess,
    reset: mutationReset,
    isLoading,
  } = useMutation<OkResponseDto, ApiError, RegisterUserDto>(async (vars) =>
    userRegister(vars),
  );

  const handleRegister: SubmitHandler<IForm> = (form) => mutate(form);

  const handleClose = () => {
    onClose();
    reset();
    mutationReset();
  };

  return (
    <BaseModal open={open} onClose={handleClose} title='Rejestracja'>
      <>
        {isLoading && <Loading />}
        {isSuccess && (
          <Alert>
            Twoje konto zostało stworzone. Na maila otrzymasz wiadomość z
            linkiem aktywacyjnym.
          </Alert>
        )}
        {!isSuccess && !isLoading && (
          <form onSubmit={handleSubmit(handleRegister)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Imię'
                  type='text'
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Nazwisko'
                  type='text'
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  {...register("lastName", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Email'
                  type='email'
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email", { required: true })}
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
              <Grid item xs={12}>
                <TextField
                  label='Powtórz hasło'
                  type='password'
                  fullWidth
                  error={!!errors.passwordConfirm}
                  helperText={errors.passwordConfirm?.message}
                  {...register("passwordConfirm", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      {...register("agreementConfirm", { required: true })}
                    />
                  }
                  label='Akceptuje regulamin serwisu'
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' fullWidth variant='contained'>
                  Zarejestruj
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default RegistrationModal;
