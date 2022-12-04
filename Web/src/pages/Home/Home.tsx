import useChangeLanguage from "hooks/useChangeLanguage";
import useResponsive from "hooks/useResponsive";
import Wrapper from "library/Wrapper/Wrapper";
import React from "react";
import HomeLandingDesktop from "./HomeLanding/HomeLandingDesktop";

const Home: React.FC = () => {
  const changeLanguage = useChangeLanguage();
  const isMobileMode = useResponsive("mobile");
  return isMobileMode ? <div>rawr</div> : <HomeLandingDesktop />;
};

export default Home;
