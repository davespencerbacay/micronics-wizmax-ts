import { fa1, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTE_PATH } from "constants/routes";
import { productCategories } from "data/productCategories";
import useResponsive from "hooks/useResponsive";
import intl from "i18n/intl";
import Img from "library/Images/Image";
import ChevronRight from "library/Images/Navigations/ChevronArrows/ChevronRight";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./CategoryTab.scss";

type CategoryTabType = {
  refLinkHandler: (any: any) => void;
};

const CategoryTab: React.FC<CategoryTabType> = (props) => {
  const isMobile = useResponsive("mobile");
  // const [navClick, isNavClick] = useState(false);
  // const navMobileRef = React.createRef<any>();
  // useEffect(() => {}, [navMobileRef, navClick]);
  // const navClickHandler = () => {
  //   isNavClick((prevState) => !prevState);
  //   navMobileRef.current.focus;
  //   console.log(navMobileRef.current);
  // };
  // const navMobileUnfocusHandler = () => {
  //   isNavClick(false);
  // };
  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      {isMobile ? (
        <div
          tabIndex={0}
          className={`product-nav-mobile ${showNav ? null : "inactive"}`}
          // ref={navMobileRef}
          // onBlur={navMobileUnfocusHandler}
        >
          <div
            className="product-nav-mobile-arrows"
            onClick={toggleNavHandler}
            style={{ transform: showNav ? "rotateY(180deg)" : "" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Nav className="product-nav-mobile-container">
            {productCategories.map((cat, index) => {
              return (
                <React.Fragment>
                  {
                    <NavItem
                      className="product-nav-mobile-items"
                      key={cat.categoryId}
                    >
                      {/* <img
                        src={cat.icon}
                        alt={cat.icon}
                        onClick={() => {
                          props.refLinkHandler(index);
                          // navMobileUnfocusHandler();
                        }}
                      /> */}

                      <p
                        onClick={() => {
                          props.refLinkHandler(index);
                        }}
                      >
                        {cat.name}
                      </p>
                      {/* <Link to={cat.link}>{cat.name}</Link> */}
                    </NavItem>
                  }
                </React.Fragment>
              );
            })}
          </Nav>
        </div>
      ) : (
        <div>
          <Nav className="nav-container" pills>
            {productCategories.map((cat, index) => (
              <NavItem className="nav-items" key={cat.categoryId}>
                <p onClick={() => props.refLinkHandler(index)}>{cat.name}</p>
                {/* <Link to={cat.link}>{cat.name}</Link> */}
              </NavItem>
            ))}
          </Nav>
          <div className="shop-now">
            {intl("productPage.checkAndShop")} &nbsp;
            <Link to={ROUTE_PATH.SHOP}>
              <b>
                {intl("productPage.shopNow")}
                <GoTo width={10}></GoTo>
              </b>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CategoryTab;
