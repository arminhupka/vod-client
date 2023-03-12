import {
  Backdrop,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

import {
  StyledBody,
  StyledDrawer,
  StyledPageWrapper,
} from "./AdminLayout.styles";

interface IProps {
  children: ReactNode;
  isLoading?: boolean;
}

const AdminLayout = ({ children, isLoading }: IProps): ReactElement => (
  <>
    {isLoading && (
      <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color='primary' />
      </Backdrop>
    )}
    <StyledPageWrapper>
      <StyledDrawer>
        <List>
          <ListItem>
            <Link href='/admin/kursy' passHref>
              <Typography component='a'>Kursy</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/admin/zamowienia' passHref>
              <Typography component='a'>Zamówienia</Typography>
            </Link>
          </ListItem>
        </List>
      </StyledDrawer>
      <StyledBody>{children}</StyledBody>
    </StyledPageWrapper>
  </>
);

export default AdminLayout;
