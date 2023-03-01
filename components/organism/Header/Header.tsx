import { ReactElement } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import RegistrationModal from "../Modals/RegistrationModal/RegistrationModal";
import useModalState from "../../../hooks/useModalState";
import LoginModal from "../Modals/LoginModal/LoginModal";

const links = [
  {
    id: 1,
    href: "/",
    name: "Strona główna",
  },
  {
    id: 2,
    href: "/kursy",
    name: "Kursy",
  },
  {
    id: 3,
    href: "/warsztaty",
    name: "Warsztaty",
  },
];

interface IProps {
  relative?: boolean;
  withoutTopbar?: boolean;
}

const Header = ({ relative, withoutTopbar }: IProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useModalState();

  return (
    <>
      <RegistrationModal onClose={onClose} open={isOpen} />
      <LoginModal onClose={onCloseLoginModal} open={isOpenLoginModal} />
      <AppBar
        position={relative ? "relative" : "fixed"}
        elevation={relative ? 0 : 8}
        sx={{
          background: "#fff",
        }}>
        {!withoutTopbar && (
          <Box bgcolor='primary.main'>
            <Container
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "center",
              }}>
              <Typography fontWeight={600} fontSize={14}>
                Some info
              </Typography>
            </Container>
          </Box>
        )}
        <Toolbar>
          <Box>
            <Typography color='primary'>OW VOD</Typography>
          </Box>
          <Box ml='auto' display='flex' gap={2}>
            <Button onClick={onOpen} variant='contained'>
              Rejestracja
            </Button>
            <Button onClick={onOpenLoginModal}>Zaloguj</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
