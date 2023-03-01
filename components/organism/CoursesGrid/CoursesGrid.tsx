import { ReactElement } from "react";
import { StyledWrapper } from "./CoursesGrid.styles";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Grid } from "@mui/material";
import CourseCard from "../../molecues/CourseCard/CourseCard";

interface IProps {
  title: string;
  link?: string;
  linkName?: string;
}

const CoursesGrid = ({ title, linkName, link }: IProps): ReactElement => (
  <StyledWrapper>
    <SectionTitle title={title} link={link} linkName={linkName} />
    <Grid mt={1} container spacing={2}>
      <Grid item xs={4}>
        <CourseCard />
      </Grid>
      <Grid item xs={4}>
        <CourseCard />
      </Grid>
      <Grid item xs={4}>
        <CourseCard />
      </Grid>
      <Grid item xs={4}>
        <CourseCard />
      </Grid>
    </Grid>
  </StyledWrapper>
);

export default CoursesGrid;
