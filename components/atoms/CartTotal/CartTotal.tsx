import { Box, Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useMutation } from "react-query";

import {
  CourseListItem,
  GetMeResponsesDto,
  UpdateUserDto,
} from "../../../api/api-types";
import { payWithPayU } from "../../../api/payments";
import { updateUser } from "../../../api/user";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import { formatPrice } from "../../../utils/formatPrice";
import OverlayLoader from "../OverlayLoader/OverlayLoader";
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
  const router = useRouter();
  const { user } = useAccountContext();
  const { cart } = useCartContext();
  const updateUserForm = useFormContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isPaymentPage = router.pathname.startsWith("/platnosc");
  const isCheckoutPage = router.pathname.startsWith("/koszyk");

  const calculateTax = (total: number): number => {
    return Math.ceil(total * (100 / 123));
  };

  const getTotal = (): number => {
    if (cartItems.length) {
      return cartItems
        .map((i) => i.salePrice || i.price)
        .reduce((p, c) => (p += c));
    } else {
      return 0;
    }
  };

  const netPrice = calculateTax(getTotal());
  const tax = getTotal() - netPrice;

  const { mutateAsync } = useMutation<any, any, string[]>(
    async (variables) => payWithPayU(variables),
    {
      onSuccess: (data: string) => {
        router.push(data);
      },
    },
  );

  const { mutateAsync: mutateAsyncUserUpdate } = useMutation<
    GetMeResponsesDto,
    AxiosError<ApiError>,
    UpdateUserDto
  >(async (form) => await updateUser(form));

  const handlePayment = async () => {
    setIsLoading(true);
    if (updateUserForm.getValues()) {
      await mutateAsyncUserUpdate(updateUserForm.getValues());
    }
    await mutateAsync(cart.map((item) => item._id));
  };

  return (
    <>
      <OverlayLoader open={isLoading} />
      <StyledWrapper>
        <Box mb={4}>
          <Typography fontFamily='Playfair Display' variant='h5'>
            Podsumowanie koszyka
          </Typography>
        </Box>
        <StyledList>
          <StyledListItem>
            <StyledListKey>Suma częściowa</StyledListKey>
            <StyledListValue>{formatPrice(netPrice, true)}</StyledListValue>
          </StyledListItem>
          <StyledListItem>
            <StyledListKey>Podatek</StyledListKey>
            <StyledListValue>{formatPrice(tax, true)}</StyledListValue>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListItem>
            <StyledListKey large>Do zapłaty</StyledListKey>
            <StyledListValue large>
              {formatPrice(getTotal(), true)}
            </StyledListValue>
          </StyledListItem>
        </StyledList>
        {isCheckoutPage && (
          <Link href='/platnosc' passHref>
            <Button
              component='a'
              size='large'
              variant='contained'
              fullWidth
              disabled={!user}>
              {user ? "Przejdź do płatności" : "Zaloguj się aby kontynuować"}
            </Button>
          </Link>
        )}
        {isPaymentPage && (
          <Button
            variant='contained'
            size='large'
            fullWidth
            onClick={handlePayment}>
            Przejdź do płatności PayU
          </Button>
        )}
      </StyledWrapper>
    </>
  );
};

export default CartTotal;
