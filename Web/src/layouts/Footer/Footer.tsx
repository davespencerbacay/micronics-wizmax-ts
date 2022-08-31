import "./Footer.scss";
import intl from "i18n/intl";
import { IMAGES, ROUTE_PATH } from "constants/";
import { Link } from "react-router-dom";
import { productCategories } from "data/productCategories";
import { Col, Container, Row } from "reactstrap";
import Icon from "library/Icons/Icon";

const ProductLinks = () => {
  return (
    <ul>
      {productCategories.map((cat) => {
        const linkPath = ROUTE_PATH.PRODUCT + "/" + cat.id;
        return (
          <li>
            <Link to={linkPath}>{cat.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
const Footer = () => {
  const icons = [
    IMAGES.FACEBOOK,
    IMAGES.INSTAGRAM,
    IMAGES.TIKTOK,
    IMAGES.TWITTER,
    IMAGES.YOUTUBE,
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={IMAGES.COMPANY_LOGOS.MAIN} />
      </div>

      <Container>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <ProductLinks />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <ProductLinks />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="footer-inquiries">
              <h2>{intl("footer.getInTouch")}</h2>
              <p>{intl("footer.specialOffers")}</p>
              <div className="footer-inquiries--icons">
                {icons.map((icon) => (
                  <Icon width={40} icon={icon} />
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
