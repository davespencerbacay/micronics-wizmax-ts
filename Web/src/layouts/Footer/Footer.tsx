import "./Footer.scss";
import intl from "i18n/intl";
import { IMAGES } from "constants/";
import { Link } from "react-router-dom";
import { productCategories } from "data/productCategories";
import { Col, Container, Row } from "reactstrap";
import Icon from "library/Icons/Icon";
import useResponsive from "hooks/useResponsive";
import classnames from "classnames";
import { ROUTE_PATH } from "constants/routes";

const ProductLinks = () => {
  return (
    <ul>
      {productCategories.map((cat, index) => {
        const linkPath = ROUTE_PATH.PRODUCT + "/" + cat.id;
        return (
          <li key={index}>
            <Link to={linkPath}>{cat.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
const OtherLinks = () => {
  const links = [
    {
      text: intl("footer.contactUs"),
      path: "/",
    },
    {
      text: intl("footer.productSpecs"),
      path: "/",
    },
    {
      text: intl("footer.softwareDrivers"),
      path: "/",
      hasMarginBottom: true,
    },
    {
      text: intl("footer.mouseDrivers"),
      path: "/",
    },
    {
      text: intl("footer.keyboardDrivers"),
      path: "/",
    },
    {
      text: intl("footer.headsetDrivers"),
      path: "/",
    },
  ];
  return (
    <ul>
      {links.map((link, index) => {
        const linkClassname = classnames({
          "mb-4": link.hasMarginBottom,
        });
        return (
          <li className={linkClassname} key={index}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};
const Footer = () => {
  const isMobileMode = useResponsive("mobile");
  const icons = [
    IMAGES.FACEBOOK,
    IMAGES.INSTAGRAM,
    IMAGES.TIKTOK,
    IMAGES.TWITTER,
    IMAGES.YOUTUBE,
  ];

  const footerClassnames = classnames({
    footer: true,
    "footer-mobile-view": isMobileMode,
  });

  return (
    <footer className={footerClassnames}>
      <div className="footer-logo">
        <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
      </div>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} md={4} lg={3}>
            <ProductLinks />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <OtherLinks />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="footer-inquiries">
              <h2>{intl("footer.getInTouch")}</h2>
              <p>{intl("footer.specialOffers")}</p>
              <div className="footer-inquiries--icons">
                {icons.map((icon, index) => (
                  <Link to="/" key={index}>
                    <Icon width={30} icon={icon} />
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <div className="sub-footer">
          <h5>{intl("footer.header")}</h5>
          <p>{intl("footer.description")}</p>
          <p>{intl("footer.disclaimer")}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
