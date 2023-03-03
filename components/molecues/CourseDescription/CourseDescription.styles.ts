import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h5.fontSize,
}));

export const StyledDescription = styled(Typography)(() => ({
  lineHeight: "26px",
}));
