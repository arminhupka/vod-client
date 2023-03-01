import { ReactElement } from "react";
import { StyledTitle, StyledWrapper } from "./CourseTitle.styles";
import { Toolbar } from "@mui/material";

interface IProps {
  title: string;
}

const CourseTitle = ({ title }: IProps): ReactElement => (
  <StyledWrapper>
    <Toolbar>
      <StyledTitle>{title}</StyledTitle>
    </Toolbar>
  </StyledWrapper>
);

export default CourseTitle;
