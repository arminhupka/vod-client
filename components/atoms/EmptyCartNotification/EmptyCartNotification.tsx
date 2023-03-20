import { ShoppingBasket } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import {
  StyledHeading,
  StyledIconWrapper,
  StyledTypo,
  StyledWrapper,
} from "./EmptyCartNotification.styles";

const EmptyCartNotification = (): ReactElement => (
  <StyledWrapper>
    <StyledIconWrapper>
      <ShoppingBasket
        sx={{
          fontSize: 150,
        }}
      />
    </StyledIconWrapper>
    <StyledHeading textAlign='center'>Twój koszyk jest pusty</StyledHeading>
    <StyledTypo textAlign='center'>
      Zanim przejdziesz do płatności musisz dodać jakiś kurs do koszyka.
    </StyledTypo>
    <Link href='/kursy' passHref>
      <Button component='a' variant='contained'>
        Znajdź kurs dla siebie
      </Button>
    </Link>
  </StyledWrapper>
);

export default EmptyCartNotification;
