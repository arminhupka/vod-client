import { Box, Button, Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { payWithPayU } from "../../api/payments";
import CartTotal from "../../components/atoms/CartTotal/CartTotal";
import EmptyCartNotification from "../../components/atoms/EmptyCartNotification/EmptyCartNotification";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../components/layouts/MainLayout";
import CartList from "../../components/molecues/CartList/CartList";
import { useCartContext } from "../../providers/CartProvider";

const CartPage: NextPage = () => {
  const router = useRouter();
  const { cart } = useCartContext();

  const { mutate } = useMutation<any, any, string[]>(
    async (variables) => payWithPayU(variables),
    {
      onSuccess: (data: string) => {
        router.push(data);
      },
    },
  );

  const handlePayment = () => mutate(cart.map((item) => item._id));

  return (
    <>
      <Head>
        <title>Koszyk | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <MainLayout>
        <SectionTitle title='Koszyk' />
        {!cart.length && (
          <Box mt={5}>
            <EmptyCartNotification />
          </Box>
        )}
        {!!cart.length && (
          <Box mt={2}>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={8}>
                <CartList courses={cart} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <CartTotal cartItems={cart} />
                <Button onClick={handlePayment}>Zaplac</Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </MainLayout>
    </>
  );
};

export default CartPage;
