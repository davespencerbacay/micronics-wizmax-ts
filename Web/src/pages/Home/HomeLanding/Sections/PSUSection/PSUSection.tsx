import React from "react";
import "./PSUSection.scss";
import Button from "library/Button/Button";
import { useNavigate } from "react-router-dom";

const PSUSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="PSUSection-container">
      <div className="PSUSection-content">
        <h2>WIZMAX GOLD</h2>
        <p>Power Unleashed, Efficiency Perfected.</p>
        <Button onClick={() => navigate("products/CATEGORY_PSU/WIZMAX-GOLD")}>
          Learn More
        </Button>
        <div className="image-holder">
          <img
            src="images/micronics-assets/product-images/PSU-home.png"
            alt="images/micronics-assets/product-images/PSU-home.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PSUSection;
