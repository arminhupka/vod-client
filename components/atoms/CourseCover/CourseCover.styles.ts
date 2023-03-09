import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 500,
  width: "100%",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));
