import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h1.fontSize,
  },
}));

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[200],
}));

export const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
}));
