import { NextPage } from "next";
import LessonLayout from "../../../../../components/layouts/LessonLayout";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import LessonsList from "../../../../../components/organism/LessonsList/LessonsList";
import CoursePlayer from "../../../../../components/atoms/CoursePlayer/CoursePlayer";
import CourseTitle from "../../../../../components/atoms/CourseTitle/CourseTitle";

const LessonPage: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LessonLayout withoutTopbar>
      <Grid height='100%' container={!isMobile}>
        <Grid item xs={12}>
          <CourseTitle title='Some nice course' />
        </Grid>
        <Grid item xs={12} lg={9}>
          <CoursePlayer />
        </Grid>
        <Grid height='100%' item xs={12} lg={3}>
          <LessonsList />
        </Grid>
      </Grid>
    </LessonLayout>
  );
};

export default LessonPage;
