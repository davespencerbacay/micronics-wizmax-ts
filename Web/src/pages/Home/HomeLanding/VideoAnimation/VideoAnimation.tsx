import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export type VideoAnimationType = {
  videoSrc: string;
  title: string;
};

const VideoAnimation: React.FC<VideoAnimationType> = (props) => {
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
        end: "+=200% top",
        markers: false,
        onUpdate: (self) => {
          if (refVideo.current) {
            scrollPos = self.progress / 0.2;
            delay += (scrollPos - delay) * acceleration;
            let videoCurrentTime = refVideo.current.currentTime;
            videoCurrentTime = scrollPos;

            if (videoCurrentTime) {
              refVideo.current.currentTime = videoCurrentTime;
            }
          }
        },
      });
    }
    var listones = gsap.utils.toArray(refVideoText.current);

    listones.forEach(() => {
      gsap.from(refVideoText.current, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: refVideoText.current,
          start: "top top-=1000",
          scrub: true,
          end: "+=100%",
          markers: false,
        },
      });
    });
  }, [refVideoContainer, refVideo, refVideoText]);

  return (
    <div className="video-container" ref={refVideoContainer}>
      <h1 className="h1" ref={refVideoText}>
        {props.title}
      </h1>
      <video
        id="video"
        className="video"
        src={props.videoSrc}
        ref={refVideo}
      ></video>
    </div>
  );
};

export default VideoAnimation;
