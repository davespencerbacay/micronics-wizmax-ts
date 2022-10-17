import classNames from "classnames";
import React, { useReducer, createContext, useEffect } from "react";
import { getFromStorage, saveToStorage } from "../helpers/localStorage";

const STORAGE_KEY: Record<string, string> = {
  DARK_MODE: "dark_mode",
};

const defaultThemeContext = {
  darkMode: getFromStorage(STORAGE_KEY.DARK_MODE) || false,
};
const ThemeContext = createContext<any>("");

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "reset":
      return defaultThemeContext;
    case "setTheme":
      saveToStorage(STORAGE_KEY.DARK_MODE, action.darkMode);
      return { ...state, darkMode: action.darkMode };
  }
};

interface IThemeContextProvider {
  children: JSX.Element;
}
const ThemeContextProvider: React.FC<IThemeContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, defaultThemeContext);

  const themeClassnames = classNames({
    dark: state.darkMode === true,
    light: state.darkMode === false,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", state.darkMode === true);
    document.body.classList.toggle("light-theme", state.darkMode === false);
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={themeClassnames}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
