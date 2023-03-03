import MainLayout from "../../../components/layouts/MainLayout";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import { NextPageContext } from "next";
import { getCookie } from "cookies-next";
import { client } from "../../../api/client";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";

const MyAccountOrders = () => {
  return (
    <MainLayout>
      <AccountLayout>
        <SectionTitle title='Moje zamówienia' />
      </AccountLayout>
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

  try {
    const { data } = await client.get("/user/orders", {
      headers: {
        Cookie: `token=${token};`,
      },
    });

    return {
      props: {
        courses: data,
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
