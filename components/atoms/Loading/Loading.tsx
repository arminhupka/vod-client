import { ReactElement } from "react";
import { StyledWrapper } from "./Loading.styles";
import { CircularProgress } from "@mui/material";

const Loading = (): ReactElement => (
  <StyledWrapper>
    <CircularProgress size={50} />
  </StyledWrapper>
);

export default Loading;
