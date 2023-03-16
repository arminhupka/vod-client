import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement } from "react";

import { GetOrdersResponseDto } from "../../../api/api-types";
import { formatPrice } from "../../../utils/formatPrice";

interface IProps {
  data: GetOrdersResponseDto;
}

enum OrderStatus {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETE = "COMPLETE",
  CANCELED = "CANCELED",
  REFUNDED = "REFUNDED",
}

const AdminOrdersTable = ({ data }: IProps): ReactElement => {
  const generateStatusChip = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.NEW: {
        return <Chip label='Nowy' color='info' />;
      }

      case OrderStatus.IN_PROGRESS: {
        return <Chip label='Przetwarzanie' color='warning' />;
      }

      case OrderStatus.COMPLETE: {
        return <Chip label='Zrealizowane' color='success' />;
      }

      case OrderStatus.CANCELED: {
        return <Chip label='Anulowane' color='warning' />;
      }

      case OrderStatus.REFUNDED: {
        return <Chip label='Zwrócone' color='error' />;
      }
    }
  };

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID zamówienia</TableCell>
            <TableCell>Numer zamówienia</TableCell>
            <TableCell>Użytkownik</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Łącznie</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.docs.map((o) => (
            <TableRow key={o._id}>
              <TableCell>{o.orderNumber}</TableCell>
              <TableCell>{o.orderId}</TableCell>
              <TableCell>
                {o.billing.firstName} {o.billing.lastName}
              </TableCell>
              <TableCell>
                {generateStatusChip(o.status as OrderStatus)}
              </TableCell>
              <TableCell>{formatPrice(o.totalSum)}</TableCell>
              <TableCell>
                <Button size='small'>Szczegóły</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AdminOrdersTable;
