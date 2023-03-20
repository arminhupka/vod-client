import { Box, useMediaQuery, useTheme } from "@mui/material";
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

const SectionTitle = ({ title, link, linkName, children }: IProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <StyledWrapper>
      <StyledHeading small={isMobile}>{title}</StyledHeading>
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
};

export default SectionTitle;
