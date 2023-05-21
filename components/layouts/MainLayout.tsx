import { Container } from "@mui/material";
import { ReactElement, ReactNode } from "react";

import Footer from "../organism/Footer/Footer";
import Header from "../organism/Header/Header";
import { StyledWrapper } from "./MainLayouts.styles";

interface IProps {
  children: ReactNode;
  center?: boolean;
}

const MainLayout = ({ children, center }: IProps): ReactElement => (
  <StyledWrapper>
    <Header />
    <Container
      sx={{
        py: 4,
        mt: 12,
        flex: 1,
        minHeight: "100%",
        display: center ? "flex" : "block",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {children}
    </Container>
    <Footer />
  </StyledWrapper>
);

export default MainLayout;
