import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";

import {
  CouponsListResponseDto,
  GetCoursesAdminItem,
} from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import AdminCouponsTable from "../../../components/molecues/AdminCouponsTable/AdminCouponsTable";
import NewCouponModal from "../../../components/organism/Modals/NewCouponModal/NewCouponModal";
import useModalState from "../../../hooks/useModalState";

interface IProps {
  coupons: CouponsListResponseDto;
  courses: GetCoursesAdminItem[];
}

const AdminCouponsPage: NextPage<IProps> = ({ coupons, courses }) => {
  const { onClose, isOpen, onOpen } = useModalState();

  return (
    <>
      <NewCouponModal courses={courses} onClose={onClose} open={isOpen} />
      <AdminLayout>
        <SectionTitle title='Kupony'>
          <Button
            variant='contained'
            size='small'
            startIcon={<Add />}
            onClick={onOpen}>
            Nowy kupon
          </Button>
        </SectionTitle>
        <AdminCouponsTable data={coupons} />
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
    const { data: coupons } = await client.get<CouponsListResponseDto>(
      "/coupons",
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

    const { data: courses } = await client.get<GetCoursesAdminItem[]>(
      "/admin/c",
      {
        params: {
          status: "PUBLISHED",
        },
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        coupons,
        courses,
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

export default AdminCouponsPage;
