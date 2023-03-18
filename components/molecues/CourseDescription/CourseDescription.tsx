import { Add } from "@mui/icons-material";
import { ReactElement, useState } from "react";

import {
  StyledDescription,
  StyledDescriptionWrapper,
  StyledHeading,
  StyledShowMoreButton,
  StyledWrapper,
} from "./CourseDescription.styles";

interface IProps {
  content: string;
}

const CourseDescription = ({ content }: IProps): ReactElement => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = () => setShowMore(true);

  return (
    <StyledWrapper>
      <StyledHeading as='h2'>Opis</StyledHeading>
      <StyledDescriptionWrapper showFull={showMore}>
        <StyledDescription>{content}</StyledDescription>
        {!showMore && (
          <StyledShowMoreButton startIcon={<Add />} onClick={handleShowMore}>
            Pokaż więcej
          </StyledShowMoreButton>
        )}
      </StyledDescriptionWrapper>
    </StyledWrapper>
  );
};

export default CourseDescription;
