import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

import { StyledWrapper } from "./Logo.styles";

interface IProps {
  isBig?: boolean;
  white?: boolean;
}

const Logo = ({ isBig, white }: IProps): ReactElement => {
  const sizes = {
    w: isBig ? 120 * 1.5 : 120,
    h: isBig ? 70 * 1.5 : 70,
  };

  const logo = () => {
    if (white) {
      return "/assets/logo/bpa_logo_white.svg";
    }

    return "/assets/logo/bpa_logo_black.svg";
  };

  return (
    <StyledWrapper>
      <Link href='/' passHref>
        <a>
          <Image
            alt='Olga Wałek'
            src={logo()}
            width={sizes.w}
            height={sizes.h}
            objectFit='contain'
            style={{ flex: 1 }}
          />
        </a>
      </Link>
    </StyledWrapper>
  );
};

export default Logo;
