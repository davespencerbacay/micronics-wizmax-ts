import React from "react";
import Button from "library/Button/Button";
import "./ComingSoonSection.scss";

const ComingSoonSection: React.FC = () => {
  return (
    <div className="comingSoon-section-container">
      <div className="comingSoon-section-content">
        <h2>CaluX</h2>
        <p></p>
        <div className="coming-soon-badge"></div>
        <div className="image-holder">
          <img src="images/micronics-assets/product-images/cherry.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
