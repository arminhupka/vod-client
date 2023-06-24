import "plyr-react/plyr.css";

import { ReactElement, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { StyledWrapper } from "./CoursePlayer.styles";

interface IProps {
  video: string;
  onEnd: () => void | Promise<void>;
}

const CoursePlayer = ({ video, onEnd }: IProps): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [percents, setPercents] = useState(0);

  useEffect(() => {
    setPlay(true);
  }, []);

  useEffect(() => {
    setPercents(Math.floor((videoProgress / videoDuration) * 100));
  }, [videoDuration, videoProgress]);

  return (
    <StyledWrapper>
      <ReactPlayer
        className='vimeo-player'
        url={video}
        width='100%'
        height='100%'
        controls
        playing={play}
        onDuration={(duration) => {
          setVideoDuration(duration);
        }}
        onEnded={() => {
          if (onEnd) onEnd();
        }}
        onProgress={(state) => {
          setVideoProgress(state.playedSeconds);
        }}
      />
    </StyledWrapper>
  );
};

export default CoursePlayer;
