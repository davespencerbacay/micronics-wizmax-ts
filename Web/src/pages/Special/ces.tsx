import useResponsive from "hooks/useResponsive";
import CategoryTab from "pages/Product/CategoryLanding/components/CategoryTab/CategoryTab";
import React, { useEffect, useRef, useState } from "react";
import "./ces.scss";
import CESProductPage from "./CESProductPage/CESProductPage";

const ces: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const videoLoading = useRef<any>();
  const isMobile = useResponsive("mobile");

  useEffect(() => {
    videoLoading.current.playbackRate = 3;
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [videoLoading]);

  if (isLoading && !isMobile) {
    return (
      <video
        className="loading-video"
        autoPlay={true as boolean}
        muted
        ref={videoLoading}
      >
        <source
          src="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081041/Mouse_silhouette_evvayz.mp4"
          type="video/mp4"
        ></source>
      </video>
    );
  } else if (isLoading && isMobile) {
    return (
      <video
        className="loading-video"
        autoPlay={true as boolean}
        muted
        ref={videoLoading}
      >
        <source
          src="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081058/WM2_FRONT_cv9mtm.mp4"
          type="video/mp4"
        ></source>
      </video>
    );
  }

  return (
    <div className="ces-container">
      {/* <CategoryTab /> */}
      <CESProductPage />
    </div>
  );
};

export default ces;
