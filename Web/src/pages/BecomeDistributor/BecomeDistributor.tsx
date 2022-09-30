import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./BecomeDistributor.scss";
import Inquiries from "./components/Inquiries";

const BecomeDistributor = () => {
  const LOCALIZATION = {
    bannerTitle: useIntl("distributorPage.bannerTitle"),
    bannerDescription: useIntl("distributorPage.bannerDescription"),
  };

  return (
    <React.Fragment>
      <Banner
        title={LOCALIZATION.bannerTitle}
        subTitle={LOCALIZATION.bannerDescription}
        align="center"
        variant="light"
      />
      <Container className="distributor-container">
        <Row>
          <Col xs={12} md={8} lg={8}></Col>
          <Col xs={12} md={4} lg={4}>
            <Inquiries />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BecomeDistributor;
