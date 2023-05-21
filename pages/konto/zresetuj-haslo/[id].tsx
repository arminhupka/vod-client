import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import ResetPasswordForm from "../../../components/forms/ResetPasswordForm/ResetPasswordForm";
import MainLayout from "../../../components/layouts/MainLayout";

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Zresetuj hasło | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <MainLayout>
        <SectionTitle title='Zresetuj hasło' />
        <ResetPasswordForm token={id as string} />
      </MainLayout>
    </>
  );
};

export default ResetPasswordPage;
