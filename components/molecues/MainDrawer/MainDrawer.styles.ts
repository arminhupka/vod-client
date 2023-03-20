import { Drawer, ListItem, ListItemText, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  background: theme.palette.grey[100],
  ".MuiDrawer-paper": {
    width: 280,
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  position: "relative",
  background: theme.palette.common.white,
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.grey[300],
  transition: ".3s background",
  "&:hover": {
    background: theme.palette.grey[50],
  },
  "&:hover::before": {
    background: theme.palette.primary.light,
    width: 10,
  },
  "&::before": {
    transition: ".3s width",
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 5,
    display: "block",
    background: theme.palette.primary.main,
  },
}));

export const StyledListItemText = styled(ListItemText)(() => ({
  span: {
    fontFamily: "Playfair Display",
  },
}));
