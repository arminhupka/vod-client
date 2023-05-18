import { ReactElement } from "react";

import Logo from "../../../atoms/Logo/Logo";
import { StyledDescription, StyledWrapper } from "./FooterCompany.styles";

const FooterCompany = (): ReactElement => (
  <StyledWrapper>
    <Logo isBig white />
    <StyledDescription>
      Dąż do perfekcji, bazując na solidnym fundamencie eksperckiej wiedzy i
      praktycznych umiejętności. Na nowo pokochaj sztukę makijażu i chętnie
      publikuj swoje prace. Twoje wysokiej jakości zdjęcia przyciągną nowe
      klientki, rozwijając biznes na Twoich zasadach!
    </StyledDescription>
  </StyledWrapper>
);

export default FooterCompany;
