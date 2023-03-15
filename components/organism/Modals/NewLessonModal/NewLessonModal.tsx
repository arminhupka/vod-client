import { Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { LessonResponseDto, NewLessonDto } from "../../../../api/api-types";
import { newLesson } from "../../../../api/lessons";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TForm = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TForm {
  topicId: string | null;
}

const NewLessonModal = ({ onClose, open, topicId }: IProps): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewLessonDto>();

  const { mutateAsync, isLoading } = useMutation<
    LessonResponseDto,
    AxiosError<ApiError>,
    NewLessonDto
  >(async (form) => await newLesson(form), {
    onSuccess: async () => {
      await router.replace(router.asPath);
      onClose();
      reset();
    },
  });

  const handleCreateNewLesson: SubmitHandler<NewLessonDto> = async (form) => {
    if (!topicId || !id) return;
    form.order = 0;
    form.course = id as string;
    form.topic = topicId;
    await mutateAsync(form);
  };

  const handleOnClose = () => {
    reset();
    onClose();
  };

  return (
    <BaseModal title='Nowa lekcja' onClose={handleOnClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleCreateNewLesson)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Nazwa lekcji'
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  {...register("title", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Opis'
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  {...register("description", {
                    required: true,
                    minLength: 16,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Link do filmu'
                  error={!!errors.videoLink}
                  helperText={errors.videoLink?.message}
                  {...register("videoLink", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Dodaj lekcje
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewLessonModal;
