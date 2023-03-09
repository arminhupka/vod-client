import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

import { StyledWrapper } from "./Logo.styles";

const Logo = (): ReactElement => (
  <StyledWrapper>
    <Link href='/' passHref>
      <a>
        <Image
          alt='Olga Wałek'
          src='/logo.png'
          width={110}
          height={60}
          objectFit='contain'
        />
      </a>
    </Link>
  </StyledWrapper>
);

export default Logo;
