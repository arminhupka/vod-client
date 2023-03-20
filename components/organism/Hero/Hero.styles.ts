import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  height: 350,
  background: theme.palette.primary.main,
  overflow: "hidden",
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    height: 550,
  },
}));
