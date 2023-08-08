import React from "react";
import "./MouseSection.scss";
import Button from "library/Button/Button";
import { useNavigate } from "react-router-dom";

const MouseSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mouse-section">
      <div className="mouse-section-content">
        <h2>WM2</h2>
        <p>
          Achieve victory with the ultimate gaming weapon. Unleash your gaming
          potential <br /> with precision and speed!
        </p>
        <Button onClick={() => navigate("products/CATEGORY_MOUSE/WM2")}>
          Learn More
        </Button>
        <div className="image-holder">
          <img
            src="images/micronics-assets/product-images/WM2 2.png"
            alt="images/micronics-assets/product-images/WM2 2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MouseSection;
