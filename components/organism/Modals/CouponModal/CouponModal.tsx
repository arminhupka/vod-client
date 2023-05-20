import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import Link from "next/link";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { CouponResponseDto } from "../../../../api/api-types";
import { ActivateCoupon } from "../../../../api/coupons";
import { useAccountContext } from "../../../../providers/AccountProvider";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IActivationSuccessProps {
  course: CouponResponseDto;
  onClose: () => void;
}

const ActivationSuccess = ({
  course,
  onClose,
}: IActivationSuccessProps): ReactElement => {
  return (
    <Box display='flex' flexDirection='column' gap={2} alignItems='center'>
      <Typography variant='h3' fontFamily='Playfair Display' textAlign='center'>
        Kod został aktywowany!
      </Typography>
      <Box>
        <Typography textAlign='center'>
          Kurs <span style={{ fontWeight: 700 }}>{course.course.name}</span>{" "}
          został dodany.
        </Typography>
        <Typography textAlign='center'>
          Przejdź do swojego konta by móc go obejrzeć.
        </Typography>
      </Box>
      <Link href='/konto/kursy' passHref>
        <Button component='a' variant='contained' onClick={onClose}>
          Moje konto
        </Button>
      </Link>
    </Box>
  );
};

const CouponModal = ({ open, onClose }: TProps): ReactElement => {
  const { user, watched, addCourse } = useAccountContext();

  const { register, handleSubmit } = useForm<{ code: string }>();

  const { isLoading, mutate, data, reset } = useMutation<
    CouponResponseDto,
    AxiosError<ApiError>,
    { code: string }
  >(async (form) => await ActivateCoupon(form.code), {
    onSuccess: (data) => {
      addCourse(data.course._id, data.availableUntil);
    },
  });

  const handleActivation: SubmitHandler<{ code: string }> = (form) =>
    mutate(form);

  const handleOnClose = () => {
    onClose();
    reset();
  };

  return (
    <BaseModal title='Aktywuj kupon' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && data && (
          <ActivationSuccess course={data} onClose={handleOnClose} />
        )}
        {!isLoading && !data && (
          <form onSubmit={handleSubmit(handleActivation)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Kod kuponu'
                  fullWidth
                  {...register("code", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Użyj kuponu
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default CouponModal;
