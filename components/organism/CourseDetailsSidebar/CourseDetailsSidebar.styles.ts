import { alpha, Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  border: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
}));

export const StyledItemWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled("h3")(() => ({
  fontFamily: "Playfair Display",
}));
