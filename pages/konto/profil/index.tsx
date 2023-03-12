import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { ReactElement } from "react";

import { GetMeResponsesDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import UpdateProfileForm from "../../../components/forms/UpdateProfileForm/UpdateProfileForm";
import AccountLayout from "../../../components/layouts/AccountLayout/AccountLayout";
import MainLayout from "../../../components/layouts/MainLayout";

interface INextPage {
  user: GetMeResponsesDto;
}

const MyAccountProfile: NextPage<INextPage> = ({ user }): ReactElement => (
  <MainLayout>
    <AccountLayout>
      <SectionTitle title='Profil' />
      <Box mt={2}>
        <UpdateProfileForm userData={user} />
      </Box>
    </AccountLayout>
  </MainLayout>
);

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
    const { data } = await client.get<GetMeResponsesDto>("/auth/me", {
      headers: {
        Cookie: `token=${token};`,
      },
    });

    return {
      props: {
        user: data,
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

export default MyAccountProfile;
