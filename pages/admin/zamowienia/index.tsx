import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";

import { GetAdminOrdersResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import AdminOrdersTable from "../../../components/organism/AdminOrdersTable/AdminOrdersTable";

interface INextPageProps {
  orders: GetAdminOrdersResponseDto;
}

const AdminOrdersPage: NextPage<INextPageProps> = ({ orders }) => {
  return (
    <AdminLayout>
      <SectionTitle title='Zamówienia' />
      <AdminOrdersTable data={orders} />
    </AdminLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { page = 1, limit = 15 } = ctx.query;
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
    const { data: orders } = await client.get<GetAdminOrdersResponseDto>(
      "/orders",
      {
        params: {
          page,
          limit,
        },
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        orders,
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

export default AdminOrdersPage;
