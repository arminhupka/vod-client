import { List, ListItem } from "@mui/material";
import { ReactElement } from "react";

import {
  StyledHeading,
  StyledListText,
  StyledWrapper,
} from "./FooterNav.styles";

const FooterNav = (): ReactElement => (
  <StyledWrapper>
    <StyledHeading>Menu Name</StyledHeading>
    <List disablePadding>
      <ListItem dense disableGutters>
        <StyledListText>Menu 1</StyledListText>
      </ListItem>
      <ListItem dense disableGutters>
        <StyledListText>Menu 2</StyledListText>
      </ListItem>
      <ListItem dense disableGutters>
        <StyledListText>Menu 3</StyledListText>
      </ListItem>
      <ListItem dense disableGutters>
        <StyledListText>Menu 4</StyledListText>
      </ListItem>
    </List>
  </StyledWrapper>
);

export default FooterNav;
