import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";

import AccountLayout from "../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../components/layouts/MainLayout";

const MyAccountPage: NextPage = () => (
  <MainLayout>
    <AccountLayout>
      <p>tu cos powinno kiedys byc</p>
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
