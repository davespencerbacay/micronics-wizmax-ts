import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupSection.scss";

const PopupSection: React.FC = () => {
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile]);
  const navigate = useNavigate();
  const goToCesHandler = () => {
    navigate("/ces");
  };
  return (
    <React.Fragment>
      {isMobile && (
        // <div className="popup-container" onClick={goToCesHandler}>
        //   <Img
        //     className="ces"
        //     img="/images/micronics-assets/home-page/ces.png"
        //   />
        //   <strong>LIVE!</strong>
        // </div>
        <div></div>
      )}
      {!isMobile && (
        // <div className="popup-container">
        //   <Img
        //     className="ces"
        //     img="/images/micronics-assets/home-page/ces.png"
        //   />
        //   <h3>
        //     is now <strong>LIVE!</strong>
        //   </h3>
        //   <p onClick={goToCesHandler}>
        //     Visit <strong>CES</strong> Now
        //   </p>
        // </div>
        <div></div>
      )}
    </React.Fragment>
  );
};

export default PopupSection;
