import React, { useRef } from "react";
import "./HomeLandingDesktop.scss";
import VideoContainer from "./VideoAnimation";
import MainSection from "./Sections/MainSection/MainSection";
import HeadsetSection from "./Sections/HeadsetSection/HeadsetSection";
import MouseSection from "./Sections/MouseSection/MouseSection";
import KeyboardSection from "./Sections/KeyboardSection/KeyboardSection";
import OtherProductsSection from "./Sections/OtherProductsSection/OtherProductsSection";

const HomeLanding: React.FC = () => {
  const videoSection = useRef<HTMLDivElement>(null);
  const videoSectionHandler = () => {
    if (videoSection.current) {
      videoSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-landing-container">
      <MainSection videoSectionHandler={videoSectionHandler} />
      <HeadsetSection />
      <VideoContainer videoRef={videoSection} />
      <MouseSection />
      <KeyboardSection />
      <OtherProductsSection />
    </div>
  );
};

export default HomeLanding;
