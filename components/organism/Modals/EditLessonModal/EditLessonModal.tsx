import { Button, Grid, TextField } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  AdminGetCourseLessonsItemResponseDto,
  UpdateLessonDto,
} from "../../../../api/api-types";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TProps {
  lesson: AdminGetCourseLessonsItemResponseDto | null;
}

const EditLessonModal = ({ lesson, onClose, open }: IProps): ReactElement => {
  const {
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm<UpdateLessonDto>();

  const handleOnClose = () => {
    onClose();
    reset();
  };

  useEffect(() => {
    if (lesson) {
      setValue("title", lesson.title);
      setValue("description", lesson.description);
      setValue("videoLink", lesson.videoLink);
    }
  }, [lesson]);

  return (
    <BaseModal title='Edycja lekcji' onClose={handleOnClose} open={open}>
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
      </Grid>
    </BaseModal>
  );
};

export default EditLessonModal;
