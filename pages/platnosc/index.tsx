import { NextPage } from "next";

import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle";
import MainLayout from "../../components/layouts/MainLayout";

const PaymentPage: NextPage = () => (
  <MainLayout>
    <SectionTitle title='Płatność' />
  </MainLayout>
);

export default PaymentPage;
