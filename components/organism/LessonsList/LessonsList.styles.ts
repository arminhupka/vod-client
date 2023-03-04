import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "#f8f8f8",
  borderLeft: "1px solid",
  borderColor: theme.palette.grey[300],
}));
