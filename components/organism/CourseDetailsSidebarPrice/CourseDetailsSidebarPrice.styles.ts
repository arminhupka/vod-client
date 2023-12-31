import { alpha, Box, styled, Typography, TypographyProps } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));

export const StyledInnerWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  background: alpha(theme.palette.secondary.main, 0.02),
  borderColor: alpha(theme.palette.primary.main, 0.1),
}));

export const StyledPricesWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)}`,
  display: "flex",
  alignItems: "flex-end",
  gap: 8,
}));

interface IStyledPrice extends TypographyProps {
  sale?: boolean;
}

export const StyledPrice = styled(Typography)<IStyledPrice>(
  ({ theme, sale }) => ({
    fontSize: !sale ? 32 : 24,
    fontWeight: 700,
    lineHeight: !sale ? "32px" : "24px",
    color: !sale ? theme.palette.text.primary : theme.palette.text.disabled,
    textDecoration: !sale ? "none" : "linethrough",
  }),
);
