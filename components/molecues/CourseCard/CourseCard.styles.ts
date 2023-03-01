import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.grey["200"],
  borderRadius: theme.spacing(1),
  background: "#fff",
  boxShadow: theme.shadows[9],
}));

export const StyledCoverWrapper = styled(Box)(() => ({
  height: 200,
  position: "relative",
}));

export const StyledCover = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const StyledInfoWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: 22,
  fontWeight: 600,
  fontFamily: "Playfair Display",
}));

export const StyledBlobsWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "flex-start",
  zIndex: 1,
  gap: 8,
}));

export const StyledButtonWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid",
  borderTopColor: theme.palette.grey["200"],
  gap: 8,
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
}));

export const StyledPrice = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 700,
}));
