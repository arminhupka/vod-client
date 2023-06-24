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
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";

import { UsersListResponse } from "../../../api/api-types";

interface IProps {
  data: UsersListResponse;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

const UsersTable = ({ data, setIsLoading }: IProps): ReactElement => {
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

  return (
    <Box mt={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Imię i nazwsko</TableCell>
              <TableCell>Aktywne kursy</TableCell>
              <TableCell>Aktywny</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.docs.map((u) => (
              <TableRow key={u._id}>
                <TableCell>{u.email}</TableCell>
                <TableCell>
                  {u.billing.firstName} {u.billing.lastName}
                </TableCell>
                <TableCell>{u.courses}</TableCell>
                <TableCell>{u.activated ? "Tak" : "Nie"}</TableCell>
                <TableCell>
                  <Button size='small' variant='contained'>
                    Szczegóły
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

export default UsersTable;
