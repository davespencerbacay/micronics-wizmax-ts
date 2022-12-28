import useChangeLanguage from "hooks/useChangeLanguage";
import useResponsive from "hooks/useResponsive";
import React from "react";
import HomeLandingDesktop from "./HomeLanding/HomeLandingDesktop";
import HomeLandingMobile from "./HomeLanding/HomeLandingMobile";

const Home: React.FC = () => {
  const changeLanguage = useChangeLanguage();
  const isMobileMode = useResponsive("mobile");
  return isMobileMode ? <HomeLandingMobile /> : <HomeLandingDesktop />;
};

export default Home;
