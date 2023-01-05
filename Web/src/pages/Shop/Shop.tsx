import React, { useContext, useEffect, useState } from "react";
import Banner from "library/Banner/Banner";
import {
  Button,
  Col,
  Collapse,
  Container,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import "./Shop.scss";
import { ThemeContext } from "context/ThemeContext";
import { Link } from "react-router-dom";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import classNames from "classnames";
import { REGIONS_COUNTRIES } from "constants/shops";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";

const Shop: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  const isDarkMode = themeCtx.state.darkMode;

  const [isOpen, setIsOpen] = useState<any>(false);
  const [isCountryClicked, setIsCountryClicked] = useState<any>("");

  const toggle = (country: any) => {
    let shopOpen = [isOpen];
    shopOpen[country] = !shopOpen[country];
    console.log(shopOpen);
    if (isOpen) {
      setIsOpen(!shopOpen);
      setIsCountryClicked("");
    } else {
      setIsOpen(shopOpen);
      setIsCountryClicked(country);
    }
  };
  const close = (country: any) => {
    let shopClose = [isOpen];
    shopClose[country] = !shopClose[country];
    setIsOpen(!shopClose);
    setIsCountryClicked("");
  };

  // const arrowClassname = classNames({
  //   arrowOpen: !isOpen,
  //   arrowClose: isOpen,
  // });

  return (
    <React.Fragment>
      <Banner
        title="Find Your Local Store"
        variant={isDarkMode}
        align="center"
        subTitle="Get the best products for your workspace"
      />
      <Container>
        {REGIONS_COUNTRIES.REGIONS.map((regions: any) => {
          return (
            <div className="shop-container">
              <h5>{regions.REGION}</h5>
              <Row>
                {regions.COUNTRIES.map((countries: any, index: any) => {
                  return (
                    <Col xs={12} md={6} lg={4}>
                      <Button
                        key={index}
                        className="country-buttons"
                        onClick={() => toggle(countries.country)}
                        onBlur={() => close(countries.country)}
                        style={{ marginBottom: "1rem" }}
                      >
                        {countries.country}
                        <span
                          className={
                            isCountryClicked === countries.country
                              ? "arrowClose"
                              : "arrowOpen"
                          }
                        >
                          <GoTo />
                        </span>
                      </Button>
                      <Collapse isOpen={isOpen[countries.country]}>
                        {countries.shops?.map((shop: any, index: any) => {
                          return (
                            <a
                              className="links"
                              href={shop.link}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {shop.name}
                            </a>
                          );
                        })}
                      </Collapse>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </Container>
      <div className="shop-footer">
        <h3>Need More Help?</h3>
        <button>Contact Support</button>
      </div>
      <ScrollToTopButton />
    </React.Fragment>
  );
};

export default Shop;
