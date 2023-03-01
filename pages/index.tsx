import { NextPage } from "next";
import Hero from "../components/organism/Hero/Hero";
import CoursesGrid from "../components/organism/CoursesGrid/CoursesGrid";
import { Box } from "@mui/material";
import MainLayout from "../components/layouts/MainLayout";

const HomePage: NextPage = () => (
  <MainLayout>
    <Box>
      <Hero />
      <CoursesGrid
        title='Najnowsze kursy'
        link='/kursy'
        linkName='Zobacz wszystkie'
      />
    </Box>
  </MainLayout>
);

export default HomePage;
