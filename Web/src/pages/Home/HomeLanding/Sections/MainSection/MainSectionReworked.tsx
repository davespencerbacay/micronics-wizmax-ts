import React, { useEffect, useState } from "react";
import "./MainSectionReworked.scss";
import MainView from "./CarouselViews/MainView";
import KeyboardView from "./CarouselViews/KeyboardView";
import MouseView from "./CarouselViews/MouseView";

const MainSectionReworked: React.FC = () => {
  const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideViews = [<MainView />, <KeyboardView />, <MouseView />];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideViews.length);
      }, 3000);
    }, []);
    return slideViews[currentSlide];
  };
  return (
    <div id="main-container" className="main-container">
      <MainSlider />
    </div>
  );
};

export default MainSectionReworked;
