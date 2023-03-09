import { Box } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";

import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../components/layouts/MainLayout";

const MyAccountPage: NextPage = () => (
  <MainLayout>
    <AccountLayout>
      <SectionTitle title='Pulpit' />
      <Box mt={2}>
        <p>tu cos powinno kiedys byc</p>
      </Box>
    </AccountLayout>
  </MainLayout>
);

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

export default MyAccountPage;
