import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import LabeledValue from "library/LabeledValue/LabeledValue";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./BecomeDistributor.scss";
import Form from "./components/Form/Form";
import Inquiries from "../../library/Inquiries/Inquiries";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "library/ScrollToTop/ScrollToTop";

const BecomeDistributor = () => {
  const LOCALIZATION = {
    bannerTitle: useIntl("distributorPage.bannerTitle"),
    bannerDescription: useIntl("distributorPage.bannerDescription"),
    header: {
      title: useIntl("distributorPage.form.header.title"),
      subTitle: useIntl("distributorPage.form.header.subTitle"),
    },
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <Banner
        title={LOCALIZATION.bannerTitle}
        subTitle={LOCALIZATION.bannerDescription}
        align="center"
        variant="light"
      />
      <Container className="distributor-container">
        <Row>
          <Col xs={12} md={8} lg={8}>
            <LabeledValue
              title={LOCALIZATION.header.title}
              subTitle={LOCALIZATION.header.subTitle}
              variant="bold"
            />
            <Form />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Inquiries />
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton />
    </React.Fragment>
  );
};

export default BecomeDistributor;
