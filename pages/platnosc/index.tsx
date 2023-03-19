import { NextPage } from "next";
import Head from "next/head";

import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import CreateOrderForm from "../../components/forms/CreateOrderForm/CreateOrderForm";
import MainLayout from "../../components/layouts/MainLayout";

const PaymentPage: NextPage = () => (
  <>
    <Head>
      <title>Płatność | {process.env.NEXT_PUBLIC_APP_NAME}</title>
    </Head>
    <MainLayout>
      <SectionTitle title='Płatność' />
      <CreateOrderForm />
    </MainLayout>
  </>
);

export default PaymentPage;
