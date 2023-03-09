import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";

import { GetOrdersResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../components/layouts/MainLayout";
import OrdersTable from "../../../components/organism/OrdersTable/OrdersTable";

interface INextPage {
  orders: GetOrdersResponseDto;
}

const MyAccountOrders: NextPage<INextPage> = ({ orders }) => {
  return (
    <>
      <Head>
        <title>Zamówienia | Olga Wałek</title>
      </Head>
      <MainLayout>
        <AccountLayout>
          <SectionTitle title='Moje zamówienia' />
          <Box mt={2}>
            <OrdersTable data={orders} />
          </Box>
        </AccountLayout>
      </MainLayout>
    </>
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

  try {
    const { data } = await client.get<GetOrdersResponseDto>("/user/orders", {
      headers: {
        Cookie: `token=${token};`,
      },
    });

    return {
      props: {
        orders: data,
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

export default MyAccountOrders;
