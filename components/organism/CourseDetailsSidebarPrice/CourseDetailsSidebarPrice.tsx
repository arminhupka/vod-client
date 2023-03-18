import { Movie } from "@mui/icons-material";
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
  progress: number;
  youtubeLink: string | null;
  userHasCourse: boolean;
}

const CourseDetailsSidebarPrice = ({
  price,
  salePrice,
  course,
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

  const formatedYouTubeLink = youtubeLink?.split("=")[1];

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
            src={`https://www.youtube.com/embed/${formatedYouTubeLink}?controls=0&modestbranding=0`}
            style={{
              verticalAlign: "bottom",
            }}
            frameBorder='0'></iframe>
        </Box>
      )}
      {!userHasCourse && (
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
          <Button
            fullWidth
            variant='contained'
            disabled={isInCart()}
            onClick={handleAddToCart}>
            Dodaj do koszyka
          </Button>
        </StyledInnerWrapper>
      )}

      {userHasCourse && (
        <StyledInnerWrapper solidBg>
          <CourseProgress value={progress} />
          <Button fullWidth variant='contained' startIcon={<Movie />}>
            Przejdź do kursu
          </Button>
        </StyledInnerWrapper>
      )}
    </StyledWrapper>
  );
};

export default CourseDetailsSidebarPrice;
