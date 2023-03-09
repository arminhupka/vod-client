import { NextPage } from "next";
import Head from "next/head";

import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../components/layouts/MainLayout";

const PaymentPage: NextPage = () => (
  <>
    <Head>
      <title>Płatność | {process.env.NEXT_PUBLIC_APP_NAME}</title>
    </Head>
    <MainLayout>
      <SectionTitle title='Płatność' />
    </MainLayout>
  </>
);

export default PaymentPage;
