import { List, ListItem } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

import {
  StyledHeading,
  StyledListLink,
  StyledWrapper,
} from "./FooterNav.styles";

interface IProps {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
}

const FooterNav = ({ title, links }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    {links?.length && (
      <List disablePadding>
        {links.map((l) => (
          <ListItem key={l.name} dense disableGutters>
            <Link href={l.url} passHref>
              <StyledListLink>{l.name}</StyledListLink>
            </Link>
          </ListItem>
        ))}
      </List>
    )}
  </StyledWrapper>
);

export default FooterNav;
