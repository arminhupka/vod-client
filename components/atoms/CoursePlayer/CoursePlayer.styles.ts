import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  aspectRatio: "16/9",
  ".vimeo-player": {
    width: "100%",
    height: "100%",
    background: theme.palette.primary.light,
  },
}));
