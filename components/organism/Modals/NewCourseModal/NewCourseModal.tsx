import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { object, string } from "yup";

import { createNewCourse } from "../../../../api/admin";
import { CourseResponseDto, NewCourseDto } from "../../../../api/api-types";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

const FormSchema = object({
  name: string()
    .min(3, "Nazwa kursu musi mieć minimum 3 znaki")
    .required("Musisz podać nazwe kursu"),
});

const NewCourseModal = ({ onClose, open }: TProps): ReactElement => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewCourseDto>({
    resolver: yupResolver(FormSchema),
  });

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    CourseResponseDto,
    AxiosError<ApiError>,
    NewCourseDto
  >(async (form) => await createNewCourse(form), {
    onSuccess: async (data) => {
      await router.push(`/admin/kursy/${data._id}`);
    },
  });

  const handleCreateCourse: SubmitHandler<NewCourseDto> = (form) =>
    mutate(form);

  return (
    <BaseModal title='Nowy kurs' onClose={onClose} open={open}>
      <>
        {(isLoading || isSuccess) && <Loading />}
        {!isLoading && !isSuccess && (
          <form onSubmit={handleSubmit(handleCreateCourse)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Nazwa kursu'
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  {...register("name", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Stwórz kurs
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
        {isError && (
          <Box mt={2}>
            {error && error.response?.status === 409 && (
              <Alert severity='error'>Kurs o takiej nazwie już istnieje</Alert>
            )}
          </Box>
        )}
      </>
    </BaseModal>
  );
};

export default NewCourseModal;
