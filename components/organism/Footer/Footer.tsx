import { Container, Grid } from "@mui/material";
import { ReactElement } from "react";

import FooterCompany from "../../molecues/FooterElements/FooterCompany/FooterCompany";
import FooterNav from "../../molecues/FooterElements/FooterNav/FooterNav";
import {
  StyledCopy,
  StyledCopyText,
  StyledFooter,
  StyledMain,
} from "./Footer.styles";

const Footer = (): ReactElement => (
  <StyledFooter>
    <Container>
      <StyledMain>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <FooterCompany />
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <FooterNav />
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <FooterNav />
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <FooterNav />
          </Grid>
        </Grid>
      </StyledMain>
      <StyledCopy>
        <StyledCopyText>created with love by Netriot</StyledCopyText>
      </StyledCopy>
    </Container>
  </StyledFooter>
);

export default Footer;
