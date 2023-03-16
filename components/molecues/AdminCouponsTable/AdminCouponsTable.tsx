import { Check } from "@mui/icons-material";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement } from "react";

import { CouponsListResponseDto } from "../../../api/api-types";

interface IProps {
  data: CouponsListResponseDto;
}

const AdminCouponsTable = ({ data }: IProps): ReactElement => (
  <Box>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Kod</TableCell>
          <TableCell>Kurs</TableCell>
          <TableCell>Użyty</TableCell>
          <TableCell>Dni</TableCell>
          <TableCell>Ważny do</TableCell>
          <TableCell>Utworzony</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.docs.map((c) => (
          <TableRow key={c._id}>
            <TableCell>{c.code}</TableCell>
            <TableCell>{c.course.name}</TableCell>
            <TableCell>{c.used ? <Check color='primary' /> : "-"}</TableCell>
            <TableCell>
              <Chip label={`${c.courseAvailableDays} dni`} />
            </TableCell>
            <TableCell>
              {new Date(c.availableUntil).toLocaleDateString("pl-PL")}
            </TableCell>
            <TableCell>
              {new Date(c.createdAt).toLocaleDateString("pl-PL")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
);

export default AdminCouponsTable;
