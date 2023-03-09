import { Close } from "@mui/icons-material";
import { TableCell, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { useCartContext } from "../../../providers/CartProvider";
import { StyledIconButton, StyledTableRow } from "./CartItem.styles";

interface IProps {
  id: string;
  name: string;
  price: string;
  days: number;
  courseSlug: string;
}

const CartItem = ({
  id,
  name,
  days,
  price,
  courseSlug,
}: IProps): ReactElement => {
  const { removeFromCart } = useCartContext();

  return (
    <StyledTableRow>
      <TableCell width={20}>
        <StyledIconButton onClick={() => removeFromCart(id)}>
          <Close
            sx={{
              fontSize: 12,
            }}
          />
        </StyledIconButton>
      </TableCell>
      <TableCell>
        <Link href={`/kursy/${courseSlug}`} passHref>
          <a>
            <Typography fontWeight={600} color='primary'>
              {name}
            </Typography>
          </a>
        </Link>
      </TableCell>
      <TableCell>
        <Typography fontWeight={500}>
          {days} {days === 1 ? "dzień" : "dni"}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography fontWeight={500}>{price}</Typography>
      </TableCell>
    </StyledTableRow>
  );
};

export default CartItem;
