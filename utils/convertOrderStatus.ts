import { OrderStatusEnum } from "../components/atoms/OrderStatus/OrderStatus";

export const convertOrderStatus = (status: OrderStatusEnum): string => {
  switch (status) {
    case OrderStatusEnum.NEW: {
      return "Nowy";
      break;
    }

    case OrderStatusEnum.IN_PROGRESS: {
      return "Przetwarzanie";
      break;
    }

    case OrderStatusEnum.COMPLETE: {
      return "Zrealizowane";
      break;
    }

    case OrderStatusEnum.CANCELED: {
      return "Anulowane";
      break;
    }

    case OrderStatusEnum.REFUNDED: {
      return "Zwrócone";
      break;
    }
  }
};
