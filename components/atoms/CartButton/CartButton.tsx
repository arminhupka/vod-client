import { ReactElement } from "react";
import { Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { StyledButton } from "./CartButton.styles";

interface IProps {
  value: number;
  onClick?: () => void;
}

const CartButton = ({ value, onClick }: IProps): ReactElement => (
  <StyledButton onClick={onClick}>
    <Badge
      badgeContent={value}
      color='primary'
      sx={{ ".MuiBadge-badge": { fontWeight: 700 } }}>
      <ShoppingBasket color='action' />
    </Badge>
  </StyledButton>
);

export default CartButton;
