import { ReactElement } from "react";

import {
  StyledDescription,
  StyledHeading,
  StyledWrapper,
} from "./CourseDescription.styles";

interface IProps {
  content: string;
}

const CourseDescription = ({ content }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledHeading>Opis</StyledHeading>
    <StyledDescription>{content}</StyledDescription>
  </StyledWrapper>
);

export default CourseDescription;
