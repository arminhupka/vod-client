import { ReactElement, SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CourseDescription from "../../molecues/CourseDescription/CourseDescription";

const CourseInfoTabs = (): ReactElement => {
  const [currentPanel, setCurrentPanel] = useState<number>(0);

  const handleChange = (e: SyntheticEvent, value: number) =>
    setCurrentPanel(value);

  return (
    <Box>
      <Box borderBottom={1}>
        <Tabs value={currentPanel} onChange={handleChange}>
          <Tab label='Opis kursu' id='0' />
          <Tab label='Lista lekcji' id='1' />
        </Tabs>
      </Box>
      <Box mt={4}>{currentPanel === 0 && <CourseDescription />}</Box>
    </Box>
  );
};

export default CourseInfoTabs;
