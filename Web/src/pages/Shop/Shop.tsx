import React, { useContext } from "react";
import Banner from "library/Banner/Banner";
import { Col, Container, Row } from "reactstrap";
import "./Shop.scss";
import { ThemeContext } from "context/ThemeContext";

const Shop: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  const isDarkMode = themeCtx.state.darkMode;

  return (
    <React.Fragment>
      <Banner
        title="Find Your Local Store"
        variant={isDarkMode}
        align="center"
        subTitle="Get the best products for your workspace"
      />
      <Container>
        <div className="shop-container">
          <h5>Africa, Middle East, and India</h5>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Bahrain</li>
                <li>البحرين</li>
                <li>Botswana</li>
                <li>Egypt</li>
                <li>Côte d'Ivoire</li>
                <li>République Centrafricaine</li>
                <li>Nigeria</li>
                <li>Oman</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Egypt</li>
                <li>مصر</li>
                <li>Guinea-Bissau</li>
                <li>Guinée Equatoriale</li>
                <li>لإمارات العربية المتحدة</li>
                <li>Niger</li>
                <li>United Arab Emirates</li>
                <li>عُمان</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Saudi Arabia </li>
                <li>المملكة العربية السعودية</li>
                <li>Sénégal</li>
                <li>South Africa</li>
                <li>Tunisie</li>
                <li>Uganda</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h5>Asia Pacific</h5>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Australia</li>
                <li>China(中国大陆)</li>
                <li>Hong Kong(香港)</li>
                <li>Indonesia</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Japan(日本)</li>
                <li>Macao(澳門)</li>
                <li>Korea(대한민국)</li>
                <li>Malaysia</li>
                <li>New Zealand</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Philippines </li>
                <li>Singapore</li>
                <li>Taiwan(台灣)</li>
                <li>Thailand(ไทย)</li>
                <li>Vietnam</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h5>Europe</h5>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>Armenia</li>
                <li>Azerbaijan</li>
                <li>Belarus</li>
                <li>België</li>
                <li>Belgique</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>България</li>
                <li>Česko</li>
                <li>Danmark</li>
                <li>Deutschland</li>
                <li>Eesti</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>España</li>
                <li>France</li>
                <li>Georgia</li>
                <li>Ελλάδα</li>
                <li>Hrvatska</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h5>North and South America</h5>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li>United States</li>
                <li>Canada (English)</li>
                <li>Canada (Français)</li>
                <li>Ecuador </li>
                <li>Puerto Rico (Español)</li>
              </ul>
            </Col>
          </Row>
          <p>Can't find your Store?</p>
          <a className="link" href="/become a distributer">
            Become a Distributor
          </a>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Shop;
