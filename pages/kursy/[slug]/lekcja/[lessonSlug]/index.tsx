import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";

import { GetCourseTopicsItemResponseDto } from "../../../../../api/api-types";
import { client } from "../../../../../api/client";
import CoursePlayer from "../../../../../components/atoms/CoursePlayer/CoursePlayer";
import CourseTitle from "../../../../../components/atoms/CourseTitle/CourseTitle";
import LessonLayout from "../../../../../components/layouts/LessonLayout";
import LessonsList from "../../../../../components/organism/LessonsList/LessonsList";

interface INextPage {
  course: string;
  topics: GetCourseTopicsItemResponseDto[];
}

const LessonPage: NextPage<INextPage> = ({ topics, course }) => {
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
          <LessonsList course={course} topics={topics} />
        </Grid>
      </Grid>
    </LessonLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { slug: courseSlug, lessonSlug } = ctx.query;
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
    const { data: topics } = await client.get<GetCourseTopicsItemResponseDto>(
      `/courses/${courseSlug}/topics`,
    );

    return {
      props: {
        course: courseSlug,
        topics,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
};

export default LessonPage;
