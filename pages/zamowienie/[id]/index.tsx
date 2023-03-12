import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";

import { GetOrderResponseDto } from "../../../api/api-types";
import { getOrder } from "../../../api/orders";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../../components/layouts/MainLayout";
import UserOrder from "../../../components/organism/UserOrder/UserOrder";

const OrderDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data, isSuccess, refetch } = useQuery<GetOrderResponseDto>(
    "get order",
    async () => await getOrder(id as string),
    {
      refetchInterval: 5000,
    },
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);

  return (
    <MainLayout>
      <SectionTitle title='Status zamówienia' />
      <UserOrder isLoading={isLoading} />
      {isSuccess && <p>STATUS: {data.status}</p>}
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
