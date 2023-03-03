import { alpha, Box, ListItem, ListItemProps, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(5),
  borderRight: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.2),
}));

interface IStyledListItem extends ListItemProps {
  active?: boolean;
}

export const StyledListItem = styled(ListItem)<IStyledListItem>(
  ({ theme, active }) => ({
    borderRadius: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      background: alpha(theme.palette.primary.main, 0.1),
    },
    ...(active && {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.main,
      },
    }),
  }),
);
