import { Box, styled } from "@mui/material";

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: 550,
  transform: "translateX(-50%)",
  [theme.breakpoints.up("md")]: {
    top: "5%",
  },
}));

export const StyledModalWrapper = styled(Box)(({ theme }) => ({
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
