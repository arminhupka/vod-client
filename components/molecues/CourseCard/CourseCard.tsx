import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";
import { useCartContext } from "../../../providers/CartProvider";
import { formatPrice } from "../../../utils/formatPrice";
import InfoBlob from "../../atoms/InfoBlob/InfoBlob";
import {
  StyledBlobsWrapper,
  StyledButtonWrapper,
  StyledCover,
  StyledCoverWrapper,
  StyledDescription,
  StyledInfoWrapper,
  StyledName,
  StyledPrice,
  StyledWrapper,
} from "./CourseCard.styles";

export const CourseCard = (props: CourseListItem): ReactElement => {
  const {
    featured,
    difficultyLevel,
    slug,
    name,
    shortDescription,
    salePrice,
    price,
  } = props;

  const { addToCart } = useCartContext();

  return (
    <StyledWrapper>
      <StyledBlobsWrapper>
        {featured && <InfoBlob message='Polecany' />}
        {difficultyLevel && <InfoBlob message={difficultyLevel} />}
      </StyledBlobsWrapper>
      <Link href={`/kursy/${slug}`}>
        <StyledCoverWrapper>
          <StyledCover src='https://i.imgur.com/uQ20Tuq.jpeg' />
        </StyledCoverWrapper>
      </Link>
      <StyledInfoWrapper>
        <Link href={`/kursy/${slug}`}>
          <StyledName>{name}</StyledName>
        </Link>
        <StyledDescription>{shortDescription}</StyledDescription>
      </StyledInfoWrapper>
      <StyledButtonWrapper>
        <StyledPrice>{formatPrice(salePrice || price)}</StyledPrice>
        <Button
          startIcon={<ShoppingCart />}
          variant='contained'
          onClick={() => addToCart(props)}>
          Dodaj do koszyka
        </Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default CourseCard;
