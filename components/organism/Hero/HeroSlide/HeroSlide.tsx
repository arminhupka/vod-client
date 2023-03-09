import { ReactElement } from "react";

import { StyledImage, StyledWrapper } from "./HeroSlide.styles";

const HeroSlide = (): ReactElement => (
  <StyledWrapper>
    <StyledImage src='https://i.imgur.com/uQ20Tuq.jpeg' alt='' />
  </StyledWrapper>
);

export default HeroSlide;
