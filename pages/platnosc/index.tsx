import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import CreateOrderForm from "../../components/forms/CreateOrderForm/CreateOrderForm";
import MainLayout from "../../components/layouts/MainLayout";

const PaymentPage: NextPage = () => {
  const router = useRouter();
  const storageCart =
    typeof window !== "undefined" &&
    localStorage.getItem("cart") &&
    JSON.parse(localStorage.getItem("cart")!);

  useEffect(() => {
    if (!storageCart.length) {
      router.replace("/koszyk");
    }
  }, [storageCart, router]);

  return (
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
};

export default PaymentPage;
