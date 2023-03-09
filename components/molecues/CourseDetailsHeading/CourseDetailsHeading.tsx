import { ReactElement } from "react";

import { convertDifficultLevel } from "../../../utils/convertDifficultLevel";
import InfoBlob from "../../atoms/InfoBlob/InfoBlob";
import {
  StyledBlobsWrapper,
  StyledName,
  StyledWrapper,
} from "./CourseDetailsHeading.styles";

interface IProps {
  name: string;
  isFeatured: boolean;
  difficultLevel: string;
}

const CourseDetailsHeading = ({
  name,
  difficultLevel,
  isFeatured,
}: IProps): ReactElement => (
  <StyledWrapper>
    <StyledBlobsWrapper>
      {isFeatured && <InfoBlob message='Polecany' />}
      <InfoBlob message={convertDifficultLevel(difficultLevel)} />
    </StyledBlobsWrapper>
    <StyledName>{name}</StyledName>
  </StyledWrapper>
);

export default CourseDetailsHeading;
