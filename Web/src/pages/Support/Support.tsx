<<<<<<< HEAD
import React from "react";
import "./Support.scss";

const Support: React.FC = () => {
  return <div>Support</div>;
=======
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
>>>>>>> 52c3401bf9db26c856f8c0d7e1a25469607892c5
};

export default Support;
