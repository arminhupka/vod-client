import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  color: "#fff",
  background: theme.palette.primary.main,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontFamily: "Playfair Display",
}));
