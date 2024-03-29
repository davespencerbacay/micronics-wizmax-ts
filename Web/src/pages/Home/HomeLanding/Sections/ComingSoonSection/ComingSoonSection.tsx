import React from "react";
import Button from "library/Button/Button";
import "./ComingSoonSection.scss";

const ComingSoonSection: React.FC = () => {
  return (
    <div className="comingSoon-section-container">
      <div className="comingSoon-section-content">
        <h2>CaluX</h2>
        <p>Refined Sophistication: Where Luxury Meets Keyboard Excellence.</p>
        <div className="coming-soon-badge">COMING SOON</div>
        <div className="image-holder">
          <img
            src="images/micronics-assets/product-images/coming-soon-keyboard-home.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
