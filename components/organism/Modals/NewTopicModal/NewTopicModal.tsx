import { Button, Grid, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { NewTopicDto, TopicResponseDto } from "../../../../api/api-types";
import { CreateNewTopic } from "../../../../api/topics";
import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import Loading from "../../../atoms/Loading/Loading";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

const NewTopicModal = ({ open, onClose }: TProps): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit } = useForm<NewTopicDto>();

  const { mutate, isLoading } = useMutation<
    TopicResponseDto,
    AxiosError<ApiError>,
    NewTopicDto
  >(async (form) => await CreateNewTopic(form));

  const handleCreateTopic: SubmitHandler<NewTopicDto> = (form) => {
    form.course = id! as string;
    form.order = 0;
    mutate(form);
  };

  return (
    <BaseModal title='Nowy temat' onClose={onClose} open={open}>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <form onSubmit={handleSubmit(handleCreateTopic)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label='Tytuł' fullWidth {...register("title")} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  label='Opis'
                  {...register("summary")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Stwórz temat
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </>
    </BaseModal>
  );
};

export default NewTopicModal;
