import { Avatar, styled } from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: theme.palette.primary.main,
  fontSize: 14,
}));

StyledAvatar.defaultProps = {
  // as: "button",
};
