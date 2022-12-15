import SmoothScroll from "layouts/SmoothScroll/SmoothScroll";
import VideoAnimation from "pages/Home/HomeLanding/VideoAnimation/VideoAnimation";
import React, { useEffect, useState } from "react";
import "./ces.scss";
import CESHomePage from "./CESHomePage/CESHomePage";
import CESProductPage from "./CESProductPage/CESProductPage";
import ScrollingVideoAnimation from "./ScrollingVideoAnimation/ScrollingVideoAnimation";

const ces: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const [toggleHomeProductPage, setToggleHomeProductPage] = useState(true);

  const toHomePage = () => {
    setToggleHomeProductPage(true);
  };
  const toProductPage = () => {
    setToggleHomeProductPage(false);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <video autoPlay={true}>
          <source
            src="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081041/Mouse_silhouette_evvayz.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    );
  }

  return (
    <div className="ces-container">
      <div className="ces-btns">
        <button className="homepage-btn" onClick={toHomePage}>
          CES Homepage
        </button>
        <button className="product-btn" onClick={toProductPage}>
          CES Products
        </button>
      </div>
      {toggleHomeProductPage ? <CESHomePage /> : <CESProductPage />}
    </div>
  );
};

export default ces;
