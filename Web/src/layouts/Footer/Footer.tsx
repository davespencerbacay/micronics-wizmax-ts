import React, { useContext, useEffect } from "react";
import { IMAGES } from "constants/";
import { Container } from "reactstrap";
import { useIntl } from "i18n/intl";
import "./Footer.scss";
import { ThemeContext } from "context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {}, [isDarkMode]);

  return (
    <footer className="footer">
      <Container>
        <div className="footer-logo">
          <img
            src={
              isDarkMode
                ? IMAGES.COMPANY_LOGOS.HORIZONTAL_WHITE
                : IMAGES.COMPANY_LOGOS.HORIZONTAL_BLACK
            }
            alt={
              isDarkMode
                ? IMAGES.COMPANY_LOGOS.HORIZONTAL_WHITE
                : IMAGES.COMPANY_LOGOS.HORIZONTAL_BLACK
            }
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
