import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: "hidden",
}));
