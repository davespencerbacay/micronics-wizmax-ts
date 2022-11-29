import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import Sidebar from "library/Sidebar/Sidebar";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { productCategories } from "data/productCategories";
import { ROUTE_PATH } from "constants/routes";
import "./Support.scss";

type SupportType = {
  navItems?: any;
};

const Support: React.FC<SupportType> = (props) => {
  props.navItems = productCategories.map((cat) => {
    return {
      link: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
      text: cat.name,
    };
  });

  const allProductItem = {
    link: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES_BY_CATEGORY_ID.replace(
      ":categoryId",
      "all"
    ),
    text: "All Products",
  };

  const filteredNavItems = [allProductItem, ...props.navItems];
  return (
    <div className="support-container">
      <Banner
        title={useIntl("supportPage.bannerTitle")}
        subTitle={useIntl("supportPage.bannerSubtitle")}
        variant="light"
        align="center"
      />
      <Container className="support-container">
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Sidebar navItems={filteredNavItems} title="Categories" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
