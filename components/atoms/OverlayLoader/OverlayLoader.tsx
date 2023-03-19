import { Backdrop, CircularProgress } from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  open: boolean;
}

const OverlayLoader = ({ open }: IProps): ReactElement => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}>
    <CircularProgress color='inherit' />
  </Backdrop>
);

export default OverlayLoader;
