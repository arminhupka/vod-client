import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getCookie } from "cookies-next";
import fileDownload from "js-file-download";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useCallback } from "react";

import { OrderDto } from "../../../../api/api-types";
import { client } from "../../../../api/client";
import { getInvoice } from "../../../../api/orders";
import OrderStatus, {
  OrderStatusEnum,
} from "../../../../components/atoms/OrderStatus/OrderStatus";
import AdminLayout from "../../../../components/layouts/AdminLayout/AdminLayout";
import { formatPrice } from "../../../../utils/formatPrice";

interface INextPage {
  order: OrderDto;
}

const AdminOrderDetailsPage: NextPage<INextPage> = ({ order }) => {
  const handleInvoiceDownload = async (): Promise<void> => {
    try {
      const { data } = await getInvoice(order._id);
      fileDownload(data, `BPA_${order.orderId}.pdf`);
    } catch (err) {
      console.error(err);
    }
  };

  const generateDate = useCallback((invNumber: number, date: Date) => {
    const invDay = new Date(date).getDay().toString().padStart(2, "0");
    const invMonth = new Date(date).getMonth() + 1;
    const invYear = new Date(date).getFullYear();

    return `${invNumber}/${invMonth}/${invYear}`;
  }, []);

  return (
    <>
      <Head>
        <title>
          Zamówienie {order.orderId} | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      <AdminLayout>
        <>
          <h1>Szczegóły zamówienia {order.orderId}</h1>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box bgcolor='#FDFDFE' mb={2} p={2} border='1px solid #f3f4f6'>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography fontWeight={700}>Status</Typography>
                    <OrderStatus status={order.status as OrderStatusEnum} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontWeight={700}>Data zamówienia</Typography>
                    <Typography>
                      {new Date(order.createdAt).toLocaleDateString()}{" "}
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontWeight={700}>Data opłacenia</Typography>
                    <Typography>-</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box bgcolor='#FDFDFE' mb={2} p={2} border='1px solid #f3f4f6'>
                <Typography fontWeight={700}>Dane klienta</Typography>
                {!order.billing.vatNumber ? (
                  <>
                    <Typography>
                      {order.billing.firstName} {order.billing.lastName}
                    </Typography>
                    <Typography>{order.billing.street}</Typography>
                    <Typography>
                      {order.billing.city} {order.billing.postCode}
                    </Typography>
                    <Typography>{order.billing.country}</Typography>
                  </>
                ) : (
                  <>
                    <Typography>NIP: {order.billing.vatNumber}</Typography>
                    <Typography>{order.billing.companyName}</Typography>
                    <Typography>
                      {order.billing.companyCity}{" "}
                      {order.billing.companyPostCode}
                    </Typography>
                    <Typography>{order.billing.companyCountry}</Typography>
                    <Typography>{order.user.email}</Typography>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                bgcolor='#FDFDFE'
                mb={2}
                p={2}
                border='1px solid #f3f4f6'
                display='flex'
                flexDirection='column'
                gap={2}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={handleInvoiceDownload}>
                  Pobierz fakture
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={700}>Przedmioty zamówienia</Typography>
          <Box mt={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Kurs</TableCell>
                  <TableCell>Cena jednostkowa</TableCell>
                  <TableCell>Podatek</TableCell>
                  <TableCell>Razem</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.orderItems.map((item, idx) => (
                  <TableRow key={item.product._id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>{formatPrice(item.price, true)}</TableCell>
                    <TableCell>{formatPrice(item.price, true)}</TableCell>
                    <TableCell>
                      {formatPrice(item.price + item.tax, true)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </>
      </AdminLayout>
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

  const { data: order } = await client.get<OrderDto>(`/orders/${id}`, {
    headers: {
      Cookie: `token=${token};`,
    },
  });

  return {
    props: {
      order,
    },
  };
};

export default AdminOrderDetailsPage;
