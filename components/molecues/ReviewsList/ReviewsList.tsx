import { Box, Button } from "@mui/material";
import { ReactElement } from "react";

import { ReviewDto } from "../../../api/api-types";
import CourseReview from "../../atoms/CourseReview/CourseReview";
import NoDataLabel from "../../atoms/NoDataLabel/NoDataLabel";
import { StyledWrapper } from "./ReviewsList.styles";

interface IProps {
  reviews: ReviewDto[];
}

export const ReviewsList = ({ reviews }: IProps): ReactElement => (
  <StyledWrapper>
    {reviews.length === 0 && (
      <Box>
        <NoDataLabel message='Ten kurs nie ma jeszcze żadnych wystawionych recenzji.' />
        <Button>Napisz recenzje</Button>
      </Box>
    )}
    {reviews.map((r) => (
      <CourseReview key={r._id} review={r} />
    ))}
  </StyledWrapper>
);

export default ReviewsList;
