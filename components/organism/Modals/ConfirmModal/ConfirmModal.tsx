import { Button, Grid } from "@mui/material";
import { ReactElement } from "react";

import BaseModal, { IBaseModalProps } from "../../../atoms/BaseModal/BaseModal";

interface IProps extends Omit<IBaseModalProps, "children"> {
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
}

const ConfirmModal = ({
  title,
  onClose,
  open,
  onConfirm,
  onCancel,
}: IProps): ReactElement => {
  const handleCancel = (): void => {
    if (onCancel) {
      onCancel();
    }

    onClose();
  };

  const handleConfirm = (): void => {
    if (onConfirm) {
      onConfirm();
    }

    onClose();
  };

  return (
    <BaseModal title={title} onClose={onClose} open={open}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button variant='contained' fullWidth onClick={handleConfirm}>
            Ok
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant='outlined'
            color='error'
            onClick={handleCancel}
            fullWidth>
            Anuluj
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default ConfirmModal;
