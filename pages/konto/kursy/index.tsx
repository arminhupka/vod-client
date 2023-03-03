import { ReactElement } from "react";
import { NextPage, NextPageContext } from "next";
import MainLayout from "../../../components/layouts/MainLayout";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import { getCookie } from "cookies-next";
import { AxiosError } from "axios";
import { client } from "../../../api/client";
import { ApiError } from "next/dist/server/api-utils";

interface INextPage {
  courses: any;
}

const MyAccountCourses: NextPage<INextPage> = ({ courses }): ReactElement => {
  return (
    <MainLayout>
      <AccountLayout>
        <SectionTitle title='Moje kursy' />
      </AccountLayout>
    </MainLayout>
  );
};

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

  try {
    const { data } = await client.get("/user/courses", {
      headers: {
        Cookie: `token=${token};`,
      },
    });

    return {
      props: {
        courses: data,
      },
    };
  } catch (err) {
    const error = err as AxiosError<ApiError>;

    if (error.response?.status === 401) {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }

    return {
      props: {
        error: error.response?.data.message || "Wystąpił nieznany błąd",
      },
    };
  }
};

export default MyAccountCourses;
