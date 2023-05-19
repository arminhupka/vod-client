import { PlayArrow } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

import { GetUserCoursesDto } from "../../../api/api-types";

interface IProps {
  courses: GetUserCoursesDto[];
}

const CoursesTable = ({ courses }: IProps): ReactElement => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Tytuł</TableCell>
        <TableCell>Data wygaśniecia</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {!courses.length && (
        <TableRow>
          <TableCell colSpan={3}>
            <Typography variant='body2' textAlign='center'>
              Nie posiadasz żadnego aktywanego kursu
            </Typography>
          </TableCell>
        </TableRow>
      )}
      {courses.length > 0 &&
        courses.map((item) => (
          <TableRow key={item.course?._id}>
            <TableCell>{item.course?.name}</TableCell>
            <TableCell>
              {new Date(item.availableUntil).toLocaleDateString("pl-PL")}
            </TableCell>
            <TableCell>
              <Button startIcon={<PlayArrow />}>Zobacz kurs</Button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
);

export default CoursesTable;
