import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";
import { formatPrice } from "../../../utils/formatPrice";
import {
  StyledList,
  StyledListItem,
  StyledListKey,
  StyledListValue,
  StyledWrapper,
} from "./CartTotal.styles";

interface IProps {
  cartItems: CourseListItem[];
}

const CartTotal = ({ cartItems }: IProps): ReactElement => {
  const calculateTax = (total: number): number => {
    return Math.ceil(total * (23 / 100));
  };

  const getTax = (): number =>
    calculateTax(
      cartItems.map((i) => i.salePrice || i.price).reduce((p, c) => (p += c)),
    );

  const getTotal = (): number =>
    cartItems.map((i) => i.salePrice || i.price).reduce((p, c) => (p += c));

  return (
    <StyledWrapper>
      <Box mb={4}>
        <Typography fontFamily='Playfair Display' variant='h5'>
          Podsumowanie koszyka
        </Typography>
      </Box>
      <StyledList>
        <StyledListItem>
          <StyledListKey>Suma częściowa</StyledListKey>
          <StyledListValue>
            {formatPrice(getTotal() - getTax())}
          </StyledListValue>
        </StyledListItem>
        <StyledListItem>
          <StyledListKey>Podatek</StyledListKey>
          <StyledListValue>{formatPrice(getTax())}</StyledListValue>
        </StyledListItem>
      </StyledList>
      <StyledList>
        <StyledListItem>
          <StyledListKey large>Do zapłaty</StyledListKey>
          <StyledListValue large>{formatPrice(getTotal())}</StyledListValue>
        </StyledListItem>
      </StyledList>
      <Link href='/platnosc' passHref>
        <Button component='a' size='large' variant='contained' fullWidth>
          Przejdź do płatności
        </Button>
      </Link>
    </StyledWrapper>
  );
};

export default CartTotal;
