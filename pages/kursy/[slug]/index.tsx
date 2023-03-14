import { Grid } from "@mui/material";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";

import {
  GetCourseResponseDto,
  GetCourseTopicsItemResponseDto,
} from "../../../api/api-types";
import { client } from "../../../api/client";
import CourseCover from "../../../components/atoms/CourseCover/CourseCover";
import MainLayout from "../../../components/layouts/MainLayout";
import CourseDetailsHeading from "../../../components/molecues/CourseDetailsHeading/CourseDetailsHeading";
import CourseDetailsSidebar from "../../../components/organism/CourseDetailsSidebar/CourseDetailsSidebar";
import CourseDetailsSidebarPrice from "../../../components/organism/CourseDetailsSidebarPrice/CourseDetailsSidebarPrice";
import CourseInfoTabs from "../../../components/organism/CourseInfoTabs/CourseInfoTabs";
import { useAccountContext } from "../../../providers/AccountProvider";

interface INextPage {
  course: GetCourseResponseDto;
  topics: GetCourseTopicsItemResponseDto[];
}

const CourseDetailsPage: NextPage<INextPage> = ({ course, topics }) => {
  const { user } = useAccountContext();

  const userHaveCourse = () =>
    !!user?.courses.find((item) => item.course === course._id);

  const getCourseProgress = () => {
    const courseLessons = topics.map((topic) => topic.lessons).flat();
    const finishedLessons = courseLessons.filter(
      (lesson) => !user?.watchedLessons.includes(lesson._id),
    ).length;

    const courseLessonsCount = courseLessons.length;
    const finishedCount = courseLessonsCount - finishedLessons;
    return Math.ceil((finishedCount / courseLessonsCount) * 100);
  };

  return (
    <>
      <Head>
        <title>
          {course.name} | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      <MainLayout>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <CourseDetailsHeading
              name={course.name}
              isFeatured={course.featured}
              difficultLevel={course.difficultyLevel}
            />
          </Grid>
          <Grid item lg={8}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <CourseCover alt={course.name} url={course.cover} />
              </Grid>
              <Grid item xs={12}>
                <CourseInfoTabs
                  description={course.description}
                  topics={topics}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <CourseDetailsSidebarPrice
                  course={course}
                  price={course.price}
                  salePrice={course.salePrice}
                  withoutPrice={userHaveCourse()}
                  progress={getCourseProgress() || 0}
                  youtubeLink={course.youtubePreview}
                  userHasCourse={userHaveCourse()}
                />
              </Grid>
              <Grid item xs={12}>
                <CourseDetailsSidebar
                  whatYouLearn={course.whatYouLearn}
                  courseIncludes={course.courseIncludes}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { slug } = ctx.query;

  const { data: courseData } = await client.get<GetCourseResponseDto>(
    `/courses/${slug}`,
  );
  const { data: topicsData } = await client.get<
    GetCourseTopicsItemResponseDto[]
  >(`/courses/${slug}/topics`);

  if (!courseData || !topicsData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      course: courseData,
      topics: topicsData,
    },
  };
};

export default CourseDetailsPage;
