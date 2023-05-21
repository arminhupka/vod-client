import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { ApiError } from "next/dist/server/api-utils";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { object, string } from "yup";

import { GetMeResponsesDto, UpdateUserDto } from "../../../api/api-types";
import { updateUser } from "../../../api/user";

const FormSchema = object({
  email: string()
    .email("Musisz wprowadzić adres e-mail")
    .required("Adres email jest wymagany"),
  password: string()
    .min(6, "Hasło musi się skladać z minimum 6 znaków")
    .nullable(),
  passwordConfirm: string()
    .nullable()
    .when("password", {
      is: (password: string) => !!password,
      then: (schema) =>
        schema
          .min(6, "Hasło musi się skladać z minimum 6 znaków")
          .required("Musisz powtórzyć hasło"),
      otherwise: (schema) => schema.notRequired(),
    }),

  // password: string()
  //   .min(2, "Hasło musi mieć przynajmniej 6 znaków")
  //   .notRequired(),
  // password: string().when([], {
  //   is: (schema: string) => !!schema,
  //   then: (schema) =>
  //     schema.min(6, "Hasło musi mieć conajmniej 6 znaków").required(),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
  // passwordConfirm: string().when([], {
  //   is: (val) => {
  //     console.log(val);
  //     return true;
  //   },
  //   then: (schema) => schema.required("lele"),
  //   otherwise: (schema) => schema.notRequired("nene"),
  // }),
});

interface IProps {
  userData: GetMeResponsesDto;
}

const UpdateProfileForm = ({ userData }: IProps): ReactElement => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm<UpdateUserDto>({
    resolver: yupResolver(FormSchema),
    mode: "onSubmit",
  });

  const { mutate } = useMutation<GetMeResponsesDto, ApiError, UpdateUserDto>(
    async (form) => await updateUser(form),
    {
      onSuccess: () => {
        setValue("password", undefined);
        setValue("passwordConfirm", undefined);
      },
    },
  );

  const handleProfileUpdate: SubmitHandler<UpdateUserDto> = (form) => {
    console.log(form);
    mutate(form);
  };

  const watchPassword = watch("password");
  const watchPasswordConfirm = watch("passwordConfirm");

  useEffect(() => {
    if (!userData) return;
    setValue("email", userData.email);
    setValue("password", undefined);
    setValue("passwordConfirm", undefined);
    setValue("firstName", userData.billing.firstName);
    setValue("lastName", userData.billing.lastName);
    setValue("street", userData.billing.street);
    setValue("postCode", userData.billing.postCode);
    setValue("country", userData.billing.country);
    setValue("companyName", userData.billing.companyName);
    setValue("city", userData.billing.city);
    setValue("vatNumber", userData.billing.vatNumber);
    setValue("companyStreet", userData.billing.companyStreet);
    setValue("companyPostCode", userData.billing.companyPostCode);
    setValue("companyCity", userData.billing.companyPostCode);
    setValue("companyCountry", userData.billing.companyCountry);
  }, []);

  useEffect(() => {
    if (watchPassword === "") {
      setValue("password", undefined);
      clearErrors("password");
    }

    if (watchPasswordConfirm === "") {
      setValue("passwordConfirm", undefined);
      clearErrors("passwordConfirm");
    }
  }, [watchPassword, watchPasswordConfirm]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Box>
      <form onSubmit={handleSubmit(handleProfileUpdate)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label='E-mail'
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Hasło'
              fullWidth
              type='password'
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Powtórz hasło'
              type='password'
              fullWidth
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              {...register("passwordConfirm")}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Imię'
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Nazwisko'
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Ulica'
              fullWidth
              {...register("street")}
              error={!!errors.street}
              helperText={errors.street?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Kod pocztowy'
              fullWidth
              {...register("postCode")}
              error={!!errors.postCode}
              helperText={errors.postCode?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label='Miasto' fullWidth {...register("city")} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Kraj'
              fullWidth
              {...register("country")}
              error={!!errors.postCode}
              helperText={errors.postCode?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Nazwa firmy'
              fullWidth
              {...register("companyName")}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='NIP'
              fullWidth
              {...register("vatNumber")}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Adres' {...register("companyStreet")} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label='Kod pocztowy'
              {...register("companyPostCode")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label='Miasto' {...register("companyCity")} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label='Kraj' {...register("companyCountry")} />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained'>
              Zaktualizuj profil
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateProfileForm;
