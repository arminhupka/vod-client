import { Box, Button, Paper, TextField } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { UsersListResponse } from "../../../api/api-types";
import { client } from "../../../api/client";
import Loading from "../../../components/atoms/Loading/Loading";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import UsersTable from "../../../components/organism/UsersTable/UsersTable";

interface INextPage {
  users: UsersListResponse;
}

const AdminUsersPage: NextPage<INextPage> = ({ users }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const submitSearch = (): void => {
    router.query.keyword = keyword;

    if (router.query.page) {
      delete router.query.page;
    }

    Object.keys(router.query).forEach(
      (k) => router.query[k] === "" && delete router.query[k],
    );

    setIsLoading(true);
    router.push(router).finally(() => setIsLoading(false));
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <>
      <Head>
        <title>Użytkownicy | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <AdminLayout>
        <SectionTitle title='Użytkownicy' />
        <Box mt={2}>
          <Paper>
            <Box p={2} display='flex' gap={2}>
              <TextField
                label='Szukaj po imieniu, nazwisku, nazwie firmy lub numerze NIP'
                size='small'
                fullWidth
                onChange={handleKeywordChange}
              />
              <Button size='small' onClick={submitSearch} variant='outlined'>
                Szukaj
              </Button>
            </Box>
          </Paper>
        </Box>
        {isLoading && <Loading />}
        {!isLoading && <UsersTable data={users} setIsLoading={setIsLoading} />}
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { page = 1, limit = 15, keyword } = ctx.query;
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  const { data: users } = await client.get<UsersListResponse>("/users", {
    params: {
      page,
      limit,
      keyword,
    },
    headers: {
      Cookie: `token=${token};`,
    },
  });

  return {
    props: {
      users,
    },
  };
};

export default AdminUsersPage;
