import { ReactElement } from "react";
import {
  StyledListItem,
  StyledTime,
  StyledWrapper,
} from "./LessonsList.styles";
import { Checkbox, List, ListItemText } from "@mui/material";

const LessonsList = (): ReactElement => (
  <StyledWrapper>
    <List disablePadding>
      <StyledListItem>
        <Checkbox defaultChecked />
        <ListItemText>Lekcja 1</ListItemText>
        <StyledTime>4:51</StyledTime>
      </StyledListItem>
      <StyledListItem active>
        <Checkbox />
        <ListItemText>Lekcja 2</ListItemText>
        <StyledTime>4:51</StyledTime>
      </StyledListItem>
      <StyledListItem>
        <Checkbox />
        <ListItemText>Lekcja 3</ListItemText>
        <StyledTime>4:51</StyledTime>
      </StyledListItem>
    </List>
  </StyledWrapper>
);

export default LessonsList;
