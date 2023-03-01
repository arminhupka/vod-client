import { ReactElement } from "react";
import { StyledWrapper } from "./CoursePlayer.styles";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const CoursePlayer = (): ReactElement => {
  return (
    <StyledWrapper>
      <Plyr
        source={{
          type: "video",
          sources: [{ provider: "youtube", src: "VKNt7vTSGzU" }],
        }}
      />
    </StyledWrapper>
  );
};

export default CoursePlayer;
