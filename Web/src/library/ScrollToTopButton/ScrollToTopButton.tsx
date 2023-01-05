import ChevronRight from "library/Images/Navigations/ChevronArrows/ChevronRight";
import React, { useState } from "react";
import "./ScrollToTopButton.scss";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisibility);
  return (
    <div className="scroll-top-container">
      <div
        className="scroll-top-arrow-container"
        style={{ display: visible ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <ChevronRight className="scroll-arrow" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
