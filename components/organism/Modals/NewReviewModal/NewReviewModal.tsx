import { Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { NewReviewDto, ReviewDto } from "../../../../api/api-types";
import { NewReview } from "../../../../api/reviews";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  courseId: string;
}

const NewReviewModal = ({ courseId, onClose, open }: IProps): ReactElement => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation<
    ReviewDto,
    AxiosError<ApiError>,
    NewReviewDto
  >(async (form) => await NewReview(form), {
    onSuccess: async () => {
      await router.replace(router.asPath);
      onClose();
    },
  });

  const { register, handleSubmit, reset } = useForm<NewReviewDto>();

  const handleAddComment: SubmitHandler<NewReviewDto> = (form) =>
    mutate({
      ...form,
      course: courseId,
    });

  useEffect(() => {
    reset();
  }, [onClose, reset]);

  return (
    <BaseModal title='Recenzja kursu' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleAddComment)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Tytuł'
                  fullWidth
                  {...register("title", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Treść recenzji'
                  multiline
                  rows={4}
                  fullWidth
                  {...register("review", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth type='submit'>
                  Dodaj recenzje
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewReviewModal;
