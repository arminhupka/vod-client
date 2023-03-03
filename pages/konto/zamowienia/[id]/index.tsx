import { Grid } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";

import { GetOrderResponseDto } from "../../../../api/api-types";
import { client } from "../../../../api/client";
import SectionTitle from "../../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../../components/layouts/MainLayout";
import CourseCard from "../../../../components/molecues/CourseCard/CourseCard";

interface INextPage {
  order: GetOrderResponseDto;
}

const MyAccountOrderDetails: NextPage<INextPage> = ({ order }) => (
  <>
    <Head>
      <title>Zamówienie {order.orderId} | Olga Wałek</title>
    </Head>
    <MainLayout>
      <AccountLayout>
        <SectionTitle title={`Zamówienie ${order.orderId}`} />
        <Grid container spacing={5}>
          {order.orderItems.map((item) => (
            <Grid key={item.product._id} item>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </AccountLayout>
    </MainLayout>
  </>
);

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
