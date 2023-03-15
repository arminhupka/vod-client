import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";

export const StyledPageWrapper = styled(Box)(() => ({}));

export const StyledBody = styled(Box)(({ theme }) => ({
  marginLeft: 280,
  padding: theme.spacing(4),
}));

StyledBody.defaultProps = {
  component: "main",
};

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  background: "red",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 280,
    background: theme.palette.grey[100],
  },
}));

StyledDrawer.defaultProps = {
  variant: "permanent",
};

export const StyledList = styled(List)(() => ({}));

StyledList.defaultProps = {
  disablePadding: true,
};

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

StyledListItem.defaultProps = {
  disablePadding: true,
  disableGutters: true,
};

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(2)}`,
  color: theme.palette.common.black,
  fontWeight: 700,
}));

StyledListItemText.defaultProps = {
  as: "a",
};
