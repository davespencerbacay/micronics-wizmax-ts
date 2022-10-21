import { ThemeContext } from "context/ThemeContext";
import { useContext, useEffect } from "react";

const useIsDarkMode = () => {
  const themeCtx = useContext(ThemeContext);
  const isDarkMode = themeCtx.state.darkMode;
  useEffect(() => {}, [isDarkMode]);

  return isDarkMode;
};

export default useIsDarkMode;
