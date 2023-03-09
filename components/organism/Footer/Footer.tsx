import { Container, Grid } from "@mui/material";
import { ReactElement } from "react";

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
            logo
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            Row 1
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            Row 2
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            Row 3
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