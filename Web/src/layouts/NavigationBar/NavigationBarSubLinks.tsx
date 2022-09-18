import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { SubLinksType } from "./links/links";
import "./NavigationBarDesktop.scss";

interface INavigationBarSubLinks {
  subLinks: SubLinksType[] | null;
  hasIcon?: boolean;
  className?: string;
  children?: string | JSX.Element;
  showSubLinks?: boolean;
}

export const NavigationBarSubLinks: React.FC<INavigationBarSubLinks> = (
  props
) => {
  const subNavbarClassnames = classnames({
    "sub-navbar": true,
    "sub-navbar-hide": props.showSubLinks,
  });

  return (
    <React.Fragment>
      <Navbar className={subNavbarClassnames} fixed="top">
        <Nav className="sub-navbar-nav">
          {props.subLinks!.map((sublink) => {
            return (
              <NavItem className="sub-navbar-items">
                <Link to={sublink.path}>
                  {sublink.icon}
                  <div>{sublink.text}</div>
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
