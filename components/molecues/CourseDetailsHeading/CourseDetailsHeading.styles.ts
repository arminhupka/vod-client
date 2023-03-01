import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

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
