import { CircularProgress } from "@mui/material";
import { ReactElement } from "react";

import { StyledWrapper } from "./Loading.styles";

const Loading = (): ReactElement => (
  <StyledWrapper>
    <CircularProgress size={50} />
  </StyledWrapper>
);

export default Loading;
