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
  daysAvailable: number;
}

const CourseDetailsHeading = ({
  name,
  difficultLevel,
  isFeatured,
  daysAvailable,
}: IProps): ReactElement => (
  <StyledWrapper>
    <StyledBlobsWrapper>
      {isFeatured && <InfoBlob message='Polecany' />}
      <InfoBlob message={convertDifficultLevel(difficultLevel)} />
      <InfoBlob message={`Dostęp na ${daysAvailable ?? 0} dni`} />
    </StyledBlobsWrapper>
    <StyledName>{name}</StyledName>
  </StyledWrapper>
);

export default CourseDetailsHeading;
