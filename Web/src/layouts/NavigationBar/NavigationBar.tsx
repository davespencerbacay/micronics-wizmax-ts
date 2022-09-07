import React from "react";
<<<<<<< HEAD
import useChangeLanguage from "hooks/useChangeLanguage";
import useResponsive from "hooks/useResponsive";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

const NavigationBar: React.FC = () => {
  const changeLanguage = useChangeLanguage();
  const isMobileMode = useResponsive("mobile");
  return isMobileMode ? (
    <NavigationBarMobile {...{ changeLanguage }} />
  ) : (
    <NavigationBarDesktop {...{ changeLanguage }} />
=======
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { IMAGES, ROUTE_PATH, LANGUAGES } from "constants/";
import { Link } from "react-router-dom";
import "./NavigationBar.scss";
import useChangeLanguage from "hooks/useChangeLanguage";
import { LOCALES } from "i18n";
import intl from "i18n/intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavigationLinks: React.FC = () => {
  const navbarLinks = [
    {
      routePath: ROUTE_PATH.INDEX,
      text: intl("navigationBar.home"),
    },
    {
      routePath: ROUTE_PATH.PRODUCT,
      text: intl("navigationBar.products"),
    },
    {
      routePath: ROUTE_PATH.SUPPORT,
      text: intl("navigationBar.support"),
    },
    {
      routePath: ROUTE_PATH.SHOP,
      text: intl("navigationBar.shop"),
    },
    {
      routePath: ROUTE_PATH.CONTACT,
      text: intl("navigationBar.contact"),
    },
  ];

  return (
    <NavItem className="navbar-item">
      {navbarLinks.map((link, index) => (
        <Link to={link.routePath} key={index}>
          {link.text}
        </Link>
      ))}
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
    </NavItem>
  );
};

const NavigationBar: React.FC = () => {
  const changeLanguage = useChangeLanguage();
  return (
    <React.Fragment>
      <Navbar className="navbar" fixed="top">
        <NavbarBrand>
          <Link to={ROUTE_PATH.INDEX}>
            <img
              alt="logo"
              src={IMAGES.COMPANY_LOGOS.NAVBAR}
              style={{
                height: 30,
                width: "13rem",
              }}
            />
          </Link>
        </NavbarBrand>
        <Nav className="navbar-nav">
          <NavigationLinks />
        </Nav>
        <UncontrolledDropdown>
          <NavbarToggler />
          <DropdownToggle caret>{intl("global.selectLanguage")}</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem onClick={() => changeLanguage(LOCALES.KOREAN)}>
              {LANGUAGES.KOREA}
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage(LOCALES.ENGLISH)}>
              {LANGUAGES.EN}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
    </React.Fragment>
>>>>>>> 52c3401bf9db26c856f8c0d7e1a25469607892c5
  );
};

export default NavigationBar;
