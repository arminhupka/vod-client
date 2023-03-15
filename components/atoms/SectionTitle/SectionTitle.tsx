import { Box } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

import {
  StyledHeading,
  StyledLink,
  StyledWrapper,
} from "./SectionTitle.styles";

interface IProps {
  title: string;
  link?: string;
  linkName?: string;
  children?: ReactNode;
}

const SectionTitle = ({ title, link, linkName, children }: IProps) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    <Box>
      {children}
      {link && linkName && (
        <Link href={link} passHref>
          <StyledLink as='span'>{linkName}</StyledLink>
        </Link>
      )}
    </Box>
  </StyledWrapper>
);

export default SectionTitle;
