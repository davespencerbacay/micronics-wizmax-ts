import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import {
  IInquiryTexts,
  IBecomeDistributorTexts,
  SubLinksType,
} from "./links/links";
import "./NavigationBarDesktop.scss";
import { ROUTE_PATH } from "constants/routes";
import GoTo from "library/Icons/Navigations/GoTo/GoTo";
import { IShops } from "constants/shops";
import intl from "i18n/intl";

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

  const GetLinkID = () => {
    let productLink = props.subLinks?.find((link) => link.id === "product");
    let supportLinkID = props.subLinks?.find((link) => link.id === "support");
    let shopLinkID = props.subLinks?.find((link) => link.id === "shop");

    return productLink ? (
      <Link className="view-all-nav-item" to={ROUTE_PATH.PRODUCT}>
        {intl("productSubLinks.viewAllProducts")} <GoTo width={10} />
      </Link>
    ) : supportLinkID ? (
      <Link className="view-all-nav-item" to={ROUTE_PATH.SUPPORT}>
        {intl("supportSubLinks.viewAll")} <GoTo width={10} />
      </Link>
    ) : shopLinkID ? (
      <Link className="view-all-nav-item" to={ROUTE_PATH.SHOP}>
        {intl("shopSubLinks.viewAllShops")} <GoTo width={10} />
      </Link>
    ) : (
      <div className="blank-nav-item">
        {intl("contactSubLinks.wizmaxGlobal")}
      </div>
    );
  };

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
                  ) : (
                    <Link to={sublink.path}>
                      {sublink.icon}
                      <div>{sublink.text}</div>
                    </Link>
                  )}

                  {sublink.id === "shop" &&
                    sublink.shops?.map((shop: IShops) => {
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
                    sublink.inquiryTexts?.map((text: IInquiryTexts) => (
                      <p className="contact-links">{text.text}</p>
                    ))}
                  {sublink.id === "contact" &&
                    sublink.becomeDistributorTexts?.map(
                      (text: IBecomeDistributorTexts) => (
                        <p className="contact-links">{text.text}</p>
                      )
                    )}
                </NavItem>
              );
            })}
        </Nav>
        <GetLinkID />
      </Navbar>
    );
  }
  return <React.Fragment />;
};
