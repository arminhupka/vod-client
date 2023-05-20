import { Box, Chip, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  gap: theme.spacing(2),
  background: theme.palette.grey[50],
}));

export const StyledHeading = styled(Typography)(() => ({
  margin: 0,
  fontFamily: "Playfair Display",
}));

StyledHeading.defaultProps = {
  as: "h2",
};

export const StyledCoverWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 112,
  aspectRatio: "16/9",
  borderRadius: theme.spacing(0.5),
  overflow: "hidden",
}));

export const StyledInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
}));

export const StyledChipWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledChip = styled(Chip)(() => ({}));

StyledChip.defaultProps = {
  color: "primary",
};

export const StyledButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));
