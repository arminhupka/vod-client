import { Movie } from "@mui/icons-material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ReactElement, useState } from "react";

import { GetCourseResponseDto } from "../../../api/api-types";
import { DownloadCertificate } from "../../../api/courses";
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
  lastLesson?: string;
  disableButton?: boolean;
}

const CourseDetailsSidebarPrice = ({
  price,
  salePrice,
  course,
  progress,
  youtubeLink,
  userHasCourse,
  lastLesson,
  disableButton,
}: IProps): ReactElement => {
  const { addToCart, cart } = useCartContext();
  const [certificateDownloading, setCertificateDownloading] =
    useState<boolean>(false);

  // import("react-facebook-pixel")
  //   .then((module) => module.default)
  //   .then((ReactPixel) => {
  //     ReactPixel.init("4866321303446257");
  //     ReactPixel.pageView();
  //     return;
  //   });

  const handleAddToCart = async () => {
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

    const pixel = (await import("react-facebook-pixel")).default;
    pixel.init("4866321303446257");
    pixel.track("AddToCart", {
      value: formatPrice(course.price, false),
      currency: "PLN",
    });
  };

  const isInCart = () => !!cart.find((ci) => ci._id === course._id);

  const formatedYouTubeLink = youtubeLink?.split("=")[1];

  const handleDownloadCertificate = async (): Promise<void> => {
    try {
      setCertificateDownloading(true);
      const data = await DownloadCertificate(course._id);
      const url = window.URL.createObjectURL(data);
      window.open(url);
    } catch (err) {
      console.error(err);
    } finally {
      setCertificateDownloading(false);
    }
  };

  const isFinished = progress === 100;

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
        <StyledInnerWrapper>
          <StyledPricesWrapper>
            {salePrice && (
              <>
                <StyledPrice as='ins'>
                  {formatPrice(salePrice, true)}
                </StyledPrice>
                <StyledPrice sale as='del'>
                  {formatPrice(price)}
                </StyledPrice>
              </>
            )}
            {!salePrice && (
              <StyledPrice>{formatPrice(price, true)}</StyledPrice>
            )}
          </StyledPricesWrapper>
          <Button variant='contained'>Nabór został zamknięty</Button>
          {/*<Button*/}
          {/*  fullWidth*/}
          {/*  variant='contained'*/}
          {/*  disabled={isInCart()}*/}
          {/*  onClick={handleAddToCart}>*/}
          {/*  Dodaj do koszyka*/}
          {/*</Button>*/}
        </StyledInnerWrapper>
      )}

      {userHasCourse && (
        <StyledInnerWrapper>
          <CourseProgress value={progress} />
          <Link href={`/kursy/${course.slug}/lekcja/${lastLesson}`} passHref>
            <Button
              component='a'
              fullWidth
              variant='contained'
              startIcon={<Movie />}
              disabled={disableButton}>
              Przejdź do kursu
            </Button>
          </Link>
          <Button
            variant='outlined'
            startIcon={<AssignmentTurnedInIcon />}
            onClick={handleDownloadCertificate}
            disabled={certificateDownloading || !isFinished}>
            {!isFinished
              ? "Ukończ kurs aby pobrać certyfikat"
              : certificateDownloading
              ? "Pobieram"
              : "Pobierz certyfikat"}
          </Button>
        </StyledInnerWrapper>
      )}
    </StyledWrapper>
  );
};

export default CourseDetailsSidebarPrice;
