import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { GetOrderResponseDto } from "../../../api/api-types";
import { getOrder } from "../../../api/orders";
import Loading from "../../../components/atoms/Loading/Loading";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../../components/layouts/MainLayout";

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

  return (
    <MainLayout>
      <SectionTitle title='Status zamówienia' />
      {isLoading && <Loading />}
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
