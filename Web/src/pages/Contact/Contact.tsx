import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import LabeledValue from "library/LabeledValue/LabeledValue";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Contact.scss";
import Inquiries from "../../library/Inquiries/Inquiries";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "constants/routes";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";

const Contact = () => {
  const LOCALIZATION = {
    bannerTitle: useIntl("contactPage.bannerTitle"),
    bannerDescription: useIntl("contactPage.bannerDescription"),
    header: {
      title: useIntl("contactPage.form.header.title"),
      subTitle: useIntl("contactPage.form.header.subTitle"),
    },
  };
  const navigate = useNavigate();

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
          <Col xs={12} md={8} lg={8}>
            <LabeledValue
              title={LOCALIZATION.header.title}
              subTitle={LOCALIZATION.header.subTitle}
              variant="bold"
              buttonProps={{
                show: true,
                text: "Become a Distributor",
                onClick: () => navigate(ROUTE_PATH.BECOME_DISTRIBUTOR),
              }}
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

export default Contact;
