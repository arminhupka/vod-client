import { Box } from "@mui/material";
import { ReactElement } from "react";

import Logo from "../../../atoms/Logo/Logo";
import SocialIconButton from "../../../atoms/SocialIconButton/SocialIconButton";
import { StyledDescription, StyledWrapper } from "./FooterCompany.styles";

const FooterCompany = (): ReactElement => (
  <StyledWrapper>
    <Logo isBig white />
    <StyledDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit
      id leo viverra dapibus. Duis eu euismod lorem. Duis nisi mauris, fermentum
      non condimentum vitae, vestibulum in sapien.
    </StyledDescription>
    <Box mt={2} display='flex' gap={2}>
      <SocialIconButton type='facebook' />
      <SocialIconButton type='instagram' />
    </Box>
  </StyledWrapper>
);

export default FooterCompany;
