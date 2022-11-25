import { HOME_VIDEOS } from "constants/home";
import React from "react";
import VideoAnimation from "./VideoAnimation";
import "./VideoAnimation.scss";

type VideoContainerType = {
  videoRef: React.RefObject<HTMLDivElement>;
};

const VideoContainer: React.FC<VideoContainerType> = (props) => {
  return (
    <div className="video-section" ref={props.videoRef}>
      <VideoAnimation
        title="MH2 Gaming Headset"
        videoSrc={HOME_VIDEOS.HEADSET_MH2}
      />
    </div>
  );
};

export default VideoContainer;
