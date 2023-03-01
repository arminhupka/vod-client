import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({
  height: 500,
  position: "relative",
  background: "blue",
}));

export const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  verticalAlign: "bottom",
  objectFit: "cover",
}));
