import { Button, Grid, TextField } from "@mui/material";
import { ReactElement } from "react";

import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";

type TProps = Pick<IBaseModalProps, "onClose" | "open">;

const CouponModal = ({ open, onClose }: TProps): ReactElement => (
  <BaseModal title='Aktywuj kupon' onClose={onClose} open={open}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Kod kuponu' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' fullWidth>
          Użyj kuponu
        </Button>
      </Grid>
    </Grid>
  </BaseModal>
);

export default CouponModal;
