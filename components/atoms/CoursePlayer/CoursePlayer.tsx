import "plyr-react/plyr.css";

import Plyr from "plyr-react";
import { ReactElement } from "react";

import { StyledWrapper } from "./CoursePlayer.styles";

interface IProps {
  video: string;
}

const CoursePlayer = ({ video }: IProps): ReactElement => {
  console.log(video);
  return (
    <StyledWrapper>
      <Plyr
        source={{
          type: "video",
          sources: [{ provider: "youtube", src: video }],
        }}
      />
    </StyledWrapper>
  );
};

export default CoursePlayer;
