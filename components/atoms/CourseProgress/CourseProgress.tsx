import { LinearProgress, Typography } from "@mui/material";
import { ReactElement } from "react";

import { StyledWrapper } from "./CourseProgress.styles";

interface IProps {
  value: number;
}

const CourseProgress = ({ value }: IProps): ReactElement => (
  <StyledWrapper mb={2}>
    <Typography mb={1} fontFamily='Playfair Display'>
      Twój postęp w kursie: {value}%
    </Typography>
    <LinearProgress
      value={value}
      variant='determinate'
      sx={{
        height: 10,
        borderRadius: 2,
      }}
    />
  </StyledWrapper>
);

export default CourseProgress;
