import { List, ListItem, Typography } from "@mui/material";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import {
  StyledAccordion,
  StyledDetails,
  StyledSummary,
} from "./TopicsList.styles";

interface IProps {
  topics: GetCourseTopicsItemResponseDto[];
}

const TopicsList = ({ topics }: IProps) => (
  <div>
    {topics.map((t) => (
      <StyledAccordion key={t._id} elevation={0} square>
        <StyledSummary>
          <Typography fontWeight={700}>{t.title}</Typography>
        </StyledSummary>
        <StyledDetails>
          <List disablePadding>
            {!!t.lessons.length &&
              t.lessons.map((l) => (
                <ListItem key={l._id} disableGutters>
                  {l.title}
                </ListItem>
              ))}
          </List>
        </StyledDetails>
      </StyledAccordion>
    ))}
  </div>
);

export default TopicsList;
