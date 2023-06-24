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
import { useRouter } from "next/router";
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
} from "react";

import { FindAllInvoicesResponseDto } from "../../../api/api-types";
import { getInvoice } from "../../../api/orders";
import { formatPrice } from "../../../utils/formatPrice";

interface IProps {
  data: FindAllInvoicesResponseDto;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

const InvoicesTable = ({ data, setIsLoading }: IProps): ReactElement => {
  const router = useRouter();
  const currentQuery = router.query;

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

  const generateDate = useCallback((invNumber: number, date: Date) => {
    const invDay = new Date(date).getDay().toString().padStart(2, "0");
    const invMonth = new Date(date).getMonth() + 1;
    const invYear = new Date(date).getFullYear();

    return `${invNumber}/${invMonth}/${invYear}`;
  }, []);

  const handleInvoiceDownload = async (
    orderId: string,
    invoiceTitle: string,
  ): Promise<void> => {
    try {
      const { data } = await getInvoice(orderId);
      fileDownload(data, `BPA_${invoiceTitle}.pdf`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box mt={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Numer faktury</TableCell>
              <TableCell>Zamówienie</TableCell>
              <TableCell>Suma częściowa</TableCell>
              <TableCell>Podatek</TableCell>
              <TableCell>Razem</TableCell>
              <TableCell>Data płatności</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.docs.map((i) => (
              <TableRow key={i._id}>
                <TableCell>
                  {generateDate(i.invoiceNumber, new Date(i.paidAt))}
                </TableCell>
                <TableCell>{i.orderId.orderId}</TableCell>
                <TableCell>{formatPrice(i.subtotal, true)}</TableCell>
                <TableCell>{formatPrice(i.tax, true)}</TableCell>
                <TableCell>{formatPrice(i.total, true)}</TableCell>
                <TableCell>
                  {new Date(i.paidAt).toLocaleDateString("pl-PL")}
                </TableCell>
                <TableCell>
                  <Button
                    size='small'
                    variant='contained'
                    onClick={() =>
                      handleInvoiceDownload(
                        i.orderId._id,
                        generateDate(i.invoiceNumber, new Date(i.paidAt)),
                      )
                    }>
                    Pobierz fakture
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
          rowsPerPageOptions={[10, 15, 25, 50]}
          rowsPerPage={data.limit}
          labelRowsPerPage='Ilość wyników'
          onPageChange={(event, page) => handlePageChange(page + 1)}
          onRowsPerPageChange={handleLimitChange}
        />
      </TableContainer>
    </Box>
  );
};

export default InvoicesTable;
