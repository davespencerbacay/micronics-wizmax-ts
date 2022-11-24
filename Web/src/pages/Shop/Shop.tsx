import React, { useContext, useState } from "react";
import Banner from "library/Banner/Banner";
import { Col, Container, Row } from "reactstrap";
import "./Shop.scss";
import { ThemeContext } from "context/ThemeContext";
import { Link } from "react-router-dom";
import {
  ecuadorShop,
  japanShop,
  koreaShop,
  philippinesShop,
  usaShop,
} from "./ShopLinks";

const Shop: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  const isDarkMode = themeCtx.state.darkMode;

  const [japanLink, setJapanLink] = useState(false);
  const [koreaLink, setKoreaLink] = useState(false);
  const [philippinesLink, setPhilippinesLink] = useState(false);
  const [usaLink, setUsaLink] = useState(false);
  const [ecuadorLink, setEcuadorLink] = useState(false);

  const koreaLinkHandler = () => {
    setKoreaLink((prevState) => !prevState);
    setPhilippinesLink(false);
    setUsaLink(false);
    setEcuadorLink(false);
    setJapanLink(false);
  };
  const philippinesHandler = () => {
    setPhilippinesLink((prevState) => !prevState);
    setKoreaLink(false);
    setUsaLink(false);
    setEcuadorLink(false);
    setJapanLink(false);
  };
  const usaHandler = () => {
    setUsaLink((prevState) => !prevState);
    setKoreaLink(false);
    setPhilippinesLink(false);
    setEcuadorLink(false);
    setJapanLink(false);
  };
  const ecuadorHandler = () => {
    setEcuadorLink((prevState) => !prevState);
    setKoreaLink(false);
    setPhilippinesLink(false);
    setUsaLink(false);
    setJapanLink(false);
  };
  const japanLinkHandler = () => {
    setJapanLink((prevState) => !prevState);
    setKoreaLink(false);
    setPhilippinesLink(false);
    setUsaLink(false);
    setEcuadorLink(false);
  };

  const handleCloseDropdown = () => {
    setKoreaLink(false);
    setUsaLink(false);
    setEcuadorLink(false);
    setPhilippinesLink(false);
    setJapanLink(false);
  };

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
                <div className="dropdown" onMouseLeave={handleCloseDropdown}>
                  <Link to="#" onClick={japanLinkHandler}>
                    Japan(日本)
                    <i className="fa-solid fa-angle-down"></i>
                  </Link>
                  <div
                    className={
                      japanLink ? "dropdown-content" : "dropdown-content-hide"
                    }
                    style={{
                      visibility: japanLink ? "visible" : "hidden",
                      opacity: japanLink ? "1" : "0",
                    }}
                  >
                    {japanShop.map((shop) => {
                      return (
                        <a
                          href={shop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <li>Macao(澳門)</li>
                <div className="dropdown" onMouseLeave={handleCloseDropdown}>
                  <Link to="#" onClick={koreaLinkHandler}>
                    Korea(대한민국)
                    <i className="fa-solid fa-angle-down"></i>
                  </Link>
                  <div
                    className={
                      koreaLink ? "dropdown-content" : "dropdown-content-hide"
                    }
                    style={{
                      visibility: koreaLink ? "visible" : "hidden",
                      opacity: koreaLink ? "1" : "0",
                    }}
                  >
                    {koreaShop.map((shop) => {
                      return (
                        <a
                          href={shop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <li>Malaysia</li>
                <li>New Zealand</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <div className="dropdown" onMouseLeave={handleCloseDropdown}>
                  <Link to="#" onClick={philippinesHandler}>
                    Philippines <i className="fa-solid fa-angle-down"></i>
                  </Link>
                  <div
                    className={
                      philippinesLink
                        ? "dropdown-content"
                        : "dropdown-content-hide"
                    }
                    style={{
                      visibility: philippinesLink ? "visible" : "hidden",
                      opacity: philippinesLink ? "1" : "0",
                    }}
                  >
                    {philippinesShop.map((shop) => {
                      return (
                        <a
                          href={shop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
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
                <div className="dropdown" onMouseLeave={handleCloseDropdown}>
                  <Link to="#" onClick={usaHandler}>
                    United States <i className="fa-solid fa-angle-down"></i>
                  </Link>
                  <div
                    className={
                      usaLink ? "dropdown-content" : "dropdown-content-hide"
                    }
                    style={{
                      visibility: usaLink ? "visible" : "hidden",
                      opacity: usaLink ? "1" : "0",
                    }}
                  >
                    {usaShop.map((shop) => {
                      return (
                        <a
                          href={shop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <li>Canada (English)</li>
                <li>Canada (Français)</li>
                <div className="dropdown" onMouseLeave={handleCloseDropdown}>
                  <Link to="#" onClick={ecuadorHandler}>
                    Ecuador <i className="fa-solid fa-angle-down"></i>
                  </Link>
                  <div
                    className={
                      ecuadorLink ? "dropdown-content" : "dropdown-content-hide"
                    }
                    style={{
                      visibility: ecuadorLink ? "visible" : "hidden",
                      opacity: ecuadorLink ? "1" : "0",
                    }}
                  >
                    {ecuadorShop.map((shop) => {
                      return (
                        <a
                          href={shop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
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
