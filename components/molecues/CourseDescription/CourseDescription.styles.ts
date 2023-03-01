import { Box, Paper, styled, Typography } from "@mui/material";

export const StyledPaper = styled(Paper)(() => ({}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h4.fontSize,
}));

export const StyledDescription = styled(Typography)(() => ({}));
