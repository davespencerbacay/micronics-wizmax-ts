import classNames from "classnames";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  children: JSX.Element;
};

interface IThemeContext {
  isDarkMode: string | boolean;
  setIsDarkMode: Dispatch<SetStateAction<string | boolean>>;
}

export const themeContextDefaultValue: IThemeContext = {
  isDarkMode: false,
  setIsDarkMode: () => false,
};

export const ThemeContext = createContext<IThemeContext>(
  themeContextDefaultValue
);

export const ThemeProvider: React.FC<ThemeContextType> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<any>(
    localStorage.getItem("dark-mode")
  );
  console.log(isDarkMode);
  const value = { isDarkMode, setIsDarkMode };

  const themeClassnames = classNames({
    dark: isDarkMode,
    light: !isDarkMode,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    document.body.classList.toggle("light-theme", !isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={value}>
      <div className={themeClassnames}>{children}</div>
    </ThemeContext.Provider>
  );
};
