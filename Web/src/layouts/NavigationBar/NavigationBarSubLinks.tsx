import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import {
  IInquiryTexts,
  IBecomeDistributorTexts,
  SubLinksType,
} from "./links/links";
import "./NavigationBarDesktop.scss";
import { ROUTE_PATH } from "constants/routes";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import { IShops } from "constants/shops";
import intl from "i18n/intl";
import { getRouteId, saveRouteId } from "helpers/routeId";

interface INavigationBarSubLinks {
  subLinks: SubLinksType[] | null;
  hasIcon?: boolean;
  className?: string;
  children?: string | JSX.Element;
  showSubLinks?: boolean;
  hideAllLinks: () => void;
  // navRoute: (data: number) => void;
}

export const NavigationBarSubLinks: React.FC<INavigationBarSubLinks> = (
  props
) => {
  const [hideSubNavbar, setHideSubNavbar] = useState(false);
  const [navSaveRouteId, setNavSaveRouteId] = useState(0);
  const GetLinkID = () => {
    let productLink = props.subLinks?.find((link) => link.id === "product");
    let supportLinkID = props.subLinks?.find((link) => link.id === "support");
    let shopLinkID = props.subLinks?.find((link) => link.id === "shop");

    return productLink ? (
      <Link className="view-all-nav-item" to={ROUTE_PATH.PRODUCT}>
        {intl("productSubLinks.viewAllProducts")} <GoTo width={10} />
      </Link>
    ) : supportLinkID ? (
      <Link
        className="view-all-nav-item"
        to={ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES}
      >
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
    setHideSubNavbar(false);
    props.hideAllLinks();
  };

  const routeHandler = (path: any) => {
    console.log("IPAPASA", path);
    setNavSaveRouteId(path);
    // if (path === "Keyboard") {
    //   window.scrollTo(0, 2200);
    // } else if (path === "Headset") {
    //   window.scrollTo(0, 4800);
    // } else if (path === "FC") {
    //   window.scrollTo(0, 6900);
    // } else if (path === "PC Case") {
    //   window.scrollTo(0, 8700);
    // } else if (path === "PSU") {
    //   window.scrollTo(0, 11700);
    // } else if (path === "Accessories") {
    //   window.scrollTo(0, 13200);
    // } else {
    //   window.scrollTo(0, 0);
    // }
  };

  useEffect(() => {
    saveRouteId("routeId",navSaveRouteId);
  },[navSaveRouteId])

  if (props.showSubLinks || !hideSubNavbar) {
    return (
      <div className="sub-navbar-container">
        <Nav className="sub-navbar-nav">
          {props.subLinks &&
            props.subLinks!.map((sublink, index) => {
              return (
                <NavItem key={index} className={sublink.className}>
                  {sublink.id === "contact" ? (
                    <Link to={sublink.path}>
                      <div>
                        {sublink.text}
                        {sublink.icon}
                      </div>
                    </Link>
                  ) : sublink.id === "product" ? (
                    <div
                      style={{ cursor: "normal" }}
                      onClick={() => routeHandler(sublink.routeId)}
                    >
                      <Link to={sublink.path}>
                        {sublink.icon}
                        <div>{sublink.text}</div>
                      </Link>
                      {/* {sublink.icon}
                      <div>{sublink.text}</div> */}
                    </div>
                  ) : (
                    // <div onClick={() => routeHandler(sublink.route)}>
                    //   <Link to={sublink.path}>
                    //     {sublink.icon}
                    //     <div>{sublink.text}</div>
                    //   </Link>
                    // </div>
                    <div></div>
                  )}

                  {sublink.id === "shop" &&
                    sublink.shops?.map((shop: IShops) => {
                      console.log(shop.name);
                      return (
                        <React.Fragment>
                          {shop.name === "Wizmax Official Store" ? (
                            <p className="disabled-links">
                              Wizmax Official Store
                            </p>
                          ) : (
                            <a
                              className="shop-links"
                              href={shop.link}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {shop.name}
                            </a>
                          )}
                        </React.Fragment>
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
      </div>
    );
  }
  return <React.Fragment />;
};
