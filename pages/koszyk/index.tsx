import { Button } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { payWithPayU } from "../../api/payments";
import CartList from "../../components/atoms/CartList/CartList";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../components/layouts/MainLayout";
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
    <MainLayout>
      <SectionTitle title='Koszyk' />
      <CartList items={cart} />
      <Button variant='contained' fullWidth onClick={handlePayment}>
        Zapłać przez PayU
      </Button>
    </MainLayout>
  );
};

export default CartPage;
