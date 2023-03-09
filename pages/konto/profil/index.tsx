import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ReactElement } from "react";

import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../components/layouts/MainLayout";

const MyAccountProfile: NextPage = (): ReactElement => (
  <MainLayout>
    <AccountLayout>
      <SectionTitle title='Profil' />
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

export default MyAccountProfile;
