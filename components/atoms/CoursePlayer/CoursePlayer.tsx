import "plyr-react/plyr.css";

import Plyr from "plyr-react";
import { ReactElement } from "react";

import { StyledWrapper } from "./CoursePlayer.styles";

interface IProps {
  video: string;
}

const CoursePlayer = ({ video }: IProps): ReactElement => {
  return (
    <StyledWrapper>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              provider: "vimeo",
              src: video,
            },
          ],
        }}
      />
    </StyledWrapper>
  );
};

export default CoursePlayer;
