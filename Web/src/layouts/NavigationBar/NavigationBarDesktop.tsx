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
import { IMAGES, ROUTE_PATH, LANGUAGES } from "constants/";
import { Link } from "react-router-dom";
import { LOCALES } from "i18n";
import intl from "i18n/intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBarDesktop.scss";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  ContactSubLinks,
  ProductSubLinks,
  ShopSubLinks,
  SupportSubLinks,
} from "./NavigationBarSubLinks";

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
  const [subProducts, setSubProducts] = useState(false);
  const [subSupport, setSubSupport] = useState(false);
  const [subShop, setSubShop] = useState(false);
  const [subContact, setSubContact] = useState(false);
  const showSubProducts = () => {
    setSubProducts((prevState) => !prevState);
  };
  const showSubSupport = () => {
    setSubSupport((prevState) => !prevState);
  };
  const showSubShop = () => {
    setSubShop((prevState) => !prevState);
  };
  const showSubContact = () => {
    setSubContact((prevState) => !prevState);
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
                    onMouseOver={showSubProducts}
                    onMouseLeave={showSubProducts}
                  >
                    {intl("navigationBar.products")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.SUPPORT}
                    onMouseOver={showSubSupport}
                    onMouseLeave={showSubSupport}
                  >
                    {intl("navigationBar.support")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.SHOP}
                    onMouseOver={showSubShop}
                    onMouseLeave={showSubShop}
                  >
                    {intl("navigationBar.shop")}
                  </Link>
                </NavItem>
                <NavItem className="navbar-item">
                  <Link
                    className="links"
                    to={ROUTE_PATH.CONTACT}
                    onMouseOver={showSubContact}
                    onMouseLeave={showSubContact}
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
      {subProducts && (
        <ProductSubLinks subProducts={subProducts}></ProductSubLinks>
      )}
      {subSupport && (
        <SupportSubLinks subSupport={subSupport}></SupportSubLinks>
      )}
      {subShop && <ShopSubLinks subShop={subShop}></ShopSubLinks>}
      {subContact && (
        <ContactSubLinks subContact={subContact}></ContactSubLinks>
      )}
    </React.Fragment>
  );
};

export default NavigationBarDesktop;
