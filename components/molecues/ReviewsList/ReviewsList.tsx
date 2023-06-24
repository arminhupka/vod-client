import ReviewsIcon from "@mui/icons-material/Reviews";
import { Box, Button } from "@mui/material";
import { ReactElement } from "react";

import { ReviewDto } from "../../../api/api-types";
import useModalState from "../../../hooks/useModalState";
import { useAccountContext } from "../../../providers/AccountProvider";
import CourseReview from "../../atoms/CourseReview/CourseReview";
import NoDataLabel from "../../atoms/NoDataLabel/NoDataLabel";
import NewReviewModal from "../../organism/Modals/NewReviewModal/NewReviewModal";
import { StyledWrapper } from "./ReviewsList.styles";

interface IProps {
  courseId: string;
  reviews: ReviewDto[];
}

export const ReviewsList = ({ reviews, courseId }: IProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();
  const { user } = useAccountContext();
  const alreadyCommented = !!reviews.find((r) => r.user._id === user?._id);

  return (
    <>
      <NewReviewModal courseId={courseId} onClose={onClose} open={isOpen} />
      <StyledWrapper>
        {reviews.length === 0 && (
          <Box
            display='flex'
            flexDirection='column'
            gap={2}
            alignItems='center'>
            <NoDataLabel message='Ten kurs nie ma jeszcze żadnych wystawionych recenzji.' />
            <Button
              startIcon={<ReviewsIcon />}
              onClick={onOpen}
              variant='outlined'>
              Napisz recenzje
            </Button>
          </Box>
        )}
        {reviews.map((r) => (
          <CourseReview key={r._id} review={r} />
        ))}
        {!alreadyCommented && (
          <Box mt={4} display='flex' justifyContent='center'>
            <Button
              startIcon={<ReviewsIcon />}
              onClick={onOpen}
              variant='outlined'>
              Napisz recenzje
            </Button>
          </Box>
        )}
      </StyledWrapper>
    </>
  );
};

export default ReviewsList;
