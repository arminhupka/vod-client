import { alpha, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: alpha(theme.palette.grey["50"], 0.2),
  borderRadius: theme.spacing(0),
  "&:hover": {
    color: theme.palette.primary.main,
    background: alpha(theme.palette.grey["50"], 1),
  },
}));
