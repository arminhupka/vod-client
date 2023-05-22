import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import FileDownload from "js-file-download";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";

import { GetOrderResponseDto } from "../../../../api/api-types";
import { client } from "../../../../api/client";
import { OrderStatusEnum } from "../../../../components/atoms/OrderStatus/OrderStatus";
import SectionTitle from "../../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../../components/layouts/MainLayout";

interface INextPage {
  order: GetOrderResponseDto;
}

const MyAccountOrderDetails: NextPage<INextPage> = ({ order }) => {
  const handleInvoiceDownload = async () =>
    client
      .get(`/orders/${order._id}/invoice`, {
        withCredentials: true,
        responseType: "blob",
      })
      .then(({ data }) => FileDownload(data, "faktura.pdf"));

  return (
    <>
      <Head>
        <title>Zamówienie {order.orderId} | Olga Wałek</title>
      </Head>
      <MainLayout>
        <AccountLayout>
          <SectionTitle title={`Zamówienie ${order.orderId}`} />
          <Grid mt={2} container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Paper elevation={8}>
                <Box p={2}>
                  <Typography>Kupujący</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={8}>
                <Box p={2}>
                  <Typography>Kupujący</Typography>
                  <Button
                    variant='contained'
                    startIcon={<AssignmentReturnedIcon />}
                    onClick={handleInvoiceDownload}
                    disabled={order.status !== OrderStatusEnum.COMPLETE}>
                    Pobierz fakture
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={8}>
                <Box p={2}>
                  <Typography>Lista</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </AccountLayout>
      </MainLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  try {
    const { data } = await client.get<GetOrderResponseDto>(
      `/user/orders/${id}`,
      {
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        order: data,
      },
    };
  } catch (err) {
    const error = err as AxiosError<ApiError>;

    if (error.response?.status === 401) {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }

    return {
      props: {
        error: error.response?.data.message || "Wystąpił nieznany błąd",
      },
    };
  }
};

export default MyAccountOrderDetails;
