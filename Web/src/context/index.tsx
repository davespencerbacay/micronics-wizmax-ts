import React, { useReducer, createContext } from "react";
import defaultContext from "./defaultContext";
import { saveToStorage } from "../helpers/localStorage";
import { STORAGE_KEY } from "../constants";

const AppContext = createContext<any>("");

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "reset":
      return defaultContext;
    case "setLocale":
      saveToStorage(STORAGE_KEY.LOCALE, action.locale);
      return { ...state, locale: action.locale };
  }
};

interface IAppContextProvider {
  children: JSX.Element;
}
const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
