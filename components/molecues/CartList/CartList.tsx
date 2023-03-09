import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";
import { formatPrice } from "../../../utils/formatPrice";
import CartItem from "../../atoms/CartItem/CartItem";
import {
  StyledTableHeadCell,
  StyledTableWrapper,
  StyledWrapper,
} from "./CartList.styles";

interface IProps {
  courses: CourseListItem[];
}

const CartList = ({ courses }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledTableWrapper>
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell />
            <StyledTableHeadCell>Tytuł</StyledTableHeadCell>
            <StyledTableHeadCell>Dostęp na</StyledTableHeadCell>
            <StyledTableHeadCell>Cena</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              name={item.name}
              courseSlug={item.slug}
              days={item.daysAvailable}
              price={formatPrice(item.salePrice || item.price)}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableWrapper>
  </StyledWrapper>
);

export default CartList;
