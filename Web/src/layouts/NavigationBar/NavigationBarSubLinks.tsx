import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { IShopLinks, SubLinksType } from "./links/links";
import "./NavigationBarDesktop.scss";

interface INavigationBarSubLinks {
  subLinks: SubLinksType[] | null;
  hasIcon?: boolean;
  className?: string;
  children?: string | JSX.Element;
  showSubLinks?: boolean;
  hideAllLinks: () => void;
}

export const NavigationBarSubLinks: React.FC<INavigationBarSubLinks> = (
  props
) => {
  const [hideSubNavbar, setHideSubNavbar] = useState(false);

  const hideSubNavbarHandler = () => {
    setHideSubNavbar(true);
    props.hideAllLinks();
  };

  if (props.showSubLinks || !hideSubNavbar) {
    return (
      <Navbar
        className="sub-navbar"
        fixed="top"
        onMouseLeave={hideSubNavbarHandler}
      >
        <Nav className="sub-navbar-nav">
          {props.subLinks &&
            props.subLinks!.map((sublink) => {
              return (
                <NavItem className={sublink.className}>
                  <Link to={sublink.path}>
                    {sublink.icon}
                    <div>{sublink.text}</div>
                  </Link>
                  {sublink.shops?.map((shop: IShopLinks) => {
                    return <Link to={shop.name}>{shop.name}</Link>;
                  })}
                </NavItem>
              );
            })}
        </Nav>
      </Navbar>
    );
  }
  return <React.Fragment />;
};
