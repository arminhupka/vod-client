import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import { Button, Grid, TextField } from "@mui/material";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const RegistrationModal = ({ open, onClose }: TProps) => (
  <BaseModal open={open} onClose={onClose} title='Rejestracja'>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField label='Imię' type='text' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Nazwisko' type='text' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Email' type='email' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Hasło' type='password' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Powtórz hasło' type='password' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant='contained'>
          Rejestracja
        </Button>
      </Grid>
    </Grid>
  </BaseModal>
);

export default RegistrationModal;
