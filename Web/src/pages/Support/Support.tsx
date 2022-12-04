import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import Sidebar from "library/Sidebar/Sidebar";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { productCategories } from "data/productCategories";
import { ROUTE_PATH } from "constants/routes";
import "./Support.scss";
import countProducts from "helpers/countProducts";

type SupportType = {
  navItems?: any;
};

const Support: React.FC<SupportType> = (props) => {
  props.navItems = productCategories.map((cat) => {
    return {
      link: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES as string,
      text: cat.name as string,
      count: countProducts(cat.categoryId),
    };
  });

  const allProductItem = {
    link: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES_BY_CATEGORY_ID.replace(
      ":categoryId",
      "all"
    ),
    text: "All Products",
    count: countProducts(),
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
      <Container className="support-content">
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Sidebar navItems={filteredNavItems} title="Categories" />
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div className="support-table">
              <h2>Drivers</h2>
              <div className="table-content">
                <div>
                  <h5>WM11</h5>
                </div>
                <div>
                  <button>Brochure</button>
                  <button>Manual</button>
                  <button>Driver</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
