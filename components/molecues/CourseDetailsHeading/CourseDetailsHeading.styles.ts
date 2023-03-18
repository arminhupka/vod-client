import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.grey[300],
}));

export const StyledBlobsWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
}));

export const StyledName = styled(Typography)(() => ({
  fontSize: 42,
  fontFamily: "Playfair Display",
  fontWeight: 600,
}));
