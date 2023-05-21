import { Alert, Box } from "@mui/material";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { OkResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../../components/layouts/MainLayout";

interface INextPageProps {
  activated: boolean;
}

const ActivationPage: NextPage<INextPageProps> = ({ activated }) => {
  return (
    <>
      <Head>
        <title>Aktywacja Konta | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <MainLayout>
        <SectionTitle title='Aktywacja konta' />
        <Box mt={2}>
          {activated && (
            <Alert severity='success'>
              Twoje konto zostało aktywowane! Możesz się zalogować.
            </Alert>
          )}
          {!activated && (
            <Alert severity='error'>
              Wyglada na to że ten link już wygasł.
            </Alert>
          )}
        </Box>
      </MainLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { token } = ctx.query;

  let isActivated = false;

  try {
    const { data } = await client.get<OkResponseDto>(
      `/users/activate/${token}`,
    );
    isActivated = true;
  } catch (e) {
    console.error(e);
    isActivated = false;
  }

  return {
    props: {
      activated: isActivated,
    },
  };
};

export default ActivationPage;
