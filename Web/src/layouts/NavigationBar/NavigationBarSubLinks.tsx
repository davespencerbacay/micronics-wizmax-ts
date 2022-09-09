import classnames from "classnames";
import intl from "i18n/intl";
import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavigationBarDesktop.scss";

interface IProductSubLink {
  subProducts: boolean;
}

export const ProductSubLinks: React.FC<IProductSubLink> = (props) => {
  const subNavbarClassnames = classnames({
    "sub-navbar": true,
    "sub-navbar-hide": props.subProducts,
  });

  return (
    <React.Fragment>
      <Navbar className={subNavbarClassnames} fixed="top">
        <Nav className="sub-navbar-nav">
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.mouse")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.keyboard")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.headset")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.fansCoolers")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.pcCase")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.psu")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("productSubLinks.accessories")}
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
interface ISupportLink {
  subSupport: boolean;
}
export const SupportSubLinks: React.FC<ISupportLink> = (props) => {
  return (
    <React.Fragment>
      <Navbar className="sub-navbar" fixed="top">
        <Nav className="sub-navbar-nav">
          <NavItem className="sub-navbar-items">
            {intl("supportSubLinks.driversSoftwares")}
          </NavItem>
          <NavItem className="sub-navbar-items">
            {intl("supportSubLinks.brochuresManuals")}
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
interface IShopLink {
  subShop: boolean;
}
export const ShopSubLinks: React.FC<IShopLink> = (props) => {
  return (
    <React.Fragment>
      <Navbar className="sub-navbar" fixed="top">
        <Nav>
          <NavItem className="sub-navbar-items">SHOP</NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
interface IContactLink {
  subContact: boolean;
}
export const ContactSubLinks: React.FC<IContactLink> = (props) => {
  return (
    <React.Fragment>
      <Navbar className="sub-navbar" fixed="top">
        <Nav>
          <NavItem className="sub-navbar-items">CONTACT</NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
