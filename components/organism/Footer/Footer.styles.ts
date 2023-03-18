import { alpha, Box, styled, Typography } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  color: theme.palette.common.white,
  background: theme.palette.common.black,
}));

export const StyledMain = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(8)} 0`,
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.common.white, 0.2),
}));

export const StyledCopy = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
}));

export const StyledCopyText = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: theme.typography.fontWeightBold,
}));
