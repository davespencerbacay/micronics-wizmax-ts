import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./KeyboardSection.scss";

const KeyboardSection: React.FC = () => {
  const isMobileMode = useResponsive("mobile");

  const navigate = useNavigate();
  const navigateToProductsKeyboard = () => {
    navigate("/products");
    if (isMobileMode) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 2200);
    }
  };
  const navigateToWK4 = () => {
    window.scrollTo(0, 0);
    navigate("/products/CATEGORY_KB/WK4");
  };
  return (
    <React.Fragment>
      {isMobileMode ? (
        <section className="keyboard-section">
          <div className="keyboard-img-container">
            <Img img={HOME_IMAGES.HOME_KEYBOARD_SECTION.KEYBOARD}></Img>
          </div>
          <div className="keyboard-caption-container">
            <h3>Your Key To Victory</h3>
            <p>Power In Every Stroke</p>
            <div className="learn-more" onClick={navigateToProductsKeyboard}>
              <p>
                Learn More
                <span>
                  <GoTo></GoTo>
                </span>
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="keyboard-section">
          <div className="keyboard-caption-container">
            <h3>Your Key To Victory</h3>
            <p>Power In Every Stroke</p>
            <div className="learn-more" onClick={navigateToWK4}>
              <p>
                Learn More About WK4
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
      )}
    </React.Fragment>
  );
};

export default KeyboardSection;
