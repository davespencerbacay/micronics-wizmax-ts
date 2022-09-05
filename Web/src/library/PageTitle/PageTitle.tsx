import { COMPANY_NAME } from "constants/";
import intl from "i18n/intl";
import React, { useEffect } from "react";

interface IPageTitle {
  title: string;
}
const PageTitle: React.FC<IPageTitle> = (props) => {
  useEffect(() => {
    document.title = props.title + " - " + COMPANY_NAME;
  }, [props.title]);

  return <React.Fragment />;
};

PageTitle.defaultProps = {
  title: intl("global.companyName").toString(),
};

export default PageTitle;
