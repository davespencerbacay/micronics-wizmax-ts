import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

export type ScrollingVideoAnimationType = {
  videoSrc: string;
  title: string;
};

const ScrollingVideoAnimation: React.FC<ScrollingVideoAnimationType> = (
  props
) => {
  const refVideoContainer = useRef(null);
  const refVideoText = useRef(null);
  const refVideo = useRef<HTMLVideoElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (refVideo.current) {
      refVideo.current.currentTime = 0;
      let acceleration = 0.1;
      let scrollPos = 0;
      let delay = 0;

      ScrollTrigger.create({
        trigger: refVideoContainer.current,
        pin: refVideoContainer.current,
        start: "center center",
        end: "+=300% top",
        markers: false,
        onUpdate: (self) => {
          if (refVideo.current) {
            let videoCurrentTime = refVideo.current.currentTime;
            scrollPos = (self.progress / 28) * 400;

            delay += (scrollPos - delay) * acceleration;
            videoCurrentTime = scrollPos;

            if (videoCurrentTime) {
              refVideo.current.currentTime = videoCurrentTime;
            }
          }
        },
      });
    }
  }, [refVideoContainer, refVideo, refVideoText]);

  return (
    <div className="video-container" ref={refVideoContainer}>
      <h1 className="h1" ref={refVideoText}>
        {props.title}
      </h1>
      <video
        id="video"
        className="video"
        playsInline={true}
        src={props.videoSrc}
        ref={refVideo}
      ></video>
    </div>
  );
};

export default ScrollingVideoAnimation;
