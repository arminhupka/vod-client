import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  overflow: "hidden",
  borderRadius: theme.spacing(1),
  aspectRatio: "16/7",
}));
