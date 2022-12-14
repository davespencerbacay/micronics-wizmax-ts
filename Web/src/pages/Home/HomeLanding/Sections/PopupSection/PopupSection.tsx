import Img from "library/Images/Image";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopupSection.scss";

const PopupSection: React.FC = () => {
  const navigate = useNavigate();
  const goToCesHandler = () => {
    navigate("/ces");
  };
  return (
    <div className="popup-container">
      <Img
        className="wizmax"
        img="/images/micronics-assets/home-page/wizmax.png"
      />

      <Img className="ces" img="/images/micronics-assets/home-page/ces.png" />
      <h3>
        is now <strong>LIVE!</strong>
      </h3>
      <p onClick={goToCesHandler}>
        Visit <strong>CES</strong> Now
      </p>
    </div>
  );
};

export default PopupSection;
