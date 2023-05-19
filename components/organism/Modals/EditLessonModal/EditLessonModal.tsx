import { Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import {
  AdminGetCourseLessonsItemResponseDto,
  LessonResponseDto,
  UpdateLessonDto,
} from "../../../../api/api-types";
import { deleteLesson, updateLesson } from "../../../../api/lessons";
import useModalState from "../../../../hooks/useModalState";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TProps {
  lesson: AdminGetCourseLessonsItemResponseDto | null;
}

const EditLessonModal = ({ lesson, onClose, open }: IProps): ReactElement => {
  const router = useRouter();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useModalState();

  const {
    register,
    formState: { errors },
    setValue,
    reset,
    handleSubmit,
  } = useForm<UpdateLessonDto>();

  const mutation = useMutation<
    LessonResponseDto,
    AxiosError<ApiError>,
    UpdateLessonDto
  >(async (form) => await updateLesson(lesson?._id ?? "", form), {
    onSuccess: () => router.replace(router.asPath),
  });

  const deleteMutation = useMutation<LessonResponseDto, AxiosError<ApiError>>(
    async () => await deleteLesson(lesson?._id ?? ""),
    {
      onSuccess: () => {
        onCloseConfirmModal();
        onClose();
        router.replace(router.asPath);
      },
    },
  );

  const handleOnClose = (): void => {
    onClose();
    reset();
  };

  const handleFormSubmit: SubmitHandler<UpdateLessonDto> = (form) => {
    mutation.mutate(form);
  };

  const handleModalConfirmation = (): void => deleteMutation.mutate();

  useEffect(() => {
    if (lesson) {
      setValue("title", lesson.title);
      setValue("description", lesson.description);
      setValue("videoLink", lesson.videoLink);
    }
  }, [lesson, setValue]);

  return (
    <BaseModal title='Edycja lekcji' onClose={handleOnClose} open={open}>
      <>
        <ConfirmModal
          title={`Chcesz usunąć lekcje ${lesson?.title}`}
          onClose={onCloseConfirmModal}
          open={isOpenConfirmModal}
          onConfirm={handleModalConfirmation}
        />
        {(mutation.isLoading || deleteMutation.isLoading) && <Loading />}
        {!mutation.isLoading && !deleteMutation.isLoading && (
          <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                  Zapisz lekcje
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='outlined'
                  color='error'
                  fullWidth
                  onClick={onOpenConfirmModal}>
                  Usuń lekcje
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default EditLessonModal;
