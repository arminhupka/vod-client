import "plyr-react/plyr.css";

import { ReactElement, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { StyledWrapper } from "./CoursePlayer.styles";

interface IProps {
  video: string;
}

const CoursePlayer = ({ video }: IProps): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <StyledWrapper>
      <ReactPlayer
        className='vimeo-player'
        url={video}
        width='100%'
        height='100%'
        controls
        playing={play}
      />
    </StyledWrapper>
  );
};

export default CoursePlayer;
