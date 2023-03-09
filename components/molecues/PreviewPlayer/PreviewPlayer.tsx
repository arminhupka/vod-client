import { ReactElement } from "react";

import { StyledWrapper } from "./PreviewPlayer.styles";

const PreviewPlayer = (): ReactElement => (
  <StyledWrapper>
    <iframe
      width='100%'
      height='450'
      src='https://www.youtube.com/embed/VKNt7vTSGzU'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen></iframe>
  </StyledWrapper>
);

export default PreviewPlayer;
