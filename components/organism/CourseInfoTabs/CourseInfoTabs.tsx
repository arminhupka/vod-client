import { Box, Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactElement, SyntheticEvent, useState } from "react";

import { GetCourseTopicsItemResponseDto } from "../../../api/api-types";
import CourseDescription from "../../molecues/CourseDescription/CourseDescription";
import TopicsList from "../../molecues/TopicsList/TopicsList";

interface IProps {
  description: string;
  topics: GetCourseTopicsItemResponseDto[];
}

const CourseInfoTabs = ({ description, topics }: IProps): ReactElement => {
  const [currentPanel, setCurrentPanel] = useState<number>(0);

  const handleChange = (e: SyntheticEvent, value: number) =>
    setCurrentPanel(value);

  return (
    <Box>
      <Box borderBottom={1} borderColor={grey["300"]}>
        <Tabs value={currentPanel} onChange={handleChange}>
          <Tab label='Opis kursu' id='0' />
          <Tab label='Lista lekcji' id='1' />
        </Tabs>
      </Box>
      <Box mt={4}>
        {currentPanel === 0 && <CourseDescription content={description} />}
        {currentPanel === 1 && <TopicsList topics={topics} />}
      </Box>
    </Box>
  );
};

export default CourseInfoTabs;
