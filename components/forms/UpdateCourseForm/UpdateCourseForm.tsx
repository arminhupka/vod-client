import { Box, Grid, TextField } from "@mui/material";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

export const UpdateCourseForm = (): ReactElement => {
  const {
    register,
    formState: { touchedFields },
  } = useFormContext();

  return (
    <Box>
      <form>
        <Grid container spacing={3}>
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
            <TextField fullWidth label='Opis' {...register("description")} />
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
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateCourseForm;
