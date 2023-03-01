import { ReactElement, ReactNode } from "react";
import Header from "../organism/Header/Header";
import { Box, Container } from "@mui/material";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps): ReactElement => (
  <Box>
    <Header />
    <Container sx={{ py: 4, mt: 12 }}>{children}</Container>
  </Box>
);

export default MainLayout;
