import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";

import { CouponsListResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";

interface IProps {
  coupons: CouponsListResponseDto;
}

const AdminCouponsPage: NextPage<IProps> = ({ coupons }) => {
  return (
    <AdminLayout>
      <SectionTitle title='Kupony'>
        <Button variant='contained' size='small' startIcon={<Add />}>
          Nowy kupon
        </Button>
      </SectionTitle>
      <ul>
        {coupons.docs.map((c) => (
          <li key={c._id}>{c.code}</li>
        ))}
      </ul>
    </AdminLayout>
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
    const { data } = await client.get<CouponsListResponseDto>("/coupons", {
      params: {
        page,
        limit,
      },
      headers: {
        Cookie: `token=${token};`,
      },
    });

    return {
      props: {
        coupons: data,
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
