import { HOME_IMAGES } from "constants/home";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import "./MouseSection.scss";

const MouseSection: React.FC = () => {
  return (
    <section className="mouse-section">
      <div className="mouse-caption-container">
        <h3>Survival Of The Fastest</h3>
        <p>Accurately Precise, Incredibly Fast</p>
        <div className="learn-more">
          <p>
            Learn More
            <span>
              <GoTo />
            </span>
          </p>
        </div>
      </div>
      <div className="mouse-img-container">
        <Img img={HOME_IMAGES.HOME_MOUSE_SECTION.MOUSE}></Img>
      </div>
    </section>
  );
};

export default MouseSection;
