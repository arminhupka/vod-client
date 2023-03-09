import { List } from "@mui/material";
import { ReactElement } from "react";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import TopicAccordion from "../../atoms/TopicAccordion/TopicAccordion";
import { StyledWrapper } from "./LessonsList.styles";

interface IProps {
  topics: GetCourseTopicsItemResponseDto[];
  course: string;
}

const LessonsList = ({ topics, course }: IProps): ReactElement => (
  <StyledWrapper>
    <List disablePadding>
      {topics.map((item) => (
        <TopicAccordion
          course={course}
          key={item._id}
          topic={item}
          lessonsCount={item.lessons.length}
        />
      ))}
    </List>
  </StyledWrapper>
);

export default LessonsList;
