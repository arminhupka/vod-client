import { Close } from "@mui/icons-material";
import { IconButton, Modal, ModalProps, Typography } from "@mui/material";
import { ReactElement } from "react";

import {
  StyledBodyWrapper,
  StyledHeaderWrapper,
  StyledMainWrapper,
  StyledModalWrapper,
} from "./BaseModal.styles";

export interface IBaseModalProps extends ModalProps {
  title: string;
  onClose: () => void;
}

const BaseModal = ({
  children,
  open,
  onClose,
  title,
}: IBaseModalProps): ReactElement => (
  <Modal open={open} onClose={onClose}>
    <StyledMainWrapper>
      <StyledModalWrapper>
        <StyledHeaderWrapper>
          <Typography
            fontSize={24}
            fontWeight={500}
            fontFamily='Playfair Display'>
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </StyledHeaderWrapper>
        <StyledBodyWrapper>{children}</StyledBodyWrapper>
      </StyledModalWrapper>
    </StyledMainWrapper>
  </Modal>
);

export default BaseModal;
