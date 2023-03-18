import { Box, ListItemText, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled(Typography)(() => ({
  marginTop: 0,
  fontFamily: "Playfair Display",
}));

StyledHeading.defaultProps = {
  as: "h3",
};

export const StyledListText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.grey[400],
  transition: ".3s color",
  "&:hover": {
    color: theme.palette.grey[100],
  },
  span: {
    fontWeight: 500,
  },
}));
