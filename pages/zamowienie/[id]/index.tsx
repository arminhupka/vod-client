import { Check, PriorityHigh } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { useQuery } from "react-query";

import { GetOrderResponseDto } from "../../../api/api-types";
import { getOrder } from "../../../api/orders";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../../components/layouts/MainLayout";
import UserOrder from "../../../components/organism/UserOrder/UserOrder";

const SuccessMessage = (): ReactElement => (
  <Box mt={2} display='flex' flexDirection='column' alignItems='center' gap={3}>
    <Box display='flex' justifyContent='center'>
      <Check color='primary' sx={{ fontSize: 92 }} />
    </Box>
    <Typography textAlign='center' variant='h4' fontFamily='Playfair Display'>
      Twoje zamówienie zostało opłacone
    </Typography>
    <Typography textAlign='center'>
      Możesz przejść do swojego konta i zacząć naukę z nowym kursem.
    </Typography>
    <Link href='/konto/kursy' passHref>
      <Button component='a' variant='contained'>
        Moje kursy
      </Button>
    </Link>
  </Box>
);

const ErrorMessage = (): ReactElement => (
  <Box mt={2} display='flex' flexDirection='column' alignItems='center' gap={3}>
    <Box display='flex' justifyContent='center'>
      <PriorityHigh color='primary' sx={{ fontSize: 92 }} />
    </Box>
    <Typography textAlign='center' variant='h4' fontFamily='Playfair Display'>
      Twoje zamówienie zostało anulowane
    </Typography>
    <Typography textAlign='center'>
      Niestety ale Twoja płatność nie została zrealizowana.
    </Typography>
  </Box>
);

const OrderDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const orderError = router.query["error"];

  const { isLoading, data, isSuccess } = useQuery<GetOrderResponseDto>(
    "get order",
    async () => await getOrder(id as string),
    {
      refetchInterval: 3000,
    },
  );

  const orderIsLoading = isLoading || data?.status === "IN_PROGRESS";

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);

  return (
    <MainLayout>
      <SectionTitle title='Status zamówienia' />
      <UserOrder isLoading={orderIsLoading} />
      {isSuccess && !orderIsLoading && !orderError && <SuccessMessage />}
      {orderError && !orderIsLoading && <ErrorMessage />}
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};

export default OrderDetailsPage;
