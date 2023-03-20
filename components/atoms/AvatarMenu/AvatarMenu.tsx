import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { MouseEvent, ReactElement, useState } from "react";

import { StyledAvatar } from "./AvatarMenu.styles";

interface IProps {
  onShowActivateCouponModal: () => void;
}

const AvatarMenu = ({ onShowActivateCouponModal }: IProps): ReactElement => {
  const [avatarRef, setAvatarRef] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAvatarRef(event.currentTarget);
  };

  const handleCloseMenu = () => setAvatarRef(null);

  const handleActivateCoupon = () => {
    onShowActivateCouponModal();
    handleCloseMenu();
  };

  return (
    <Box>
      <IconButton sx={{ padding: 0 }} onClick={handleOpenMenu}>
        <StyledAvatar>AH</StyledAvatar>
      </IconButton>
      <Menu
        open={!!avatarRef}
        anchorEl={avatarRef}
        keepMounted
        onClose={handleCloseMenu}>
        <MenuItem>
          <Link href='/konto/kursy' passHref>
            <Button component='a' fullWidth variant='outlined' size='small'>
              Moje konto
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Button
            fullWidth
            variant='contained'
            size='small'
            onClick={handleActivateCoupon}>
            Aktywuj kupon
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
