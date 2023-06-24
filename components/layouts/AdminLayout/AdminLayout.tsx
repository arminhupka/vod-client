import { Backdrop, CircularProgress } from "@mui/material";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

import {
  StyledBody,
  StyledDrawer,
  StyledList,
  StyledListItem,
  StyledListItemText,
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
        <StyledList>
          <StyledListItem>
            <Link href='/admin/kursy' passHref>
              <StyledListItemText>Kursy</StyledListItemText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/admin/zamowienia' passHref>
              <StyledListItemText>Zamówienia</StyledListItemText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/admin/faktury' passHref>
              <StyledListItemText>Faktury</StyledListItemText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/admin/kupony' passHref>
              <StyledListItemText>Kupony</StyledListItemText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/admin/uzytkownicy' passHref>
              <StyledListItemText>Użytkownicy</StyledListItemText>
            </Link>
          </StyledListItem>
        </StyledList>
      </StyledDrawer>
      <StyledBody>{children}</StyledBody>
    </StyledPageWrapper>
  </>
);

export default AdminLayout;
