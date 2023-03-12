import { alpha, Box, Drawer, styled } from "@mui/material";

export const StyledPageWrapper = styled(Box)(() => ({}));

export const StyledBody = styled(Box)(({ theme }) => ({
  marginLeft: 280,
  padding: theme.spacing(4),
}));

StyledBody.defaultProps = {
  component: "main",
};

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  background: "red",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 280,
    background: alpha(theme.palette.primary.main, 0.1),
  },
}));

StyledDrawer.defaultProps = {
  variant: "permanent",
};
