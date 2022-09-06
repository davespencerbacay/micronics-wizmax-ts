import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import React from "react";

const Support: React.FC = () => {
  return (
    <div className="support-container">
      <Banner
        title={useIntl("supportPage.bannerTitle")}
        subTitle={useIntl("supportPage.bannerSubtitle")}
        variant="dark"
        align="center"
      />
    </div>
  );
};

export default Support;
