import { ReactElement } from "react";
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
import InfoBlob from "../../atoms/InfoBlob/InfoBlob";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";

export const CourseCard = (): ReactElement => (
  <StyledWrapper>
    <StyledBlobsWrapper>
      <InfoBlob message='Polecany' />
      <InfoBlob message='Zaawansowany' />
    </StyledBlobsWrapper>
    <Link href='/kursy/abc'>
      <StyledCoverWrapper>
        <StyledCover src='https://i.imgur.com/uQ20Tuq.jpeg' />
      </StyledCoverWrapper>
    </Link>
    <StyledInfoWrapper>
      <Link href='/kursy/abc'>
        <StyledName>Some Course Name</StyledName>
      </Link>
      <StyledDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        atque aut blanditiis deleniti dignissimos explicabo fugit iusto, nemo
        quaerat sequi?
      </StyledDescription>
    </StyledInfoWrapper>
    <StyledButtonWrapper>
      <StyledPrice>129,99 zł</StyledPrice>
      <Button startIcon={<ShoppingCart />} variant='contained'>
        Dodaj do koszyka
      </Button>
    </StyledButtonWrapper>
  </StyledWrapper>
);

export default CourseCard;
