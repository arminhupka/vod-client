import { Box, Button } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";

import { AdminGetCoursesResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import AdminCoursesTable from "../../../components/organism/AdminCoursesTable/AdminCoursesTable";
import NewCourseModal from "../../../components/organism/Modals/NewCourseModal/NewCourseModal";
import useModalState from "../../../hooks/useModalState";

interface INextPage {
  courses: AdminGetCoursesResponseDto;
}

const AdminCoursesPage: NextPage<INextPage> = ({ courses }) => {
  const { isOpen, onOpen, onClose } = useModalState();

  return (
    <>
      <NewCourseModal onClose={onClose} open={isOpen} />
      <AdminLayout>
        <SectionTitle title='Kursy' />
        <Box my={2} display='flex' justifyContent='flex-end'>
          <Button onClick={onOpen} variant='contained'>
            Dodaj kurs
          </Button>
        </Box>
        <AdminCoursesTable data={courses} />
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { page = 1, limit = 15 } = ctx.query;
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
    const { data } = await client.get<AdminGetCoursesResponseDto>(
      "/admin/courses",
      {
        params: {
          page,
          limit,
        },
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

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
export default AdminCoursesPage;
