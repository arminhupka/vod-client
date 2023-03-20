import { ReactElement } from "react";

import Logo from "../../../atoms/Logo/Logo";
import { StyledDescription, StyledWrapper } from "./FooterCompany.styles";

const FooterCompany = (): ReactElement => (
  <StyledWrapper>
    <Logo isBig white />
    <StyledDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit
      id leo viverra dapibus. Duis eu euismod lorem. Duis nisi mauris, fermentum
      non condimentum vitae, vestibulum in sapien.
    </StyledDescription>
  </StyledWrapper>
);

export default FooterCompany;
