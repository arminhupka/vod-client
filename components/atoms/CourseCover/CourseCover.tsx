import Image from "next/image";
import { ReactElement } from "react";

import { StyledWrapper } from "./CourseCover.styles";

interface IProps {
  alt: string;
  url: string;
}

const CourseCover = ({ url, alt }: IProps): ReactElement => (
  <StyledWrapper>
    <Image
      src={url || "/placeholder.png"}
      alt={alt}
      layout='fill'
      objectFit='cover'
      objectPosition='center'
    />
  </StyledWrapper>
);

export default CourseCover;
