import { List } from "@mui/material";
import { ReactElement } from "react";

import {
  StyledDrawer,
  StyledListItem,
  StyledListItemText,
} from "./MainDrawer.styles";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const MainDrawer = ({ open, onClose }: IProps): ReactElement => (
  <StyledDrawer open={open} onClose={onClose}>
    <List disablePadding>
      <StyledListItem>
        <StyledListItemText>Strona główna</StyledListItemText>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemText>Kursy</StyledListItemText>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemText>Warsztaty</StyledListItemText>
      </StyledListItem>
    </List>
  </StyledDrawer>
);

export default MainDrawer;
