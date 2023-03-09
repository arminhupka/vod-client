import { ReactElement } from "react";

import OrderProgress from "../../molecues/OrderProgress/OrderProgress";
import { StyledWrapper } from "./UserOrder.styles";

interface IProps {
  isLoading: boolean;
}

const UserOrder = ({ isLoading }: IProps): ReactElement => (
  <StyledWrapper>{isLoading && <OrderProgress />}</StyledWrapper>
);

export default UserOrder;
