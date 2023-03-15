import { ListItem, ListItemText, styled, Typography } from "@mui/material";

export const StyledHeading = styled(Typography)(() => ({}));

StyledHeading.defaultProps = {
  variant: "body2",
  fontWeight: 600,
};

export const StyledListItem = styled(ListItem)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
}));

StyledListItem.defaultProps = {
  disableGutters: true,
};

export const StyledButton = styled("button")(({ theme }) => ({
  display: "flex",
  color: theme.palette.primary.main,
  background: "transparent",
  border: 0,
  cursor: "pointer",
}));

export const StyledListText = styled(ListItemText)(({ theme }) => ({
  "*": {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 600,
  },
}));
