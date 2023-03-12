import { List, ListItemText } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { useAccountContext } from "../../../providers/AccountProvider";
import { StyledListItem, StyledWrapper } from "./AccountSidebar.styles";

const AccountSidebar = (): ReactElement => {
  const router = useRouter();
  const { user } = useAccountContext();

  return (
    <StyledWrapper>
      <List>
        <StyledListItem active={router.pathname == "/konto"}>
          <Link href='/konto' passHref>
            <ListItemText>Pulpit</ListItemText>
          </Link>
        </StyledListItem>
        <StyledListItem active={router.pathname.includes("konto/kursy")}>
          <Link href='/konto/kursy' passHref>
            <ListItemText>Kursy</ListItemText>
          </Link>
        </StyledListItem>
        <StyledListItem active={router.pathname.includes("/konto/zamowienia")}>
          <Link href='/konto/zamowienia' passHref>
            <ListItemText>Zamówienia</ListItemText>
          </Link>
        </StyledListItem>
        <StyledListItem active={router.pathname === "/konto/profil"}>
          <Link href='/konto/profil' passHref>
            <ListItemText>Profil</ListItemText>
          </Link>
        </StyledListItem>
        {user?.role === "ADMIN" && (
          <StyledListItem active={router.pathname === "/konto/profil"}>
            <Link href='/admin' passHref>
              <ListItemText>Panel Admina</ListItemText>
            </Link>
          </StyledListItem>
        )}
      </List>
    </StyledWrapper>
  );
};

export default AccountSidebar;
