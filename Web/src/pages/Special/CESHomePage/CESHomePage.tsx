import React from "react";
import ScrollingVideoAnimation from "../ScrollingVideoAnimation/ScrollingVideoAnimation";
import "./CESHomePage.scss";

const CESHomePage: React.FC = () => {
  return (
    <div className="ces-home-page-container">
      <div className="scrolling-videos">
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081058/WM2_FRONT_cv9mtm.mp4"
            title="WM2 DOF"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081057/WM2_Sensor_gcguok.mp4"
            title="WM2 Sensor"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081049/WM2_Switch_ozumgd.mp4"
            title="WM2 Switch"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081059/WM2_CLOSE_UP_1_e7lypz.mp4"
            title="WM2 Closeup"
          />
        </div>
        <div className="scrolling-videos-container">
          <ScrollingVideoAnimation
            videoSrc="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081022/WM2_DOF_ebjiwf.mp4"
            title="WM2 DOF"
          />
        </div>
      </div>
    </div>
  );
};

export default CESHomePage;
