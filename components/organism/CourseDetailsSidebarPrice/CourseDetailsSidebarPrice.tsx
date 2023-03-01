import { ReactElement } from "react";
import {
  StyledInnerWrapper,
  StyledPrice,
  StyledPricesWrapper,
  StyledWrapper,
} from "./CourseDetailsSidebarPrice.styles";
import { Box, Button } from "@mui/material";

const CourseDetailsSidebarPrice = (): ReactElement => (
  <StyledWrapper>
    <Box
      sx={{
        ".ytp-impression-link": {
          display: "none",
        },
      }}>
      <iframe
        width='100%'
        height='200'
        src='https://www.youtube.com/embed/VKNt7vTSGzU'
        frameBorder='0'></iframe>
    </Box>
    <StyledInnerWrapper solidBg>
      <StyledPricesWrapper>
        <StyledPrice as='ins'>249.95 zł</StyledPrice>
        <StyledPrice as='del' sale>
          549.95 zł
        </StyledPrice>
      </StyledPricesWrapper>
      <Button fullWidth variant='contained'>
        Dodaj do koszyka
      </Button>
    </StyledInnerWrapper>
    <StyledInnerWrapper solidBg>
      <Button fullWidth variant='contained'>
        Przejdź do kursu
      </Button>
    </StyledInnerWrapper>
    <StyledInnerWrapper>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default CourseDetailsSidebarPrice;
