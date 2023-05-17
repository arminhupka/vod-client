import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import useModalState from "../../../hooks/useModalState";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import AvatarMenu from "../../atoms/AvatarMenu/AvatarMenu";
import CartButton from "../../atoms/CartButton/CartButton";
import Logo from "../../atoms/Logo/Logo";
import MainDrawer from "../../molecues/MainDrawer/MainDrawer";
import CouponModal from "../Modals/CouponModal/CouponModal";
import LoginModal from "../Modals/LoginModal/LoginModal";
import RegistrationModal from "../Modals/RegistrationModal/RegistrationModal";
import ResetPasswordModal from "../Modals/ResetPasswordModal/ResetPasswordModal";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.not("lg"));

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

  const {
    isOpen: isOpenResetPasswordModal,
    onOpen: onOpenResetPasswordModal,
    onClose: onCloseResetPasswordModal,
  } = useModalState();

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useModalState();

  const { total } = useCartContext();

  const { user } = useAccountContext();

  const handleOpenResetPasswordModal = () => {
    onCloseLoginModal();
    onOpenResetPasswordModal();
  };

  return (
    <>
      <MainDrawer open={isOpenDrawer} onClose={onCloseDrawer} />
      <RegistrationModal onClose={onClose} open={isOpen} />
      <LoginModal
        onClose={onCloseLoginModal}
        open={isOpenLoginModal}
        onResetPasswordClick={handleOpenResetPasswordModal}
      />
      <CouponModal onClose={onCloseCouponModal} open={isOpenCouponModal} />
      <ResetPasswordModal
        onClose={onCloseResetPasswordModal}
        open={isOpenResetPasswordModal}
      />
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
            {!isMobile && (
              <Box display='flex' gap={2}>
                {links.map((l) => (
                  <Typography
                    fontWeight={600}
                    textTransform='uppercase'
                    fontFamily='Maven Pro'
                    key={l.id}
                    sx={{
                      color: "#333",
                    }}>
                    {l.name}
                  </Typography>
                ))}
              </Box>
            )}

            <Box display='flex' alignItems='center' gap={2}>
              <Link href='/koszyk' passHref>
                <Box component='a' mr={1} display='flex' gap={2}>
                  <CartButton value={total} />
                </Box>
              </Link>
              {!isMobile && !user && (
                <>
                  <Button onClick={onOpenLoginModal} size='small'>
                    Zaloguj
                  </Button>
                  <Button onClick={onOpen} variant='contained' size='small'>
                    Rejestracja
                  </Button>
                </>
              )}
              {!isMobile && user && (
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
              {isMobile && (
                <AvatarMenu
                  onShowActivateCouponModal={onOpenCouponModal}
                  onOpenLoginModal={onOpenLoginModal}
                  onOpenRegisterModal={onOpen}
                />
              )}
              {isMobile && (
                <IconButton onClick={onOpenDrawer}>
                  <Menu />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
