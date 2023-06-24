import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { GetUserCoursesDto } from "../../../api/api-types";
import { downloadCertificate } from "../../../utils/certificateDownload";
import {
  StyledButtonWrapper,
  StyledChip,
  StyledChipWrapper,
  StyledCoverWrapper,
  StyledHeading,
  StyledInfoWrapper,
  StyledWrapper,
} from "./CourseWideCard.styles";

interface IProps {
  course: GetUserCoursesDto;
}

const CourseWideCard = ({ course }: IProps): ReactElement => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <StyledCoverWrapper>
        {course.course?.cover && (
          <Image
            src={course.course.cover}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        )}
      </StyledCoverWrapper>
      <StyledInfoWrapper>
        <StyledChipWrapper>
          <StyledChip
            size='small'
            label={`Dostępny do ${new Date(
              course.availableUntil,
            ).toLocaleDateString("pl-PL")}`}
          />
        </StyledChipWrapper>
        <StyledHeading>{course.course?.name}</StyledHeading>
        <StyledButtonWrapper>
          <Link href={`/kursy/${course.course.slug}`} passHref>
            <Button component='a' size='small' variant='contained'>
              Przejdź do kursu
            </Button>
          </Link>
          <Button
            size='small'
            variant='outlined'
            onClick={() =>
              downloadCertificate(course.course._id, course.course.name)
            }>
            Pobierz certyfikat
          </Button>
        </StyledButtonWrapper>
      </StyledInfoWrapper>
    </StyledWrapper>
  );
};

export default CourseWideCard;
