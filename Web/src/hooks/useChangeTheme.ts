import { useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useChangeTheme = () => {
  /* Hook for changing theme */
  const { dispatch } = useContext(ThemeContext);
  const setTheme = useCallback(
    (darkMode: any) => {
      dispatch({
        type: "setTheme",
        darkMode,
      });
    },
    [dispatch]
  );

  return setTheme;
};

export default useChangeTheme;
