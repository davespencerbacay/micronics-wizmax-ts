import React, { useRef } from "react";
import "./HomeLandingDesktop.scss";
import MouseSection from "./Sections/MouseSection/MouseSection";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "library/ScrollToTop/ScrollToTop";
import MainSectionReworked from "./Sections/MainSection/MainSectionReworked";
import PSUSection from "./Sections/PSUSection/PSUSection";
import ComingSoonSection from "./Sections/ComingSoonSection/ComingSoonSection";

const HomeLandingDesktop: React.FC = () => {
  const videoSection = useRef<HTMLDivElement>(null);
  // const videoSectionHandler = () => {
  //   if (videoSection.current) {
  //     videoSection.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // Might be used in future, please disregard for the time being.};

  return (
    <div className="home-landing-container">
      <ScrollToTop />
      {/* <MainSection videoSectionHandler={videoSectionHandler} /> */}
      <MainSectionReworked />
      <MouseSection />
      <PSUSection />
      <ComingSoonSection />
      <ScrollToTopButton />
    </div>
  );
};

export default HomeLandingDesktop;
