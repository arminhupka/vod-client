import { NextPage } from "next";
import { Grid } from "@mui/material";
import CourseDetailsHeading from "../../../components/molecues/CourseDetailsHeading/CourseDetailsHeading";
import CourseDetailsSidebar from "../../../components/organism/CourseDetailsSidebar/CourseDetailsSidebar";
import PreviewPlayer from "../../../components/molecues/PreviewPlayer/PreviewPlayer";
import CourseDescription from "../../../components/molecues/CourseDescription/CourseDescription";
import CourseDetailsSidebarPrice from "../../../components/organism/CourseDetailsSidebarPrice/CourseDetailsSidebarPrice";
import MainLayout from "../../../components/layouts/MainLayout";

const CourseDetailsPage: NextPage = () => (
  <MainLayout>
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <CourseDetailsHeading />
      </Grid>
      <Grid item lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PreviewPlayer />
          </Grid>
          <Grid item xs={12}>
            <CourseDescription />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CourseDetailsSidebarPrice />
          </Grid>
          <Grid item xs={12}>
            <CourseDetailsSidebar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </MainLayout>
);

export default CourseDetailsPage;
