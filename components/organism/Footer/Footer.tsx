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

const navigations = [
  {
    id: 0,
    title: "Moje konto",
    links: [
      {
        name: "Konto",
        url: "/konto",
      },
      {
        name: "Kursy",
        url: "/konto/kursy",
      },
      {
        name: "Zamówienia",
        url: "/konto/zamowienia",
      },
    ],
  },
  {
    id: 1,
    title: "Platforma",
    links: [
      {
        name: "Regulamin",
        url: "/regulamin",
      },
      {
        name: "Polityka Prywatności",
        url: "/polityka-prywatnosci",
      },
    ],
  },
  {
    id: 2,
    title: "Social Media",
    links: [
      {
        name: "Facebook",
        url: "http://facebook.com",
      },
      {
        name: "Instagram",
        url: "http://instagram.com",
      },
      {
        name: "YouTube",
        url: "http://youtube.com",
      },
    ],
  },
];

const Footer = (): ReactElement => (
  <StyledFooter>
    <Container>
      <StyledMain>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <FooterCompany />
          </Grid>
          {navigations.map((nav) => (
            <Grid key={nav.id} item xs={12} md={12} lg={2}>
              <FooterNav key={nav.id} title={nav.title} links={nav.links} />
            </Grid>
          ))}
        </Grid>
      </StyledMain>
      <StyledCopy>
        <StyledCopyText>created with love by Netriot</StyledCopyText>
      </StyledCopy>
    </Container>
  </StyledFooter>
);

export default Footer;
