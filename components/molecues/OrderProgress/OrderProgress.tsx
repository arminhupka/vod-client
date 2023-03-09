import { CircularProgress } from "@mui/material";
import { ReactElement } from "react";

import { StyledWrapper } from "./OrderProgress.styles";

const OrderProgress = (): ReactElement => (
  <StyledWrapper>
    <CircularProgress variant='indeterminate' color='primary' size={150} />
  </StyledWrapper>
);

export default OrderProgress;
