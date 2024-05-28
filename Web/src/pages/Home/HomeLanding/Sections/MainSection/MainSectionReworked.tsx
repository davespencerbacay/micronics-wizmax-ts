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
        <p>Perfectly created beauty</p>
        <Button onClick={() => navigate("products/CATEGORY_PCCASE/ML-420-BTF")}>Learn More</Button>
        <div className="image-holder">
          <img
            src="https://res.cloudinary.com/dv6kvjoed/image/upload/v1716176043/PC%20Case/ML-420%20BTF/W%2BB/2000px/_2_ykzg6b.jpg"
            alt="https://res.cloudinary.com/dv6kvjoed/image/upload/v1716176043/PC%20Case/ML-420%20BTF/W%2BB/2000px/_2_ykzg6b.jpg"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionReworked;
