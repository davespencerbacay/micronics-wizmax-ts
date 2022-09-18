import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Container,
  Row,
  Col,
  Dropdown,
} from "reactstrap";
import { IMAGES, LANGUAGES } from "constants/";
import { Link } from "react-router-dom";
import { LOCALES } from "i18n";
import intl from "i18n/intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBarDesktop.scss";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { NavigationBarSubLinks } from "./NavigationBarSubLinks";
import { productSubLinks, supportSubLinks } from "./links/links";
import { ROUTE_PATH } from "constants/routes";

interface INavigationBarDesktop {
  changeLanguage: (language: string) => void;
}

const NavigationBarDesktop: React.FC<INavigationBarDesktop> = (props) => {
  //Select Language Dropdown
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);
  const toggle = () => setLanguageDropDownOpen((prevState) => prevState);

  const languageDropDownHandler = () => {
    setLanguageDropDownOpen((prevState) => !prevState);
  };

  const languageDropdownMenuClassname = classNames({
    "language-dropdown-menu": true,
    "language-dropdown-menu-hide": languageDropDownOpen === false,
  });

  //Products Sub Links
  const [showSubLinks, setShowSubLinks] = useState(false);

  const subLinksHandler = () => {
    setShowSubLinks((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <Navbar className="navbar" fixed="top">
        <Container fluid>
          <Row>
            <Col xs={2} md={2} lg={2}>
              <NavbarBrand className="navbar-brand">
                <Link to={ROUTE_PATH.INDEX}>
                  <img
                    className="navbar-logo"
                    alt="navbar-logo"
                    src={IMAGES.COMPANY_LOGOS.NAVBAR}
                  />
                </Link>
              </NavbarBrand>
            </Col>
            <Col xs={8} md={8} lg={8}>
              <Nav className="navbar-nav">
                <NavItem className="navbar-item">
                  <Link className="links" to={ROUTE_PATH.INDEX}>
                    {intl("navigationBar.home")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.PRODUCT}
                    onMouseOver={subLinksHandler}
                    onMouseLeave={subLinksHandler}
                  >
                    {intl("navigationBar.products")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.SUPPORT}
                    onMouseOver={subLinksHandler}
                    onMouseLeave={subLinksHandler}
                  >
                    {intl("navigationBar.support")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.SHOP}
                    onMouseOver={subLinksHandler}
                    onMouseLeave={subLinksHandler}
                  >
                    {intl("navigationBar.shop")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.CONTACT}
                    onMouseOver={subLinksHandler}
                    onMouseLeave={subLinksHandler}
                  >
                    {intl("navigationBar.contact")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <FontAwesomeIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                  />
                </NavItem>
              </Nav>
            </Col>
            <Col xs={2} md={2} lg={2}>
              <Dropdown
                className="select-language"
                isOpen={languageDropDownOpen}
                toggle={toggle}
              >
                <DropdownToggle className="language-menu-toggler">
                  <FontAwesomeIcon
                    className="globe-icon"
                    icon={faGlobe}
                    onClick={languageDropDownHandler}
                  />
                </DropdownToggle>

                <DropdownMenu className={languageDropdownMenuClassname}>
                  <DropdownItem
                    className="language"
                    onClick={() => props.changeLanguage(LOCALES.KOREAN)}
                  >
                    {LANGUAGES.KOREA}
                  </DropdownItem>
                  <DropdownItem
                    className="language"
                    onClick={() => props.changeLanguage(LOCALES.ENGLISH)}
                  >
                    {LANGUAGES.EN}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {showSubLinks && (
        <NavigationBarSubLinks
          subLinks={productSubLinks}
        ></NavigationBarSubLinks>
      )}
      {showSubLinks && (
        <NavigationBarSubLinks
          subLinks={supportSubLinks}
        ></NavigationBarSubLinks>
      )}
    </React.Fragment>
  );
};

export default NavigationBarDesktop;
