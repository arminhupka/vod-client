import { Button } from "@mui/material";
import fileDownload from "js-file-download";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";

import { GetUserCoursesDto } from "../../../api/api-types";
import { DownloadCertificate } from "../../../api/courses";
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

  const query = useQuery(
    "getCertificate",
    async () => await DownloadCertificate(course.course._id),
    {
      enabled: false,
      onSuccess: (data) => {
        const url = window.URL.createObjectURL(data.data);
        window.open(url);
      },
    },
  );

  const downloadCertificate = async (): Promise<void> => {
    try {
      const { data } = await DownloadCertificate(course.course._id);
      console.log(data);
      fileDownload(data, `CERTYFIKAT_${course.course.name.toUpperCase()}.pdf`);
    } catch (err) {
      console.error(err);
    }
  };

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
          <Button size='small' variant='outlined' onClick={downloadCertificate}>
            Pobierz certyfikat
          </Button>
        </StyledButtonWrapper>
      </StyledInfoWrapper>
    </StyledWrapper>
  );
};

export default CourseWideCard;
