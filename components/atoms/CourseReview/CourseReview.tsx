import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useMutation } from "react-query";

import { ReviewDto } from "../../../api/api-types";
import { DeleteReview } from "../../../api/reviews";
import useModalState from "../../../hooks/useModalState";
import { useAccountContext } from "../../../providers/AccountProvider";
import EditReviewModal from "../../organism/Modals/EditReviewModal/EditReviewModal";
import { StyledAvatar } from "../AvatarMenu/AvatarMenu.styles";
import OverlayLoader from "../OverlayLoader/OverlayLoader";
import {
  StyledHeaderButtonsWrapper,
  StyledLastUpdate,
  StyledReviewDescription,
  StyledReviewHeader,
  StyledReviewUserWrapper,
  StyledUserName,
  StyledWrapper,
} from "./CourseReview.styles";

interface IProps {
  review: ReviewDto;
}

const CourseReview = ({ review }: IProps): ReactElement => {
  const router = useRouter();
  const { user } = useAccountContext();
  const { onOpen, onClose, isOpen } = useModalState();

  const [rev, setRev] = useState<ReviewDto | null>(null);

  const { mutate, isLoading } = useMutation<
    ReviewDto,
    AxiosError<ApiError>,
    string
  >(async (id) => await DeleteReview(id), {
    onSuccess: () => router.replace(router.asPath),
  });

  const handleReviewDelete = () => mutate(review._id);

  const handleOpenEditButton = (review: ReviewDto) => {
    setRev(review);
    onOpen();
  };

  const handleCloseEditModal = () => {
    onClose();
    setRev(null);
  };

  const reviewUsername = `${review.user.billing.firstName[0]}${review.user.billing.lastName[0]}`;
  const reviewFirstName = review.user.billing.firstName;
  const reviewLastName = review.user.billing.lastName;
  const reviewUpdateDate = new Date(review.updatedAt).toLocaleDateString(
    "pl-PL",
  );

  const isUserReview = user?._id === review.user._id;
  const isAdmin = user?.role === "ADMIN";

  return (
    <>
      <EditReviewModal
        review={rev}
        onClose={handleCloseEditModal}
        open={isOpen}
      />
      <OverlayLoader open={isLoading} />
      <StyledWrapper>
        <StyledReviewHeader>
          <StyledAvatar>{reviewUsername}</StyledAvatar>
          <StyledReviewUserWrapper>
            <StyledUserName>
              {reviewFirstName} {reviewLastName}
            </StyledUserName>
            <StyledLastUpdate>Dodano {reviewUpdateDate}</StyledLastUpdate>
          </StyledReviewUserWrapper>
          {isAdmin && !isUserReview && (
            <Button size='small' color='error' onClick={handleReviewDelete}>
              Usuń komentarz
            </Button>
          )}
          {isUserReview && (
            <StyledHeaderButtonsWrapper>
              <Button size='small' color='error' onClick={handleReviewDelete}>
                Usuń komentarz
              </Button>
            </StyledHeaderButtonsWrapper>
          )}
        </StyledReviewHeader>
        <StyledReviewDescription>{review.review}</StyledReviewDescription>
      </StyledWrapper>
    </>
  );
};

export default CourseReview;
