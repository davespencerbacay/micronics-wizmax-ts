import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import {
  IShopLinks,
  IInquiryTexts,
  IBecomeDistributorTexts,
  SubLinksType,
} from "./links/links";
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
                  {sublink.id === "contact" ? (
                    <Link to={sublink.path}>
                      <div>
                        {sublink.text}
                        {sublink.icon}
                      </div>
                    </Link>
                  ) : sublink.id === "shop" ? (
                    <Link to={sublink.path}>
                      {sublink.icon}
                      <div>{sublink.text}</div>
                    </Link>
                  ) : (
                    <Link to={sublink.path}>
                      {sublink.icon}
                      <div>{sublink.text}</div>
                    </Link>
                  )}
                  {sublink.id === "shop" &&
                    sublink.shops?.map((shop: IShopLinks) => {
                      return (
                        <a
                          className="shop-links"
                          href={shop.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {shop.name}
                        </a>
                      );
                    })}
                  {sublink.id === "contact" &&
                    sublink.inquiryTexts?.map((text: IInquiryTexts) => {
                      return <p className="contact-links">{text.text}</p>;
                    })}
                  {sublink.id === "contact" &&
                    sublink.becomeDistributorTexts?.map(
                      (text: IBecomeDistributorTexts) => {
                        return <p className="contact-links">{text.text}</p>;
                      }
                    )}
                </NavItem>
              );
            })}
          {/* {props.subLinks &&
            props.subLinks!.map((sublink) => {
              return (
                <NavItem className={sublink.className}>
                  <Link to={sublink.path}>
                    {sublink.icon}
                    <div>{sublink.text}</div>
                  </Link>
                  {sublink.shops?.map((shop: IShopLinks) => {
                    return (
                      <Link className="shop-links" to={shop.name}>
                        {shop.name}
                      </Link>
                    );
                  })}
                  {sublink.inquiryTexts?.map((text: IInquiryTexts) => {
                    return (
                      <Link className="contact-links" to={text.text}>
                        {text.text}
                      </Link>
                    );
                  })}
                  {sublink.becomeDistributorTexts?.map(
                    (text: IBecomeDistributorTexts) => {
                      return (
                        <Link className="contact-links" to={text.text}>
                          {text.text}
                        </Link>
                      );
                    }
                  )}
                </NavItem>
              );
            })} */}
        </Nav>
      </Navbar>
    );
  }
  return <React.Fragment />;
};
