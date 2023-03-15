import Image from "next/image";
import { ReactElement } from "react";

import { GetUserCoursesDto } from "../../../api/api-types";
import {
  StyledChip,
  StyledChipWrapper,
  StyledCoverWrapper,
  StyledHeading,
  StyledInfoWrapper,
  StyledWrapper,
} from "./CourseWideCard.styles";

interface IProps {
  course: GetUserCoursesDto;
}

const CourseWideCard = ({ course }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledCoverWrapper>
      <Image src={course.course.cover} layout='fill' />
    </StyledCoverWrapper>
    <StyledInfoWrapper>
      <StyledHeading>{course.course.name}</StyledHeading>
      <StyledChipWrapper>
        <StyledChip
          label={`Dostępny do ${new Date(
            course.availableUntil,
          ).toLocaleDateString()}`}
        />
        <StyledChip label='Ukończono 95%' />
      </StyledChipWrapper>
    </StyledInfoWrapper>
  </StyledWrapper>
);

export default CourseWideCard;
