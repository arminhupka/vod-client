import {
  StyledHeading,
  StyledLink,
  StyledWrapper,
} from "./SectionTitle.styles";
import Link from "next/link";

interface IProps {
  title: string;
  link?: string;
  linkName?: string;
}

const SectionTitle = ({ title, link, linkName }: IProps) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    {link && linkName && (
      <Link href={link} passHref>
        <StyledLink as='span'>{linkName}</StyledLink>
      </Link>
    )}
  </StyledWrapper>
);

export default SectionTitle;
