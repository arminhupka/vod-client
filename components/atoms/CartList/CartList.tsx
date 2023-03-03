import { Box } from "@mui/material";
import { ReactElement } from "react";

import { CourseListItem } from "../../../api/api-types";

interface IProps {
  items: CourseListItem[];
}

const CartList = ({ items }: IProps): ReactElement => (
  <Box>
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  </Box>
);

export default CartList;
