import React from "react";
import { HOME_IMAGES } from "constants/home";

const MainView: React.FC = () => {
  return (
    <div className="main">
      <div className="listen-container">
        <p className="list">list</p>
        <p className="en">en</p>
      </div>
      <div className="details-container">
        <p>
          Hear every detail, dominate every game. Get in the game and experience
          sounds like never before with immersive audio.
        </p>
        <div className="img-container">
          <img src={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET_W301} alt="W301" />
        </div>
      </div>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );
};

export default MainView;
