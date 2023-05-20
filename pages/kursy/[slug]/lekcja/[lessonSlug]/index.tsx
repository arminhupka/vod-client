import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import {
  GetCourseLessonsItemResponseDto,
  GetCourseTopicsItemResponseDto,
  OkResponseDto,
  UserCourseLessonDto,
  UserCourseResponseDto,
} from "../../../../../api/api-types";
import { client } from "../../../../../api/client";
import { addLessonToWatched } from "../../../../../api/lessons";
import CoursePlayer from "../../../../../components/atoms/CoursePlayer/CoursePlayer";
import CourseTitle from "../../../../../components/atoms/CourseTitle/CourseTitle";
import SectionTitle from "../../../../../components/atoms/SectionTitle/SectionTitle";
import LessonLayout from "../../../../../components/layouts/LessonLayout";
import LessonsList from "../../../../../components/organism/LessonsList/LessonsList";
import { useAccountContext } from "../../../../../providers/AccountProvider";

const DynamicPlayer = dynamic(
  () => import("../../../../../components/atoms/CoursePlayer/CoursePlayer"),
  { ssr: false },
);

interface INextPage {
  course: string;
  topics: GetCourseTopicsItemResponseDto[];
  lesson: UserCourseLessonDto;
  courseData: UserCourseResponseDto;
  watchedLessons: string[];
}

const LessonPage: NextPage<INextPage> = ({
  topics,
  course,
  lesson,
  courseData,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [nextLesson, setNextLesson] =
    useState<GetCourseLessonsItemResponseDto | null>(null);

  const { addLessonToWatched: addLessonToWatchedContext } = useAccountContext();

  const watchedLessonMutation = useMutation<OkResponseDto>(
    async () => await addLessonToWatched(lesson._id),
  );

  const handlePlayerEnd = async (): Promise<void> => {
    await watchedLessonMutation.mutateAsync();
    addLessonToWatchedContext(lesson._id);
    await router.push(`/kursy/${course}/lekcja/${nextLesson?._id}`);
  };

  useEffect(() => {
    const currentTopic = topics.find((t) =>
      t.lessons.some((l) => l._id === lesson._id),
    );
    const currentLessonIdx = currentTopic?.lessons.findIndex(
      (l) => l._id === lesson._id,
    );

    if (!currentLessonIdx) return;

    const nextLesson = currentTopic?.lessons[currentLessonIdx + 1];
    if (nextLesson) {
      setNextLesson(nextLesson);
    }
  }, [lesson._id, topics]);

  return (
    <LessonLayout withoutTopbar fullWidth>
      <CourseTitle title={courseData.name} />
      <Grid container={!isMobile} minHeight='100vh' bgcolor='#fff'>
        <Grid item={!isMobile} xs={12} lg={9}>
          <CoursePlayer video={lesson.videoLink} onEnd={handlePlayerEnd} />
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

    const { data: watchedLessons } = await client.get<string[]>(
      "/user/watched",
      {
        headers: {
          Cookie: `token=${token}`,
        },
      },
    );

    return {
      props: {
        course: courseSlug,
        topics,
        lesson,
        courseData: course,
        watchedLessons,
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
