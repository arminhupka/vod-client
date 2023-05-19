import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, MutableRefObject, ReactElement, useRef } from "react";
import { useFormContext } from "react-hook-form";

import { AdminGetCourseTopicsItemResponseDto } from "../../../api/api-types";
import useModalState from "../../../hooks/useModalState";
import AdminTopicsList from "../../atoms/AdminTopicsList/AdminTopicsList";
import FeatureList from "../../FeatureList/FeatureList";
import NewTopicModal from "../../organism/Modals/NewTopicModal/NewTopicModal";

interface IProps {
  cover: string | null;
  topics: AdminGetCourseTopicsItemResponseDto[];
  handleFileSelectAndUpload: (
    e: ChangeEvent<HTMLInputElement>,
  ) => Promise<void>;
}

export const UpdateCourseForm = ({
  cover,
  handleFileSelectAndUpload,
  topics,
}: IProps): ReactElement => {
  const { register, setValue, watch } = useFormContext();
  const {
    isOpen: isOpenNewTopicModal,
    onOpen: onOpenNewTopicModal,
    onClose: onCloseNewTopicModal,
  } = useModalState();

  const fileInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const watchLearn = watch("whatYouLearn");
  const watchCourseIncludes = watch("courseIncludes");

  const handleImageUpload = async () => {
    if (!fileInputRef) return;
    fileInputRef.current.click();
  };

  return (
    <>
      <NewTopicModal
        onClose={onCloseNewTopicModal}
        open={isOpenNewTopicModal}
      />
      <Box>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper elevation={12}>
                    <Box
                      p={2}
                      height='auto'
                      display='flex'
                      flexDirection='column'
                      gap={2}>
                      <Typography fontFamily='Playfair Display' variant='h5'>
                        Okładka kursu
                      </Typography>
                      {cover && (
                        <Box
                          position='relative'
                          overflow='hidden'
                          borderRadius={1}
                          sx={{ aspectRatio: "16/9" }}>
                          <Image
                            src={cover}
                            alt='image'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                          />
                        </Box>
                      )}
                      {!cover && <h1>No image</h1>}
                      <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileSelectAndUpload}
                        hidden
                      />
                      <Button variant='contained' onClick={handleImageUpload}>
                        Wyślij obrazek
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={12}>
                    <Box p={2}>
                      <Box
                        mb={2}
                        display='flex'
                        alignItems='center'
                        justifyContent='space-between'>
                        <Typography fontFamily='Playfair Display' variant='h5'>
                          Tematy i lekcje
                        </Typography>
                        <Button
                          variant='contained'
                          size='small'
                          onClick={onOpenNewTopicModal}>
                          Dodaj temat
                        </Button>
                      </Box>
                      <Box>
                        <AdminTopicsList data={topics} />
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container spacing={3} xs={8}>
              <Grid item xs={12}>
                <TextField fullWidth label='Nazwa' {...register("name")} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Krótki opis'
                  {...register("shortDescription")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label='Opis'
                  {...register("description")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label='Dni dostępu' />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label='Cena'
                  {...register("price", {
                    setValueAs: (v: string) => {
                      return v ? +v.replace(",", ".") * 100 : undefined;
                    },
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label='Cena promocyjna'
                  {...register("salePrice", {
                    setValueAs: (v: string) => {
                      return v ? +v.replace(",", ".") * 100 : undefined;
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Link do prezentacji'
                  helperText='Film musi być filmem publicznym na YouTube'
                  {...register("youtubePreview")}
                />
              </Grid>
              <Grid item xs={6}>
                <FeatureList
                  title='Czego się nauczysz'
                  register='whatYouLearn'
                  setValue={setValue}
                  values={watchLearn}
                />
              </Grid>
              <Grid item xs={6}>
                <FeatureList
                  title='Kurs zawiera'
                  register='courseIncludes'
                  setValue={setValue}
                  values={watchCourseIncludes}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default UpdateCourseForm;
