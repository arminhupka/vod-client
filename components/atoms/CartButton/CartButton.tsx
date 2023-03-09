import { ShoppingBasket } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { ReactElement } from "react";

import { StyledButton } from "./CartButton.styles";

interface IProps {
  value: number;
  onClick?: () => void;
}

const CartButton = ({ value, onClick }: IProps): ReactElement => (
  <StyledButton onClick={onClick}>
    <Badge
      badgeContent={value || "0"}
      color='primary'
      sx={{
        ".MuiBadge-badge": {
          fontWeight: 700,
          fontSize: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}>
      <ShoppingBasket
        sx={{
          color: "#333",
        }}
      />
    </Badge>
  </StyledButton>
);

export default CartButton;
