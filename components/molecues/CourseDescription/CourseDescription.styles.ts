import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h4.fontSize,
}));

export const StyledDescription = styled(Typography)(() => ({}));
