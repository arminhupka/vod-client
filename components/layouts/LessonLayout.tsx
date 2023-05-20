import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";

import Header from "../organism/Header/Header";

interface IProps {
  children: ReactNode;
  withoutTopbar?: boolean;
  fullWidth?: boolean;
}

const LessonLayout = ({
  children,
  withoutTopbar,
  fullWidth,
}: IProps): ReactElement => (
  <Box display='flex' flexDirection='column' overflow='hidden' minHeight='100%'>
    <Header relative withoutTopbar={withoutTopbar} fullWidth={fullWidth} />
    <Box
      component='main'
      flex={1}
      bgcolor='red'
      height='100%'
      display='flex'
      flexDirection='column'>
      {children}
    </Box>
  </Box>
);

export default LessonLayout;
