import { Box, Button } from "@mui/material";
import { ReactElement } from "react";

import { GetCourseResponseDto } from "../../../api/api-types";
import { useCartContext } from "../../../providers/CartProvider";
import { formatPrice } from "../../../utils/formatPrice";
import CourseProgress from "../../atoms/CourseProgress/CourseProgress";
import {
  StyledInnerWrapper,
  StyledPrice,
  StyledPricesWrapper,
  StyledWrapper,
} from "./CourseDetailsSidebarPrice.styles";

interface IProps {
  course: GetCourseResponseDto;
  price: number;
  salePrice: number;
  withoutPrice: boolean;
  progress: number;
  youtubeLink: string | null;
  userHasCourse: boolean;
}

const CourseDetailsSidebarPrice = ({
  price,
  salePrice,
  course,
  withoutPrice,
  progress,
  youtubeLink,
  userHasCourse,
}: IProps): ReactElement => {
  const { addToCart, cart } = useCartContext();

  const handleAddToCart = () =>
    addToCart({
      price: course.price,
      _id: course._id,
      cover: course.cover,
      salePrice: course.salePrice,
      name: course.name,
      shortDescription: course.shortDescription,
      slug: course.slug,
      difficultyLevel: course.difficultyLevel,
      daysAvailable: 0,
      featured: course.featured,
      lessonsCount: course.lessonsCount,
      topicsCount: course.topicsCount,
    });

  const isInCart = () => !!cart.find((ci) => ci._id === course._id);

  return (
    <StyledWrapper>
      {!!youtubeLink && (
        <Box
          sx={{
            ".ytp-impression-link": {
              display: "none",
            },
          }}>
          <iframe
            width='100%'
            height='200'
            src={youtubeLink}
            frameBorder='0'></iframe>
        </Box>
      )}
      <StyledInnerWrapper solidBg>
        <StyledPricesWrapper>
          {salePrice && (
            <>
              <StyledPrice as='ins'>{formatPrice(salePrice)}</StyledPrice>
              <StyledPrice sale as='del'>
                {formatPrice(price)}
              </StyledPrice>
            </>
          )}
          {!salePrice && <StyledPrice>{formatPrice(price)}</StyledPrice>}
        </StyledPricesWrapper>
        {!withoutPrice && (
          <Button
            fullWidth
            variant='contained'
            disabled={isInCart()}
            onClick={handleAddToCart}>
            Dodaj do koszyka
          </Button>
        )}
      </StyledInnerWrapper>
      {userHasCourse && (
        <StyledInnerWrapper solidBg>
          <CourseProgress value={progress} />
          <Button fullWidth variant='contained'>
            Przejdź do kursu
          </Button>
        </StyledInnerWrapper>
      )}
      <StyledInnerWrapper>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default CourseDetailsSidebarPrice;
