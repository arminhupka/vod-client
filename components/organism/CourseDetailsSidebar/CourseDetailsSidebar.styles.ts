import { alpha, Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
  border: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
  background: alpha(theme.palette.secondary.main, 0.02),
}));

export const StyledItemWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled(Typography)(() => ({
  fontFamily: "Playfair Display",
  fontSize: 22,
}));
