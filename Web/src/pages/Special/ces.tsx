import SmoothScroll from "layouts/SmoothScroll/SmoothScroll";
import VideoAnimation from "pages/Home/HomeLanding/VideoAnimation/VideoAnimation";
import React, { useEffect, useState } from "react";
import "./ces.scss";
import ScrollingVideoAnimation from "./ScrollingVideoAnimation/ScrollingVideoAnimation";

const ces: React.FC = () => {
  const [isLoading, setIsLoading] = useState<any>(false);

  useEffect(() => {}, [isLoading]);

  const onLoadHandler = () => {
    setIsLoading(true);
  };

  return (
    <div className="ces-container" onLoad={onLoadHandler}>
      {isLoading ? (
        <div className="loading">
          <video
            src="/images/micronics-assets/ces-page/Mouse silhouette.mp4"
            autoPlay
            loop
          ></video>
        </div>
      ) : (
        <div className="ces-btns">
          <button className="homepage-btn">CES Homepage</button>
          <button className="product-btn">CES Products</button>
        </div>
      )}
      <div className="scrolling-videos">
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="/images/micronics-assets/ces-page/WM2 FRONT.mp4"
            title="WM2 DOF"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="/images/micronics-assets/ces-page/WM2 Sensor.mp4"
            title="WM2 Sensor"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="/images/micronics-assets/ces-page/WM2 Switch.mp4"
            title="WM2 Switch"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="/images/micronics-assets/ces-page/WM2 CLOSE UP 1.mp4"
            title="WM2 Closeup"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="/images/micronics-assets/ces-page/WM2 DOF.mp4"
            title="WM2 DOF"
          />
        </div>
      </div>
    </div>
  );
};

export default ces;
