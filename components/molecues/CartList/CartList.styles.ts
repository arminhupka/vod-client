import { Box, styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledTableWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));

export const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
