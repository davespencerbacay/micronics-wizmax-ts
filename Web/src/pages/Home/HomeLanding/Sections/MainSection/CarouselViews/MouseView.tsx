import { HOME_IMAGES } from "constants/home";
import truncatedText from "helpers/truncatedText";
import React from "react";

const MouseView: React.FC = () => {
  return (
    <div className="mouse-main-container">
      <div className="mouse-img-container">
        <img src={HOME_IMAGES.HOME_MOUSE_SECTION.POWERFUL_MOUSE} alt="Mouse" />
      </div>
      <div className="details-container">
        <p>
          {truncatedText(
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            100
          )}
        </p>
      </div>
      <div className="button-container">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default MouseView;
