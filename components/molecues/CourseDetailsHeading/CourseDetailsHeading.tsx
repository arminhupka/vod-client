import { ReactElement } from "react";
import {
  StyledBlobsWrapper,
  StyledName,
  StyledWrapper,
} from "./CourseDetailsHeading.styles";
import InfoBlob from "../../atoms/InfoBlob/InfoBlob";

const CourseDetailsHeading = (): ReactElement => (
  <StyledWrapper>
    <StyledBlobsWrapper>
      <InfoBlob message='Polecany' />
      <InfoBlob message='Zaawansowany' />
    </StyledBlobsWrapper>
    <StyledName>Some Course Name</StyledName>
  </StyledWrapper>
);

export default CourseDetailsHeading;
