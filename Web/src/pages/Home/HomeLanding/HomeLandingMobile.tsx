import React, { useRef } from "react";
import "./HomeLandingMobile.scss";
import HeadsetSection from "./Sections/HeadsetSection/HeadsetSection";
import KeyboardSection from "./Sections/KeyboardSection/KeyboardSection";
import MainSection from "./Sections/MainSection/MainSection";
import MouseSection from "./Sections/MouseSection/MouseSection";
import OtherProductsSection from "./Sections/OtherProductsSection/OtherProductsSection";
import PopupSection from "./Sections/PopupSection/PopupSection";

const HomeLandingMobile: React.FC = () => {
  const headsetSection = useRef<HTMLDivElement>(null);
  const headsetSectionHandler = () => {
    if (headsetSection.current) {
      headsetSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <MainSection headsetSectionHandler={headsetSectionHandler} />
      <HeadsetSection sectionRef={headsetSection} />
      <MouseSection />
      <KeyboardSection />
      <OtherProductsSection />
      <PopupSection />
    </div>
  );
};

export default HomeLandingMobile;
