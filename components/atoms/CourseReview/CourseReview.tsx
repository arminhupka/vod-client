import { ReactElement } from "react";

import { ReviewDto } from "../../../api/api-types";
import {
  StyledBlockquote,
  StyledCite,
  StyledWrapper,
} from "./CourseReview.styles";

interface IProps {
  review: ReviewDto;
}

const CourseReview = ({ review }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledBlockquote>
      {review.review}
      <StyledCite>
        {review.user.billing.firstName} {review.user.billing.lastName}
      </StyledCite>
    </StyledBlockquote>
  </StyledWrapper>
);

export default CourseReview;
