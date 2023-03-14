import { Check } from "@mui/icons-material";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { AdminGetCoursesResponseDto } from "../../../api/api-types";
import { convertStatus } from "../../../utils/convertStatus";
import { formatPrice } from "../../../utils/formatPrice";

interface IProps {
  data: AdminGetCoursesResponseDto;
}

const AdminCoursesTable = ({ data }: IProps): ReactElement => {
  const router = useRouter();
  const currentQuery = router.query;

  const handlePageChange = async (page: number) => {
    await router.push(router.asPath, {
      query: {
        ...currentQuery,
        page,
      },
    });
    router.reload();
  };

  const handleLimitChange = async (limit: number) => {
    await router.push(router.asPath, {
      query: {
        ...currentQuery,
        limit,
      },
    });
    router.reload();
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell>Cena</TableCell>
              <TableCell>Cena promocyjna</TableCell>
              <TableCell>Polecany</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Opublikowano</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.docs.map((c) => (
              <TableRow key={c._id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{formatPrice(c.price) || "-"}</TableCell>
                <TableCell>{formatPrice(c.salePrice) || "-"}</TableCell>
                <TableCell>
                  {c.featured ? <Check color='primary' /> : "-"}
                </TableCell>
                <TableCell>{convertStatus(c.status)}</TableCell>
                <TableCell>
                  {c.publishedAt
                    ? new Date(c.publishedAt).toLocaleDateString("pl-PL")
                    : "-"}
                </TableCell>
                <TableCell>
                  <Link href={`/admin/kursy/${c._id}`} passHref>
                    <Button component='a' size='small' variant='outlined'>
                      Szczegóły
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        rowsPerPageOptions={[5, 10, 15]}
        count={data.totalDocs}
        rowsPerPage={data.limit}
        page={data.page - 1}
        onPageChange={(event, page) => handlePageChange(page + 1)}
        onRowsPerPageChange={(event) => handleLimitChange(+event.target.value)}
      />
    </Box>
  );
};

export default AdminCoursesTable;
