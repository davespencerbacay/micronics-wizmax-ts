import React from "react";
import { IMAGES } from "constants/";
import { Container } from "reactstrap";
import { useIntl } from "i18n/intl";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-logo">
          <img
            src={IMAGES.COMPANY_LOGOS.HORIZONTAL_BLACK}
            alt={IMAGES.COMPANY_LOGOS.HORIZONTAL_BLACK}
          />
        </div>
        <div className="footer-captions">
          <h5>{useIntl("footer.header")}</h5>
          <p>{useIntl("footer.description")}</p>
          <p>{useIntl("footer.disclaimer")}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
