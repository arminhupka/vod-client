import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0.5),
  background: theme.palette.primary.main,
  borderRadius: theme.spacing(0.5),
}));

export const StyledText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 12,
  fontWeight: 500,
}));
