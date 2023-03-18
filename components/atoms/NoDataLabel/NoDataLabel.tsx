import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  message: string;
}

const NoDataLabel = ({ message }: IProps): ReactElement => (
  <Box>
    <Typography component='h3' fontFamily='Playfair Display' textAlign='center'>
      {message}
    </Typography>
  </Box>
);

export default NoDataLabel;
