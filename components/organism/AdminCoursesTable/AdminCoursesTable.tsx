import { Check } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import { AdminGetCoursesResponseDto } from "../../../api/api-types";
import { convertStatus } from "../../../utils/convertStatus";
import { formatPrice } from "../../../utils/formatPrice";

interface IProps {
  data: AdminGetCoursesResponseDto;
}

const AdminCoursesTable = ({ data }: IProps): ReactElement => (
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
          <TableCell>{c.featured ? <Check color='primary' /> : "-"}</TableCell>
          <TableCell>{convertStatus(c.status)}</TableCell>
          <TableCell>
            {c.publishedAt ? new Date(c.publishedAt).toLocaleDateString() : "-"}
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
);

export default AdminCoursesTable;
