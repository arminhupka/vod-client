import { Box, Button } from "@mui/material";
import { ReactElement } from "react";

import { GetCourseResponseDto } from "../../../api/api-types";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import { formatPrice } from "../../../utils/formatPrice";
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
}

const CourseDetailsSidebarPrice = ({
  price,
  salePrice,
  course,
}: IProps): ReactElement => {
  const { addToCart, cart } = useCartContext();
  const { user } = useAccountContext();

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
      <Box
        sx={{
          ".ytp-impression-link": {
            display: "none",
          },
        }}>
        <iframe
          width='100%'
          height='200'
          src='https://www.youtube.com/embed/VKNt7vTSGzU'
          frameBorder='0'></iframe>
      </Box>
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
      {user && (
        <StyledInnerWrapper solidBg>
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
