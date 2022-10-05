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
import intl, { useIntl } from "i18n/intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBarDesktop.scss";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { NavigationBarSubLinks } from "./NavigationBarSubLinks";
import {
  productSubLinks,
  supportSubLinks,
  shopSubLinks,
  contactSubLinks,
} from "./links/links";
import { ROUTE_PATH } from "constants/routes";

interface INavigationBarDesktop {
  changeLanguage: (language: string) => void;
}
interface INavItems {
  text: string;
  path: string;
  onMouseOver: () => void;
  onMouseLeave?: () => void;
}
type LinkType = "home" | "products" | "support" | "shop" | "contact";

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
  const [hoveredLinks, setHoveredLinks] = useState({
    productLinks: false,
    supportLinks: false,
    shopLinks: false,
    contactLinks: false,
  });

  const navLinkHandlers = (link: LinkType) => {
    setShowSubLinks(true);
    setHoveredLinks({
      productLinks: link === "products",
      supportLinks: link === "support",
      shopLinks: link === "shop",
      contactLinks: link === "contact",
    });
  };

  const hideAllLinks = () => {
    setShowSubLinks(false);
    setHoveredLinks({
      productLinks: false,
      supportLinks: false,
      shopLinks: false,
      contactLinks: false,
    });
  };

  const navItems: INavItems[] = [
    {
      text: useIntl("navigationBar.home"),
      path: ROUTE_PATH.INDEX,
      onMouseOver: () => hideAllLinks(),
    },
    {
      text: useIntl("navigationBar.products"),
      path: ROUTE_PATH.PRODUCT,
      onMouseLeave: () => navLinkHandlers("products"),
      onMouseOver: () => navLinkHandlers("products"),
    },
    {
      text: useIntl("navigationBar.support"),
      path: ROUTE_PATH.SUPPORT,
      onMouseLeave: () => navLinkHandlers("support"),
      onMouseOver: () => navLinkHandlers("support"),
    },
    {
      text: useIntl("navigationBar.shop"),
      path: ROUTE_PATH.SHOP,
      onMouseLeave: () => navLinkHandlers("shop"),
      onMouseOver: () => navLinkHandlers("shop"),
    },
    {
      text: useIntl("navigationBar.contact"),
      path: ROUTE_PATH.CONTACT,
      onMouseLeave: () => navLinkHandlers("contact"),
      onMouseOver: () => navLinkHandlers("contact"),
    },
  ];

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
                {navItems.map((item, index) => {
                  return (
                    <NavItem className="navbar-item" key={index}>
                      <Link
                        className="links"
                        to={item.path}
                        onMouseOver={item.onMouseOver}
                        onMouseLeave={item.onMouseLeave}
                      >
                        {item.text}
                      </Link>
                    </NavItem>
                  );
                })}
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
          subLinks={
            hoveredLinks?.productLinks
              ? productSubLinks
              : hoveredLinks?.supportLinks
              ? supportSubLinks
              : hoveredLinks?.shopLinks
              ? shopSubLinks
              : hoveredLinks?.contactLinks
              ? contactSubLinks
              : null
          }
          hideAllLinks={hideAllLinks}
          // shopLinks={
          //   hoveredLinks?.productLinks
          //     ? productSubLinks
          //     : hoveredLinks?.supportLinks
          //     ? supportSubLinks
          //     : hoveredLinks?.shopLinks
          //     ? shopSubLinks
          //     : null
          // }
        ></NavigationBarSubLinks>
      )}
    </React.Fragment>
  );
};

export default NavigationBarDesktop;