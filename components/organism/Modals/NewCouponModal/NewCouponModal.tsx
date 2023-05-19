import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AxiosError } from "axios";
import { nanoid } from "nanoid";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { MutableRefObject, ReactElement, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

import {
  CouponResponseDto,
  CreateCouponDto,
  GetCoursesAdminItem,
} from "../../../../api/api-types";
import { CreateCoupon } from "../../../../api/coupons";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

interface IProps extends TProps {
  courses: GetCoursesAdminItem[];
}

const FormSchema = yup.object().shape({
  course: yup.string(),
  code: yup.string(),
  availableUntil: yup.date(),
  courseAvailableDays: yup.number(),
});

const NewCouponModal = ({ open, onClose, courses }: IProps): ReactElement => {
  const router = useRouter();
  const { register, handleSubmit, reset, setValue, setFocus, formState } =
    useForm<CreateCouponDto>({
      resolver: yupResolver(FormSchema),
    });

  const { mutate, isLoading, error } = useMutation<
    CouponResponseDto,
    AxiosError<ApiError>,
    CreateCouponDto
  >(async (form) => await CreateCoupon(form), {
    onSuccess: async () => {
      onClose();
      reset();
      await router.replace(router.asPath);
    },
  });

  const codeInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleCreateCoupon: SubmitHandler<CreateCouponDto> = (form) =>
    mutate(form);

  const handleGenerateCouponCode = (): void => {
    setFocus("code");
    const id = nanoid(16);
    setValue("code", id.toUpperCase(), {
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  return (
    <BaseModal title='Nowy kupon' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleCreateCoupon)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='course'>Kurs</InputLabel>
                  <Select
                    id='course'
                    fullWidth
                    label='Wybierz kurs'
                    {...register("course")}>
                    {courses.map((c) => (
                      <MenuItem key={c._id} value={c._id}>
                        {c.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label='Kod' {...register("code")} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Ilość dni'
                  type='number'
                  {...register("courseAvailableDays")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Wazny to'
                  type='date'
                  InputLabelProps={{ shrink: true }}
                  {...register("availableUntil")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='outlined'
                  fullWidth
                  onClick={handleGenerateCouponCode}>
                  Wygeneruj kod
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant='contained'
                  type='submit'
                  disabled={!formState.isValid}>
                  Stwórz kupon
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
        {error && (
          <Box mb={2}>
            {error.response?.status === 409 && (
              <Alert severity='error'>
                Kupon o podanym kodzie już istnieje
              </Alert>
            )}
          </Box>
        )}
      </>
    </BaseModal>
  );
};

export default NewCouponModal;
