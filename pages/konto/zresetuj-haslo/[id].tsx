import { NextPage } from "next";
import { useRouter } from "next/router";

import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import ResetPasswordForm from "../../../components/forms/ResetPasswordForm/ResetPasswordForm";
import MainLayout from "../../../components/layouts/MainLayout";

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <SectionTitle title='Zresetuj hasło' />
      <ResetPasswordForm token={id as string} />
    </MainLayout>
  );
};

export default ResetPasswordPage;
