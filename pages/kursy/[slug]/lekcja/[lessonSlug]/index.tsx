import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";

import {
  GetCourseTopicsItemResponseDto,
  UserCourseLessonDto,
  UserCourseResponseDto,
} from "../../../../../api/api-types";
import { client } from "../../../../../api/client";
import CourseTitle from "../../../../../components/atoms/CourseTitle/CourseTitle";
import SectionTitle from "../../../../../components/atoms/SectionTitle/SectionTitle";
import LessonLayout from "../../../../../components/layouts/LessonLayout";
import LessonsList from "../../../../../components/organism/LessonsList/LessonsList";

const DynamicPlayer = dynamic(
  () => import("../../../../../components/atoms/CoursePlayer/CoursePlayer"),
);

interface INextPage {
  course: string;
  topics: GetCourseTopicsItemResponseDto[];
  lesson: UserCourseLessonDto;
  courseData: UserCourseResponseDto;
}

const LessonPage: NextPage<INextPage> = ({
  topics,
  course,
  lesson,
  courseData,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LessonLayout withoutTopbar fullWidth>
      <Grid container={!isMobile}>
        <Grid item xs={12}>
          <CourseTitle title={courseData.name} />
        </Grid>
        <Grid item xs={12} lg={9}>
          <DynamicPlayer video={lesson.videoLink.split("=").at(-1)!} />
          <Box mt={2} p={3} display='flex' flexDirection='column' gap={4}>
            <SectionTitle title={lesson.title} />
            <Typography>{lesson.description}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <LessonsList course={course} topics={topics} />
        </Grid>
      </Grid>
    </LessonLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { slug: courseSlug, lessonSlug } = ctx.query;
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  console.log(token);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  try {
    const { data: course } = await client.get<UserCourseResponseDto>(
      `/user/courses/${courseSlug}`,
      {
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    const { data: topics } = await client.get<GetCourseTopicsItemResponseDto>(
      `/courses/${courseSlug}/topics`,
    );

    const { data: lesson } = await client.get(
      `/user/courses/${courseSlug}/lesson/${lessonSlug}`,
      {
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        course: courseSlug,
        topics,
        lesson,
        courseData: course,
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
