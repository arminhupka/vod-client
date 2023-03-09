import { Checkbox, ListItemText } from "@mui/material";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

import { client } from "../../../api/client";
import { useAccountContext } from "../../../providers/AccountProvider";
import { StyledListItem } from "./LessonListItem.styles";

interface IProps {
  title: string;
  id: string;
  course: string;
}

const LessonListItem = ({ title, id, course }: IProps): ReactElement => {
  const { watched } = useAccountContext();
  const [shouldBeChecked, setShouldBeChecked] = useState<boolean>(false);

  const handleSetWatched = async () => {
    setShouldBeChecked(!shouldBeChecked);
    await client.put(`/lessons/${id}/watched`, {}, { withCredentials: true });
  };

  useEffect(() => {
    if (watched.find((item) => item === id)) {
      setShouldBeChecked(true);
    }
  }, [id, watched]);

  return (
    <StyledListItem>
      <Checkbox onChange={handleSetWatched} checked={shouldBeChecked} />
      <Link href={`/kursy/${course}/lekcja/${id}`} passHref>
        <ListItemText>{title}</ListItemText>
      </Link>
    </StyledListItem>
  );
};

export default LessonListItem;
