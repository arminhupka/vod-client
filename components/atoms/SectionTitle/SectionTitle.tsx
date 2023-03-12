import { Box } from "@mui/material";
import Link from "next/link";

import {
  StyledHeading,
  StyledLink,
  StyledWrapper,
} from "./SectionTitle.styles";

interface IProps {
  title: string;
  link?: string;
  linkName?: string;
}

const SectionTitle = ({ title, link, linkName }: IProps) => (
  <StyledWrapper>
    <Box>
      <StyledHeading>{title}</StyledHeading>
      {link && linkName && (
        <Link href={link} passHref>
          <StyledLink as='span'>{linkName}</StyledLink>
        </Link>
      )}
    </Box>
  </StyledWrapper>
);

export default SectionTitle;
