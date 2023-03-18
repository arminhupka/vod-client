import { Facebook, Instagram } from "@mui/icons-material";
import { ReactElement } from "react";

import { StyledIconButton } from "./SocialIconButton.styles";

interface IProps {
  type: "facebook" | "instagram";
}

const SocialIconButton = ({ type }: IProps): ReactElement => {
  if (type === "facebook") {
    return (
      <StyledIconButton>
        <Facebook />
      </StyledIconButton>
    );
  }

  if (type === "instagram") {
    return (
      <StyledIconButton>
        <Instagram />
      </StyledIconButton>
    );
  }

  return <></>;
};

export default SocialIconButton;
