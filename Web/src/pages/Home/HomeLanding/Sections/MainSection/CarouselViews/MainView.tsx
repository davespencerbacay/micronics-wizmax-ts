import React from "react";
import { HOME_IMAGES } from "constants/home";
import { useNavigate } from "react-router-dom";

const MainView: React.FC = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/products/CATEGORY_HEADSET/W301");
  };
  return (
    <div className="main">
      <div className="details-container">
        <p>
          Hear every detail, dominate every game. Get in the game and experience
          sounds like never before with immersive audio.
        </p>
      </div>
      <div className="img-container">
        <img src={HOME_IMAGES.HOME_HEADSET_SECTION.LISTEN_HEADSET} alt="W301" />
      </div>
      <button className="learn-more-btn" onClick={goTo}>
        Learn More
      </button>
    </div>
  );
};

export default MainView;
