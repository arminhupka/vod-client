import { Box, Link, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled(Typography)(() => ({
  marginTop: 0,
  fontFamily: "Playfair Display",
}));

StyledHeading.defaultProps = {
  as: "h3",
};

export const StyledListLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[400],
  transition: ".3s color",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.grey[100],
  },
  span: {
    fontWeight: 500,
  },
}));

StyledListLink.defaultProps = {};
