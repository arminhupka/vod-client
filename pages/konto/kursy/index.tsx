import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";
import { ReactElement } from "react";

import { GetUserCoursesDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../components/layouts/MainLayout";
import CourseWideCard from "../../../components/molecues/CourseWideCard/CourseWideCard";

interface INextPage {
  courses: GetUserCoursesDto[];
}

const MyAccountCourses: NextPage<INextPage> = ({ courses }): ReactElement => {
  return (
    <>
      <Head>
        <title>Moje Kursy | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <MainLayout>
        <AccountLayout>
          <SectionTitle title='Moje kursy' />
          <Box mt={2}>
            {courses.map((c) => (
              <CourseWideCard key={c.course?._id} course={c} />
            ))}
          </Box>
        </AccountLayout>
      </MainLayout>
    </>
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
    const { data } = await client.get<GetUserCoursesDto[]>("/user/courses", {
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
