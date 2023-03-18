import { Check } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

import {
  StyledHeading,
  StyledItemWrapper,
  StyledWrapper,
} from "./CourseDetailsSidebar.styles";

interface IProps {
  whatYouLearn: string[];
  courseIncludes: string[];
}

const CourseDetailsSidebar = ({
  whatYouLearn,
  courseIncludes,
}: IProps): ReactElement => (
  <StyledWrapper>
    <StyledItemWrapper>
      <StyledHeading as='h2'>Czego się nauczysz:</StyledHeading>
      <List>
        {whatYouLearn.map((item, idx) => (
          <ListItem
            disableGutters
            key={idx}
            sx={{ alignItems: "flex-start", gap: 2 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <Check color='primary' />
            </ListItemIcon>
            <Typography fontSize={14}>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </StyledItemWrapper>
    <Box my={2}>
      <Divider />
    </Box>
    <StyledItemWrapper>
      <StyledHeading as='h2'>Kurs zawiera:</StyledHeading>
      <List>
        {courseIncludes.map((item, idx) => (
          <ListItem
            disableGutters
            key={idx}
            sx={{ alignItems: "flex-start", gap: 2 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <Check color='primary' />
            </ListItemIcon>
            <Typography fontSize={14}>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </StyledItemWrapper>
  </StyledWrapper>
);

export default CourseDetailsSidebar;
