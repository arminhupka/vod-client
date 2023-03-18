import { Button, Grid, TextField } from "@mui/material";
import { ReactElement } from "react";

import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

const ResetPasswordModal = ({ open, onClose }: TProps): ReactElement => {
  return (
    <BaseModal title='Zresetuj hasło' onClose={onClose} open={open}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label='Adres E-Mail' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant='contained'>
            Zresetuj hasło
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default ResetPasswordModal;
