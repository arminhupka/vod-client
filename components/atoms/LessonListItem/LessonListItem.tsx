import { Checkbox, ListItemText } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { StyledListItem } from "./LessonListItem.styles";

interface IProps {
  title: string;
  id: string;
  course: string;
}

const LessonListItem = ({ title, id, course }: IProps): ReactElement => (
  <StyledListItem>
    <Checkbox />
    <Link href={`/kursy/${course}/lekcja/${id}`} passHref>
      <ListItemText>{title}</ListItemText>
    </Link>
  </StyledListItem>
);

export default LessonListItem;
