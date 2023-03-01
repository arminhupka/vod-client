import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  display: "flex",
  justifyContent: "center",
}));
