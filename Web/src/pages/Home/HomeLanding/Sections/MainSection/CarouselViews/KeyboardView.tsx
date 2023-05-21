import { HOME_IMAGES } from "constants/home";
import React from "react";
import truncatedText from "helpers/truncatedText";

const KeyboardView: React.FC = () => {
  return (
    <div className="kb-main">
      <div className="top-content">
        <p>
          {truncatedText(
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            40
          )}
        </p>
      </div>
      <div className="img-container">
        <img src={HOME_IMAGES.HOME_KEYBOARD_SECTION.DOMINATE_KB} alt="W101P" />
      </div>
      <div className="center-content">
        <p>
          {truncatedText(
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            100
          )}
        </p>
      </div>
      <div className="btn-container">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default KeyboardView;
