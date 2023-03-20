import { alpha, Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: alpha(theme.palette.primary.main, 0.02),
  borderColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
}));

export const StyledBlockquote = styled("blockquote")(({ theme }) => ({
  margin: 0,
  display: "flex",
  flexDirection: "column",
}));

export const StyledCite = styled("cite")(({ theme }) => ({
  paddingTop: theme.spacing(1),
  marginTop: theme.spacing(1),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.grey[800],
  borderTop: "1px solid",
  borderColor: theme.palette.primary.light,
}));
