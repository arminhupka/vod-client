import {
  AccordionDetails,
  AccordionSummary,
  Box,
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
  lessonsCount: number;
}

const TopicAccordion = ({
  topic,
  course,
  lessonsCount,
}: IProps): ReactElement => (
  <StyledAccordion square elevation={0} disableGutters>
    <AccordionSummary>
      <Box
        width='100%'
        display='flex'
        justifyContent='space-between'
        alignItems='center'>
        <Typography>{topic.title}</Typography>
        <Typography variant='body2' fontWeight={600}>
          {lessonsCount} lekcji
        </Typography>
      </Box>
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
