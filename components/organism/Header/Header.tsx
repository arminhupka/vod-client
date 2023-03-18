import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import useModalState from "../../../hooks/useModalState";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import CartButton from "../../atoms/CartButton/CartButton";
import Logo from "../../atoms/Logo/Logo";
import CouponModal from "../Modals/CouponModal/CouponModal";
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
  fullWidth?: boolean;
}

const Header = ({
  relative,
  withoutTopbar,
  fullWidth,
}: IProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useModalState();
  const {
    isOpen: isOpenCouponModal,
    onOpen: onOpenCouponModal,
    onClose: onCloseCouponModal,
  } = useModalState();
  const { total } = useCartContext();

  const { user } = useAccountContext();

  return (
    <>
      <RegistrationModal onClose={onClose} open={isOpen} />
      <LoginModal onClose={onCloseLoginModal} open={isOpenLoginModal} />
      <CouponModal onClose={onCloseCouponModal} open={isOpenCouponModal} />
      <AppBar
        position={relative ? "relative" : "fixed"}
        elevation={relative ? 0 : 8}
        sx={{
          background: "#fff",
        }}>
        {(!withoutTopbar || !!process.env.NEXT_PUBLIC_NOTIFICATION) && (
          <Box bgcolor='primary.main'>
            <Container
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "center",
              }}>
              <Typography fontWeight={600} fontSize={14}>
                {process.env.NEXT_PUBLIC_NOTIFICATION}
              </Typography>
            </Container>
          </Box>
        )}
        <Container maxWidth={!fullWidth ? "lg" : false}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Logo />
            <Box display='flex' gap={2}>
              {links.map((l) => (
                <Typography
                  variant='body2'
                  fontWeight={600}
                  textTransform='uppercase'
                  fontFamily='Playfair Display'
                  key={l.id}
                  sx={{
                    color: "#333",
                  }}>
                  {l.name}
                </Typography>
              ))}
            </Box>
            <Box display='flex' alignItems='center' gap={2}>
              <Link href='/koszyk' passHref>
                <Box component='a' mr={1} display='flex' gap={2}>
                  <CartButton value={total} />
                </Box>
              </Link>
              {!user && (
                <>
                  <Button onClick={onOpenLoginModal} size='small'>
                    Zaloguj
                  </Button>
                  <Button onClick={onOpen} variant='contained' size='small'>
                    Rejestracja
                  </Button>
                </>
              )}
              {user && (
                <>
                  <Link href='/konto' passHref>
                    <Button component='div' variant='outlined' size='small'>
                      Moje Konto
                    </Button>
                  </Link>
                  <Button
                    variant='contained'
                    onClick={onOpenCouponModal}
                    size='small'>
                    Aktywuj kupon
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
