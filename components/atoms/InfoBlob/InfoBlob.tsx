import { ReactElement } from "react";
import { StyledText, StyledWrapper } from "./InfoBlob.styles";

interface IProps {
  message: string;
}

const InfoBlob = ({ message }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledText>{message}</StyledText>
  </StyledWrapper>
);

export default InfoBlob;
