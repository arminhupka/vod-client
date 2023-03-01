import { ReactElement } from "react";
import { StyledWrapper } from "./Hero.styles";
import HeroSlide from "./HeroSlide/HeroSlide";

const Hero = (): ReactElement => (
  <StyledWrapper>
    <HeroSlide />
  </StyledWrapper>
);

export default Hero;
