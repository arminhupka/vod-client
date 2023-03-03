import { ReactElement } from "react";
import { NextPage, NextPageContext } from "next";
import MainLayout from "../../../components/layouts/MainLayout";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";

const MyAccountCourses: NextPage = (): ReactElement => {
  return (
    <MainLayout>
      <AccountLayout>
        <SectionTitle title='Moje kursy' />
      </AccountLayout>
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  return {
    props: {},
  };
};

export default MyAccountCourses;
