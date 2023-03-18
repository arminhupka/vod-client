import { Box, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
}));

StyledDescription.defaultProps = {
  variant: "body2",
};
