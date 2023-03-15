import { Movie, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import { convertDifficultLevel } from "../../../utils/convertDifficultLevel";
import { formatPrice } from "../../../utils/formatPrice";
import InfoBlob from "../../atoms/InfoBlob/InfoBlob";
import {
  StyledBlobsWrapper,
  StyledButtonWrapper,
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
    _id,
    cover,
  } = props;

  const { addToCart, cart } = useCartContext();
  const { user } = useAccountContext();

  const userHaveCourse = () =>
    //  @ts-ignore
    !!user?.courses.find((item) => item.course._id === _id!);

  return (
    <StyledWrapper>
      <StyledBlobsWrapper>
        {featured && <InfoBlob message='Polecany' />}
        {difficultyLevel && (
          <InfoBlob message={convertDifficultLevel(difficultyLevel)} />
        )}
      </StyledBlobsWrapper>
      <Link href={`/kursy/${slug}`} passHref>
        <a>
          <StyledCoverWrapper>
            <Image
              alt={`${name} - ${process.env.NEXT_PUBLIC_APP_NAME}`}
              src={cover || "/placeholder.png"}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </StyledCoverWrapper>
        </a>
      </Link>
      <StyledInfoWrapper>
        <Link href={`/kursy/${slug}`} passHref>
          <a>
            <StyledName>{name}</StyledName>
          </a>
        </Link>
        <StyledDescription>{shortDescription}</StyledDescription>
      </StyledInfoWrapper>
      <StyledButtonWrapper>
        <StyledPrice>{formatPrice(salePrice || price)}</StyledPrice>
        <Button
          disabled={!!cart.find((item) => item._id === _id) || userHaveCourse()}
          startIcon={userHaveCourse() ? <Movie /> : <ShoppingCart />}
          variant='contained'
          onClick={() => addToCart(props)}>
          {userHaveCourse() ? "Przejdz do kursu" : "Dodaj do koszyka"}
        </Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default CourseCard;
