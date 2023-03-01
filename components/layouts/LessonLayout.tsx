import { ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "../organism/Header/Header";

interface IProps {
  children: ReactNode;
  withoutTopbar?: boolean;
}

const LessonLayout = ({ children, withoutTopbar }: IProps): ReactElement => (
  <Box height='100%' display='flex' flexDirection='column'>
    <Header relative withoutTopbar={withoutTopbar} />
    <Box component='main' flex={1}>
      {children}
    </Box>
  </Box>
);

export default LessonLayout;
