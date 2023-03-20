import { ReactElement } from "react";

import { ReviewDto } from "../../../api/api-types";
import CourseReview from "../../atoms/CourseReview/CourseReview";
import { StyledWrapper } from "./ReviewsList.styles";

interface IProps {
  reviews: ReviewDto[];
}

export const ReviewsList = ({ reviews }: IProps): ReactElement => (
  <StyledWrapper>
    {reviews.map((r) => (
      <CourseReview key={r._id} review={r} />
    ))}
  </StyledWrapper>
);

export default ReviewsList;
