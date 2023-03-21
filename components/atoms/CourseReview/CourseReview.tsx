import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useMutation } from "react-query";

import { ReviewDto } from "../../../api/api-types";
import { DeleteReview } from "../../../api/reviews";
import { useAccountContext } from "../../../providers/AccountProvider";
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

  const { mutate, isLoading } = useMutation<
    ReviewDto,
    AxiosError<ApiError>,
    string
  >(async (id) => await DeleteReview(id), {
    onSuccess: () =>
      router.replace(
        {
          pathname: router.asPath,
        },
        undefined,
        { scroll: false },
      ),
  });

  const handleReviewDelete = () => mutate(review._id);

  const reviewUsername = `${review.user.billing.firstName[0]}${review.user.billing.lastName[0]}`;
  const reviewFirstName = review.user.billing.firstName;
  const reviewLastName = review.user.billing.lastName;
  const reviewUpdateDate = new Date(review.updatedAt).toLocaleDateString(
    "pl-PL",
  );

  const isUserReview = user?._id === review.user._id;

  return (
    <>
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
          {isUserReview && (
            <StyledHeaderButtonsWrapper>
              <Button size='small'>Edytuj komentarz</Button>
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
