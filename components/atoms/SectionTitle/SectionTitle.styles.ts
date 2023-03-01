import { alpha, Box, Link, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.2),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontSize: 36,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));
