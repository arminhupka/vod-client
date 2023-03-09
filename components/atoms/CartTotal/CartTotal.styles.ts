import { alpha, Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  border: "1px solid",
  borderColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
}));

export const StyledList = styled("ul")(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  listStyle: "none",
  borderTop: "1px solid red",
  borderBottom: "1px solid red",
  borderColor: alpha(theme.palette.primary.main, 0.1),
}));

export const StyledListItem = styled("li")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

interface IProps {
  large?: boolean;
}

export const StyledListKey = styled("span")<IProps>(({ large, theme }) => ({
  fontWeight: large ? 600 : 500,
  fontSize: large ? theme.typography.h5.fontSize : "16",
}));

export const StyledListValue = styled("span")<IProps>(({ large, theme }) => ({
  fontSize: large ? theme.typography.h4.fontSize : "16",
  fontWeight: large ? 600 : "inherit",
  color: large ? theme.palette.primary.main : "inherit",
}));
