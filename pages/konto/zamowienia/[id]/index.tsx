import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import FileDownload from "js-file-download";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";

import { GetOrderResponseDto } from "../../../../api/api-types";
import { client } from "../../../../api/client";
import OrderStatus, {
  OrderStatusEnum,
} from "../../../../components/atoms/OrderStatus/OrderStatus";
import SectionTitle from "../../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../../components/layouts/MainLayout";
import { formatPrice } from "../../../../utils/formatPrice";

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
      .then(({ data }) => FileDownload(data, "FAKTURA.pdf"));

  const isCompany = !!order.billing.vatNumber;

  return (
    <>
      <Head>
        <title>Zamówienie {order.orderId} | Olga Wałek</title>
      </Head>
      <MainLayout>
        <AccountLayout>
          <SectionTitle title={`Zamówienie ${order.orderId}`} />
          <Grid mt={2} container spacing={2}>
            <Grid item xs={12}>
              <Box
                display='flex'
                justifyContent='flex-end'
                alignItems='center'
                gap={2}>
                <OrderStatus status={order.status as OrderStatusEnum} />
                <Button
                  variant='contained'
                  startIcon={<AssignmentReturnedIcon />}
                  onClick={handleInvoiceDownload}
                  disabled={order.status !== OrderStatusEnum.COMPLETE}
                  size='small'>
                  Pobierz fakture
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper elevation={8}>
                <Box p={2}>
                  {!isCompany && (
                    <>
                      <Typography>
                        {order.billing.firstName} {order.billing.lastName}
                      </Typography>
                      <Typography>{order.billing.street}</Typography>
                      <Typography>
                        {order.billing.postCode}, {order.billing.city}
                      </Typography>
                      <Typography>{order.billing.country}</Typography>
                    </>
                  )}
                  {isCompany && (
                    <>
                      <Typography>{order.billing.companyName}</Typography>
                      <Typography>{order.billing.companyStreet}</Typography>
                      <Typography>
                        {order.billing.companyPostCode},{" "}
                        {order.billing.companyPostCity}
                      </Typography>
                    </>
                  )}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Paper elevation={8}>
                <Box p={2}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Kurs</TableCell>
                          <TableCell>Cena</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.orderItems.map((oi) => (
                          <TableRow key={oi.product._id}>
                            <TableCell>{oi.product.name}</TableCell>
                            <TableCell>{formatPrice(oi.price, true)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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
