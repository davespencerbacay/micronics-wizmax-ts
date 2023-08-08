import React from "react";
import "./MainSectionReworked.scss";
import Button from "library/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "constants/routes";

const MainSectionReworked: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="main-section-container">
      <div className="main-section-content">
        <h2>EH1 - Mondrian</h2>
        <p>Design that stands out. Art that stands up.</p>
        <Button
          onClick={() => navigate("products/CATEGORY_PCCASE/EH1-MONDRIAN")}
        >
          Learn More
        </Button>
        <div className="image-holder">
          <img
            src="images/micronics-assets/product-images/Keyboard-home.png"
            alt="images/micronics-assets/product-images/Keyboard-home.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionReworked;
