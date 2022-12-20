import React, { useEffect, useRef, useState } from "react";
import "./ces.scss";
import CESProductPage from "./CESProductPage/CESProductPage";

const ces: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const videoLoading = useRef<any>();

  useEffect(() => {
    videoLoading.current.playbackRate = 3;
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [videoLoading]);

  if (isLoading) {
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
  }

  return (
    <div className="ces-container">
      <CESProductPage />
    </div>
  );
};

export default ces;
