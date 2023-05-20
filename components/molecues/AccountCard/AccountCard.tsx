import { ReactElement } from "react";

import { StyledName, StyledWrapper } from "./AccountCard.styles";

const AccountCard = (): ReactElement => (
  <StyledWrapper>
    <StyledName>Card Name</StyledName>
  </StyledWrapper>
);

export default AccountCard;
