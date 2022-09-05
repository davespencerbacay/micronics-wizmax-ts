import React, { useReducer, createContext } from "react";
import defaultContext from "./defaultContext";
import { saveToStorage } from "../helpers/localStorage";
import { STORAGE_KEY } from "../constants/constants";

const AppContext = createContext<any>("");

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "reset":
      return defaultContext;
    case "setLocale":
      saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
  }
};

interface AppContextProvider {
  children: JSX.Element;
}
const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
