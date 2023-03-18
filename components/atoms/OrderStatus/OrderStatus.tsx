import { Chip } from "@mui/material";
import { ReactElement } from "react";

export enum OrderStatusEnum {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETE = "COMPLETE",
  CANCELED = "CANCELED",
  REFUNDED = "REFUNDED",
}

interface IProps {
  status: OrderStatusEnum;
}

const OrderStatus = ({ status }: IProps): ReactElement => {
  switch (status) {
    case OrderStatusEnum.NEW: {
      return <Chip label='Nowy' color='info' />;
    }

    case OrderStatusEnum.IN_PROGRESS: {
      return <Chip label='Przetwarzanie' color='warning' />;
    }

    case OrderStatusEnum.COMPLETE: {
      return <Chip label='Zrealizowane' color='success' />;
    }

    case OrderStatusEnum.CANCELED: {
      return <Chip label='Anulowane' color='error' />;
    }

    case OrderStatusEnum.REFUNDED: {
      return <Chip label='Zwrócone' color='error' />;
    }
  }
};

export default OrderStatus;
