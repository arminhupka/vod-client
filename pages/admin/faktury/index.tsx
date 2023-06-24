import { Box, Button, Paper, TextField } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { FindAllInvoicesResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import Loading from "../../../components/atoms/Loading/Loading";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import InvoicesTable from "../../../components/organism/InvoicesTable/InvoicesTable";

interface INextPage {
  invoices: FindAllInvoicesResponseDto;
}

const AdminInvoicesPage: NextPage<INextPage> = ({ invoices }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const submitSearch = (): void => {
    router.query.keyword = keyword;
    router.query.startDate = startDate;
    router.query.endDate = endDate;

    if (router.query.page) {
      delete router.query.page;
    }

    Object.keys(router.query).forEach(
      (k) => router.query[k] === "" && delete router.query[k],
    );

    setIsLoading(true);
    router.push(router).finally(() => setIsLoading(false));
  };

  return (
    <>
      <Head>
        <title>Faktury | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <AdminLayout>
        <SectionTitle title='Faktury' />
        <Box mt={2}>
          <Paper>
            <Box p={2} display='flex' gap={2}>
              <TextField
                label='Szukaj po numerze zamówienia'
                size='small'
                onChange={(e) => setKeyword(e.target.value)}
              />
              <TextField
                label='Data OD'
                placeholder=''
                size='small'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { max: endDate } }}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <TextField
                label='Data DO'
                size='small'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { min: startDate } }}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Button size='small' variant='outlined' onClick={submitSearch}>
                Szukaj
              </Button>
            </Box>
          </Paper>
        </Box>
        {isLoading && <Loading />}
        {!isLoading && <InvoicesTable data={invoices} />}
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { page = 1, limit = 15, keyword, startDate, endDate } = ctx.query;
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  const { data: invoices } = await client.get<FindAllInvoicesResponseDto>(
    "/invoices",
    {
      params: {
        page,
        limit,
        keyword,
        startDate,
        endDate,
      },
      headers: {
        Cookie: `token=${token};`,
      },
    },
  );

  return {
    props: {
      invoices,
    },
  };
};

export default AdminInvoicesPage;
