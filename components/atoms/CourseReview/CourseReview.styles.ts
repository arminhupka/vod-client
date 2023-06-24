import { alpha, Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid",
  borderBottomColor: alpha(theme.palette.primary.main, 0.1),
}));

export const StyledReviewHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const StyledReviewUserWrapper = styled(Box)(() => ({
  flex: 1,
}));

export const StyledUserName = styled(Typography)(() => ({
  fontFamily: "Playfair Display",
}));

export const StyledLastUpdate = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  color: theme.palette.grey[500],
}));

export const StyledReviewDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  lineHeight: "155%",
}));

export const StyledHeaderButtonsWrapper = styled(Box)(() => ({
  marginLeft: "auto",
}));
