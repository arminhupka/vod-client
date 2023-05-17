import { Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { ReviewDto, UpdateReviewDto } from "../../../../api/api-types";
import { UpdateReview } from "../../../../api/reviews";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

interface IProps extends TProps {
  review: ReviewDto | null;
}

const EditReviewModal = ({ review, onClose, open }: IProps): ReactElement => {
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm<UpdateReviewDto>();

  const { mutate, isLoading, reset } = useMutation<
    ReviewDto,
    AxiosError<ApiError>,
    UpdateReviewDto
  >(async (form) => await UpdateReview(review?._id ?? "", form), {
    onSuccess: () => {
      router.replace(router.asPath);
    },
  });

  useEffect(() => {
    if (review) {
      setValue("title", review.title);
      setValue("review", review.review);
    }
  }, [review]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [onClose, reset]);

  const handleReviewUpdate: SubmitHandler<UpdateReviewDto> = (form) =>
    mutate(form);

  return (
    <BaseModal title='Edytuj recenzje' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleReviewUpdate)}>
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

export default EditReviewModal;
