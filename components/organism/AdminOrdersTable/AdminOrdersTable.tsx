import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import fileDownload from "js-file-download";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";

import { GetAdminOrdersResponseDto } from "../../../api/api-types";
import { getInvoice } from "../../../api/orders";
import { formatPrice } from "../../../utils/formatPrice";
import OrderStatus, {
  OrderStatusEnum,
} from "../../atoms/OrderStatus/OrderStatus";

interface IProps {
  data: GetAdminOrdersResponseDto;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

const AdminOrdersTable = ({ data, setIsLoading }: IProps): ReactElement => {
  const router = useRouter();
  const currentQuery = router.query;

  const handleInvoiceDownload = async (orderId: string): Promise<void> => {
    try {
      const { data } = await getInvoice(orderId);
      fileDownload(data, "faktura.pdf");
    } catch (err) {
      console.error(err);
    }
  };

  const handlePageChange = async (page: number) => {
    if (setIsLoading) {
      setIsLoading(true);
    }
    router.query.page = page.toString();

    await router
      .push(router)
      .finally(() => setIsLoading && setIsLoading(false));
  };

  const handleLimitChange = async (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (setIsLoading) {
      setIsLoading(true);
    }

    router.query.limit = e.target.value.toString();

    await router
      .push(router)
      .finally(() => setIsLoading && setIsLoading(false));
  };

  return (
    <Box mt={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID zamówienia</TableCell>
              <TableCell>Numer zamówienia</TableCell>
              <TableCell>Użytkownik</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Łącznie</TableCell>
              <TableCell>Data</TableCell>
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
                <TableCell>{o.user.email}</TableCell>
                <TableCell>
                  <OrderStatus status={o.status as OrderStatusEnum} />
                </TableCell>
                <TableCell>{formatPrice(o.totalSum)}</TableCell>
                <TableCell>
                  {new Date(o.createdAt).toLocaleDateString("pl-PL")} &nbsp;
                  {new Date(o.createdAt).toLocaleTimeString("pl-PL")}
                </TableCell>
                <TableCell>
                  <Link href={`/admin/zamowienia/${o._id}`} passHref>
                    <Button component='a' size='small'>
                      Szczegóły
                    </Button>
                  </Link>
                  <Button
                    size='small'
                    variant='contained'
                    disabled={o.status !== OrderStatusEnum.COMPLETE}
                    onClick={() => handleInvoiceDownload(o._id)}>
                    Faktura
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component='div'
          count={data.totalDocs}
          page={data.page - 1}
          rowsPerPage={data.limit}
          onPageChange={(event, page) => handlePageChange(page + 1)}
          onRowsPerPageChange={handleLimitChange}
        />
      </TableContainer>
    </Box>
  );
};

export default AdminOrdersTable;
