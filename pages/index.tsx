import { Box } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

import { GetCoursesListResponseDto } from "../api/api-types";
import { client } from "../api/client";
import MainLayout from "../components/layouts/MainLayout";
import CoursesGrid from "../components/organism/CoursesGrid/CoursesGrid";
import Hero from "../components/organism/Hero/Hero";

interface INextPage {
  courses: GetCoursesListResponseDto;
}

const HomePage: NextPage<INextPage> = ({ courses }) => (
  <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
    </Head>
    <MainLayout>
      <Box>
        <Hero />
        <CoursesGrid
          title='Najnowsze kursy'
          link='/kursy'
          linkName='Zobacz wszystkie'
          courses={courses.docs || []}
        />
      </Box>
    </MainLayout>
  </>
);

export const getServerSideProps = async () => {
  const { data } = await client.get<GetCoursesListResponseDto>("/courses", {
    params: {
      limit: 6,
      orderBy: "published",
      order: "desc",
    },
  });

  return {
    props: {
      courses: data,
    },
  };
};

export default HomePage;
