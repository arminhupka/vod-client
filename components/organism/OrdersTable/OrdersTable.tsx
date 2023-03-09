import { Receipt as InvoiceIcon } from "@mui/icons-material";
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
              {new Date(d.paidAt).toLocaleDateString("pl-PL")}
            </TableCell>
            <TableCell>
              <Box display='flex' gap={1}>
                <Link href={`/konto/zamowienia/${d._id}`} passHref>
                  <Button component='div' size='small'>
                    Szczegóły
                  </Button>
                </Link>
                <Button
                  startIcon={<InvoiceIcon />}
                  variant='contained'
                  size='small'>
                  Faktura
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default OrdersTable;
