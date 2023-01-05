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
  FormGroup,
  Input,
} from "reactstrap";
import { IMAGES, LANGUAGES, STORAGE_KEY } from "constants/";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LOCALES } from "i18n";
import { useIntl } from "i18n/intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
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
import useChangeTheme from "hooks/themeHooks/useChangeTheme";
import SearchBarDesktop from "./search/SearchBarDesktop";
import { saveToStorage } from "helpers/localStorage";
import useIsDarkMode from "hooks/themeHooks/useIsDarkMode";
import { ColumnProps } from "reactstrap/types/lib/Col";

interface INavigationBarDesktop {
  changeLanguage: (language: string) => void;
}
interface INavItems {
  text: string;
  path: string;
  handler?: () => void;
  onClick?: () => void;
}

interface IColValue {
  id: string | number;
  col: {
    xs: ColumnProps;
    sm: ColumnProps;
    md: ColumnProps;
    lg: ColumnProps;
  };
  component: React.ReactNode;
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
  const subNavBarHandler = () => {
    setShowSubLinks(false);
  };

  const linkHandler = (link: LinkType) => {
    setShowSubLinks(true);
    setHoveredLinks({
      productLinks: link === "products",
      supportLinks: link === "support",
      shopLinks: link === "shop",
      contactLinks: link === "contact",
    });
  };
  const navigate = useNavigate();
  const navigateToHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
    setShowSubLinks(false);
  };
  // LIGHT AND DARK THEME CONTEXT
  const isDarkMode = useIsDarkMode();

  const changeTheme = useChangeTheme();

  const switchHandler = () => {
    saveToStorage(STORAGE_KEY.DARK_MODE, false);
    changeTheme(!isDarkMode);
  };
  //SEARCHBAR
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const SearchBarHandler = () => {
    setOpenSearchBar((prevState) => !prevState);
  };

  const navItems: INavItems[] = [
    {
      text: useIntl("navigationBar.home"),
      path: ROUTE_PATH.INDEX,
      // handler: () => hideAllLinks(),
      onClick: () => navigateToHome(),
    },
    {
      text: useIntl("navigationBar.products"),
      path: ROUTE_PATH.PRODUCT,
      handler: () => navLinkHandlers("products"),
      onClick: () => linkHandler("products"),
    },
    {
      text: useIntl("navigationBar.support"),
      path: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
      handler: () => navLinkHandlers("support"),
      onClick: () => linkHandler("support"),
    },
    {
      text: useIntl("navigationBar.shop"),
      path: ROUTE_PATH.SHOP,
      handler: () => navLinkHandlers("shop"),
      onClick: () => linkHandler("shop"),
    },
    {
      text: useIntl("navigationBar.contact"),
      path: ROUTE_PATH.CONTACT,
      handler: () => navLinkHandlers("contact"),
      onClick: () => linkHandler("contact"),
    },
  ];
  const colValues: IColValue[] = [
    {
      id: 1,
      col: {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2,
      },
      component: (
        <NavbarBrand className="navbar-brand">
          <Link to={ROUTE_PATH.INDEX}>
            <img
              className="navbar-logo"
              alt="navbar-logo"
              src={
                isDarkMode
                  ? IMAGES.COMPANY_LOGOS.NAVBAR_BLACK
                  : IMAGES.COMPANY_LOGOS.NAVBAR_WHITE
              }
            />
          </Link>
        </NavbarBrand>
      ),
    },
    {
      id: 2,
      col: {
        xs: 8,
        sm: 8,
        md: 8,
        lg: 8,
      },
      component: (
        <Nav className="navbar-nav">
          {navItems.map((item, index) => {
            return (
              <NavItem className="navbar-item" key={index}>
                <button
                  className="links"
                  onMouseOver={item.handler}
                  onClick={item.onClick}
                >
                  {item.text}
                </button>
              </NavItem>
            );
          })}
          <NavItem className="navbar-item">
            <FontAwesomeIcon
              className="search-icon"
              icon={faMagnifyingGlass}
              onClick={SearchBarHandler}
            />
          </NavItem>
        </Nav>
      ),
    },
    // {
    //   id: 3,
    //   col: {
    //     xs: 2,
    //     sm: 2,
    //     md: 2,
    //     lg: 2,
    //   },
    //   component: (
    //     <Dropdown
    //       className="select-language"
    //       isOpen={languageDropDownOpen}
    //       toggle={toggle}
    //     >
    //       {/* <FontAwesomeIcon
    //         className="theme-icon"
    //         icon={isDarkMode ? faMoon : faSun}
    //       />
    //       <FormGroup className="switch-container" switch>
    //         <Input
    //           type="switch"
    //           role="switch"
    //           defaultChecked={isDarkMode}
    //           onClick={switchHandler}
    //         />
    //       </FormGroup> */}
    //       <DropdownToggle className="language-menu-toggler">
    //         <FontAwesomeIcon
    //           className="globe-icon"
    //           icon={faGlobe}
    //           onClick={languageDropDownHandler}
    //         />
    //       </DropdownToggle>
    //       <DropdownMenu className={languageDropdownMenuClassname}>
    //         <DropdownItem
    //           className="language"
    //           onClick={() => props.changeLanguage(LOCALES.KOREAN)}
    //         >
    //           {LANGUAGES.KOREA}
    //         </DropdownItem>
    //         <DropdownItem
    //           className="language"
    //           onClick={() => props.changeLanguage(LOCALES.ENGLISH)}
    //         >
    //           {LANGUAGES.EN}
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //   ),
    // },
  ];

  return (
    <React.Fragment>
      <div onMouseLeave={subNavBarHandler}>
        <Navbar className="navbar" fixed="top">
          <Container fluid className="container-fluid">
            <Row>
              {colValues.map((colValue) => (
                <Col {...colValue.col} key={colValue.id}>
                  {colValue.component}
                </Col>
              ))}
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
          ></NavigationBarSubLinks>
        )}
        {openSearchBar && <SearchBarDesktop />}
      </div>
    </React.Fragment>
  );
};

export default NavigationBarDesktop;
