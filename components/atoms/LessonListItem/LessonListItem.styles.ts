import { ListItem, ListItemProps, ListItemText, styled } from "@mui/material";

interface IStyledListItem extends ListItemProps {
  active?: boolean;
}

export const StyledListItem = styled(ListItem)<IStyledListItem>(
  ({ theme, active }) => ({
    color: !active ? theme.palette.text.primary : "#fff",
    background: !active ? "#fff" : theme.palette.primary.main,
    borderBottom: "1px solid",
    borderColor: theme.palette.grey[300],

    "&:hover": {
      background: !active ? theme.palette.grey[100] : "",
    },
  }),
);

export const StyledTime = styled(ListItemText)(({ theme }) => ({
  textAlign: "right",
  span: {
    fontSize: theme.typography.body2.fontSize,
  },
}));
