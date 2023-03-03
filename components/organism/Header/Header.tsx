import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import useModalState from "../../../hooks/useModalState";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import CartButton from "../../atoms/CartButton/CartButton";
import LoginModal from "../Modals/LoginModal/LoginModal";
import RegistrationModal from "../Modals/RegistrationModal/RegistrationModal";

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
  const { total } = useCartContext();

  const { user, logout } = useAccountContext();

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
          <Box ml='auto' display='flex' alignItems='center' gap={2}>
            <Link href='/koszyk' passHref>
              <Box mr={1} display='flex' gap={2}>
                <CartButton value={total} />
              </Box>
            </Link>
            {!user && (
              <>
                <Button onClick={onOpen} variant='contained'>
                  Rejestracja
                </Button>
                <Button variant='outlined' onClick={onOpenLoginModal}>
                  Zaloguj
                </Button>
              </>
            )}
            {user && (
              <Link href='/konto' passHref>
                <Button component='div' variant='contained'>
                  Moje Konto
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
