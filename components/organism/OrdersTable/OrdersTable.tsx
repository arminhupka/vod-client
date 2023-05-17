import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { GetOrdersResponseDto } from "../../../api/api-types";
import { formatPrice } from "../../../utils/formatPrice";
import OrderStatus, {
  OrderStatusEnum,
} from "../../atoms/OrderStatus/OrderStatus";

interface IProps {
  data: GetOrdersResponseDto;
}

const OrdersTable = ({ data }: IProps): ReactElement => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Numer zamówienia</TableCell>
          <TableCell>Całkowity koszt</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Data płatności</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {!data.docs.length && (
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant='body2' textAlign='center'>
                Nie masz jeszcze żadnych zamówień
              </Typography>
            </TableCell>
          </TableRow>
        )}
        {data.docs.map((d) => (
          <TableRow key={d._id}>
            <TableCell>{d.orderId}</TableCell>
            <TableCell>{formatPrice(d.totalSum)}</TableCell>
            <TableCell>
              <OrderStatus status={d.status as OrderStatusEnum} />
            </TableCell>
            <TableCell>
              {new Date(Date.now()).toLocaleDateString("pl-PL")}
            </TableCell>
            <TableCell>
              <Box display='flex' gap={1}>
                <Link href={`/konto/zamowienia/${d._id}`} passHref>
                  <Button component='div' size='small'>
                    Szczegóły
                  </Button>
                </Link>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default OrdersTable;
