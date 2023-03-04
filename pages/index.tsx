import { Box } from "@mui/material";
import { NextPage } from "next";

import { GetCoursesListResponseDto } from "../api/api-types";
import { client } from "../api/client";
import MainLayout from "../components/layouts/MainLayout";
import CoursesGrid from "../components/organism/CoursesGrid/CoursesGrid";
import Hero from "../components/organism/Hero/Hero";

interface INextPage {
  courses: GetCoursesListResponseDto;
}

const HomePage: NextPage<INextPage> = ({ courses }) => (
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
);

export const getServerSideProps = async () => {
  const { data } = await client.get<GetCoursesListResponseDto>("/courses", {
    params: {
      limit: 6,
    },
  });

  return {
    props: {
      courses: data,
    },
  };
};

export default HomePage;
