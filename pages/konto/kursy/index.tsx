import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { ReactElement } from "react";

import { GetUserCourseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../components/layouts/MainLayout";
import CoursesTable from "../../../components/organism/CoursesTable/CoursesTable";

interface INextPage {
  courses: GetUserCourseDto[];
}

const MyAccountCourses: NextPage<INextPage> = ({ courses }): ReactElement => {
  return (
    <MainLayout>
      <AccountLayout>
        <SectionTitle title='Moje kursy' />
        <Box mt={2}>
          <CoursesTable courses={courses} />
        </Box>
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
    const { data } = await client.get<GetUserCourseDto[]>("/user/courses", {
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
