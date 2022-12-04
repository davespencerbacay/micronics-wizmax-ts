import { HOME_IMAGES } from "constants/home";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import "./KeyboardSection.scss";

const KeyboardSection: React.FC = () => {
  return (
    <section className="keyboard-section">
      <div className="keyboard-caption-container">
        <h3>Your Key To Victory</h3>
        <p>Power In Every Stroke</p>
        <div className="learn-more">
          <p>
            Learn More
            <span>
              <GoTo></GoTo>
            </span>
          </p>
        </div>
      </div>
      <div className="keyboard-img-container">
        <Img img={HOME_IMAGES.HOME_KEYBOARD_SECTION.KEYBOARD}></Img>
      </div>
    </section>
  );
};

export default KeyboardSection;
