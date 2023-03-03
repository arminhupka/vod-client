import { Grid } from "@mui/material";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import CourseCard from "../../molecues/CourseCard/CourseCard";
import { StyledWrapper } from "./CoursesGrid.styles";

interface IProps {
  title: string;
  link?: string;
  linkName?: string;
  courses: CourseListItem[];
}

const CoursesGrid = ({
  title,
  linkName,
  link,
  courses,
}: IProps): ReactElement => (
  <StyledWrapper>
    <SectionTitle title={title} link={link} linkName={linkName} />
    <Grid mt={1} container spacing={2}>
      {courses.map((c) => (
        <Grid key={c._id} item xs={4}>
          <CourseCard {...c} />
        </Grid>
      ))}
    </Grid>
  </StyledWrapper>
);

export default CoursesGrid;
