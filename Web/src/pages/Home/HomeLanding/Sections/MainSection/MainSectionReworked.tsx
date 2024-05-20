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
        <h2>ML-420 BTF</h2>
        <p>ML-420 VIEW BTF registration is completed </p>
        <Button onClick={() => navigate("products/CATEGORY_PCCASE/ML-420-BTF")}>Learn More</Button>
        <div className="image-holder">
          <img
            src="https://res.cloudinary.com/dv6kvjoed/image/upload/v1716175775/PC%20Case/ML-420%20View%20BTF/PNG/01_vws19v.png"
            alt="https://res.cloudinary.com/dv6kvjoed/image/upload/v1716175775/PC%20Case/ML-420%20View%20BTF/PNG/01_vws19v.png"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionReworked;
