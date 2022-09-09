import React from "react";
import useChangeLanguage from "hooks/useChangeLanguage";
import useResponsive from "hooks/useResponsive";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

const NavigationBar: React.FC = () => {
  const changeLanguage = useChangeLanguage();
  const isMobileMode = useResponsive("mobile");
  return isMobileMode ? (
    <NavigationBarMobile {...{ changeLanguage }} />
  ) : (
    <NavigationBarDesktop {...{ changeLanguage }} />
  );
};

export default NavigationBar;
