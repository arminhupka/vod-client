import {
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import LessonListItem from "../LessonListItem/LessonListItem";
import { StyledAccordion } from "./TopicAccordion.styles";

interface IProps {
  course: string;
  topic: GetCourseTopicsItemResponseDto;
}

const TopicAccordion = ({ topic, course }: IProps): ReactElement => (
  <StyledAccordion>
    <AccordionSummary>
      <Typography>{topic.title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: 0 }}>
      <List disablePadding>
        {topic.lessons.map((l) => (
          <LessonListItem
            key={l._id}
            course={course}
            id={l._id}
            title={l.title}
          />
        ))}
      </List>
    </AccordionDetails>
  </StyledAccordion>
);

export default TopicAccordion;
