import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
}));

export const StyledModalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 550,
  background: "#fff",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));

export const StyledHeaderWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.grey[200],
}));
export const StyledBodyWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));
