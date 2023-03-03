import { Box, styled } from "@mui/material";

export const StyledModalWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  maxWidth: 550,
  top: "5%",
  left: "50%",
  background: "#fff",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  transform: "translateX(-50%)",
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
