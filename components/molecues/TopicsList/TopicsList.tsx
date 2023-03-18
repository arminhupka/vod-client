import { ExpandMore } from "@mui/icons-material";
import { List, ListItem, ListItemText } from "@mui/material";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import NoDataLabel from "../../atoms/NoDataLabel/NoDataLabel";
import {
  StyledAccordion,
  StyledDetails,
  StyledHeading,
  StyledSummary,
  StyledTopicName,
} from "./TopicsList.styles";

interface IProps {
  topics: GetCourseTopicsItemResponseDto[];
}

const TopicsList = ({ topics }: IProps) => (
  <div>
    {!topics.length && <NoDataLabel message='Brak dodanych lekcji' />}
    {!!topics.length && (
      <>
        <StyledHeading>Lista tematów i lekcji</StyledHeading>
        {topics.map((t) => (
          <StyledAccordion key={t._id} elevation={0} square>
            <StyledSummary expandIcon={<ExpandMore />}>
              <StyledTopicName fontWeight={700}>{t.title}</StyledTopicName>
            </StyledSummary>
            <StyledDetails>
              <List disablePadding>
                {!!t.lessons.length &&
                  t.lessons.map((l) => (
                    <ListItem key={l._id} disableGutters>
                      <ListItemText>{l.title}</ListItemText>
                    </ListItem>
                  ))}
              </List>
            </StyledDetails>
          </StyledAccordion>
        ))}
      </>
    )}
  </div>
);

export default TopicsList;
