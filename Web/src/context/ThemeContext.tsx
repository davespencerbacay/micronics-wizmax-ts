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
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const themeContextDefaultValue: IThemeContext = {
  isDarkMode: false,
  setIsDarkMode: () => false,
};

export const ThemeContext = createContext<IThemeContext>(
  themeContextDefaultValue
);

export const ThemeProvider: React.FC<ThemeContextType> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const value = { isDarkMode, setIsDarkMode };

  const themeClassnames = classNames({
    dark: isDarkMode === true,
    light: isDarkMode === false,
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
