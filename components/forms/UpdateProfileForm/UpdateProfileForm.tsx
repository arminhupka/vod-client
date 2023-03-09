import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface IForm {}

const UpdateProfileForm = (): ReactElement => {
  const { register } = useForm<IForm>();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label='E-mail' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Hasło' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Powtórz hasło' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Imię' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Nazwisko' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Ulica' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Kod pocztowy' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Miasto' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Kraj' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Nazwa firmy' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label='NIP' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant='contained'>
            Zaktualizuj profil
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpdateProfileForm;
