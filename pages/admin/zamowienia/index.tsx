import { Box, Button, Paper, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { GetAdminOrdersResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import Loading from "../../../components/atoms/Loading/Loading";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import AdminOrdersTable from "../../../components/organism/AdminOrdersTable/AdminOrdersTable";

interface INextPageProps {
  orders: GetAdminOrdersResponseDto;
}

const AdminOrdersPage: NextPage<INextPageProps> = ({ orders }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSearch, setEmailSearch] = useState<string>("");
  const [orderNumberSearch, setOrderNumberSearch] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: Dispatch<SetStateAction<string>>,
  ): void => {
    setState(e.target.value);
  };

  const submitSearch = (): void => {
    router.query.orderId = orderNumberSearch;
    router.query.email = emailSearch;

    setIsLoading(true);
    router.push(router).finally(() => setIsLoading(false));
  };

  return (
    <AdminLayout>
      <SectionTitle title='Zamówienia' />
      <Box mt={2}>
        <Paper>
          <Box p={2} display='flex' gap={2}>
            <TextField
              placeholder='Numer zamówienia'
              size='small'
              onChange={(e) => handleChange(e, setOrderNumberSearch)}
            />
            <TextField
              placeholder='Adres email'
              size='small'
              onChange={(e) => handleChange(e, setEmailSearch)}
            />
            <Button size='small' onClick={submitSearch} variant='outlined'>
              Szukaj
            </Button>
          </Box>
        </Paper>
      </Box>
      {isLoading && <Loading />}
      {!isLoading && (
        <AdminOrdersTable data={orders} setIsLoading={setIsLoading} />
      )}
    </AdminLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { page = 1, limit = 15, orderId = "", email = "" } = ctx.query;
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
          page: +page,
          limit: +limit,
          orderId,
          email,
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
