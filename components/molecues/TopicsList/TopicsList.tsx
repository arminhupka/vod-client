import { ExpandMore } from "@mui/icons-material";
import { List } from "@mui/material";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import NoDataLabel from "../../atoms/NoDataLabel/NoDataLabel";
import {
  StyledAccordion,
  StyledDetails,
  StyledHeading,
  StyledListItem,
  StyledListItemText,
  StyledSummary,
  StyledSummaryText,
  StyledSummaryWrapper,
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
          <StyledAccordion key={t._id} elevation={0} square disableGutters>
            <StyledSummary expandIcon={<ExpandMore />}>
              <StyledSummaryWrapper>
                <StyledTopicName fontWeight={700}>{t.title}</StyledTopicName>
                <StyledSummaryText>{t.summary}</StyledSummaryText>
              </StyledSummaryWrapper>
            </StyledSummary>
            <StyledDetails>
              <List disablePadding>
                {!!t.lessons.length &&
                  t.lessons.map((l, i) => (
                    <StyledListItem key={l._id}>
                      <StyledListItemText>
                        {i + 1}. {l.title}
                      </StyledListItemText>
                    </StyledListItem>
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
