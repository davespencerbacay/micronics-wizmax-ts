import React, { useContext } from "react";

import { AppContext } from "../context/";
import { I18nPropvider } from "../i18n";

interface ProviderWrapperProps {
  children: JSX.Element;
}
const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  const { state } = useContext<any>(AppContext);

  return <I18nPropvider locale={state.locale}>{children}</I18nPropvider>;
};

export default ProviderWrapper;
