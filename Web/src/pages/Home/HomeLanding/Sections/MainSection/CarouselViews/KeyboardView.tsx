import { HOME_IMAGES } from "constants/home";
import React from "react";

const KeyboardView: React.FC = () => {
  return (
    <div className="kb-main">
      <div className="top-content">
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      </div>
      <div className="dominate-container">
        <p className="dom">dom</p>
        <p className="inate">inate</p>
      </div>
      <div className="img-container">
        <img src={HOME_IMAGES.HOME_KEYBOARD_SECTION.KB_W101P} alt="W101P" />
      </div>
      <div className="center-content">
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
      </div>
      <div className="btn-container">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default KeyboardView;
