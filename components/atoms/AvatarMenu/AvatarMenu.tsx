import { AccountCircle } from "@mui/icons-material";
import { Box, Button, IconButton, Menu } from "@mui/material";
import Link from "next/link";
import { MouseEvent, ReactElement, useState } from "react";

import { useAccountContext } from "../../../providers/AccountProvider";
import { StyledAvatar, StyledMenuItem } from "./AvatarMenu.styles";

interface IProps {
  onShowActivateCouponModal: () => void;
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
}

const AvatarMenu = ({
  onShowActivateCouponModal,
  onOpenRegisterModal,
  onOpenLoginModal,
}: IProps): ReactElement => {
  const { user } = useAccountContext();
  const [avatarRef, setAvatarRef] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAvatarRef(event.currentTarget);
  };

  const handleCloseMenu = () => setAvatarRef(null);

  const handleActivateCoupon = () => {
    onShowActivateCouponModal();
    handleCloseMenu();
  };

  const handleOpenLoginModal = () => {
    onOpenLoginModal();
    handleCloseMenu();
  };

  const handleOpenRegisterModal = () => {
    onOpenRegisterModal();
    handleCloseMenu();
  };

  const userShortName = `${user?.billing.firstName.at(
    0,
  )}${user?.billing.lastName.at(0)}`.toUpperCase();

  return (
    <Box>
      <IconButton sx={{ padding: 0 }} onClick={handleOpenMenu}>
        <StyledAvatar>{!user ? <AccountCircle /> : userShortName}</StyledAvatar>
      </IconButton>
      <Menu
        open={!!avatarRef}
        anchorEl={avatarRef}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleCloseMenu}>
        {!user && (
          <>
            <StyledMenuItem>
              <Button
                fullWidth
                variant='outlined'
                size='small'
                onClick={handleOpenLoginModal}>
                Zaloguj
              </Button>
            </StyledMenuItem>
            <StyledMenuItem>
              <Button
                fullWidth
                variant='contained'
                size='small'
                onClick={handleOpenRegisterModal}>
                Rejestracja
              </Button>
            </StyledMenuItem>
          </>
        )}
        {user && (
          <>
            <StyledMenuItem>
              <Link href='/konto/kursy' passHref>
                <Button component='a' fullWidth variant='outlined' size='small'>
                  Moje konto
                </Button>
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Button
                fullWidth
                variant='contained'
                size='small'
                onClick={handleActivateCoupon}>
                Aktywuj kupon
              </Button>
            </StyledMenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
