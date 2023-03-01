import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";
import { Button, Grid, TextField } from "@mui/material";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const LoginModal = ({ open, onClose }: TProps) => (
  <BaseModal open={open} onClose={onClose} title='Logowanie'>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Email' type='email' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Hasło' type='password' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant='contained'>
          Zaloguj
        </Button>
      </Grid>
    </Grid>
  </BaseModal>
);

export default LoginModal;
