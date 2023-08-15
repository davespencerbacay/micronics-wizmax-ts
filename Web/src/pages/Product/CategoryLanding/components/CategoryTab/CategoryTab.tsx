import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTE_PATH } from "constants/routes";
import { productCategories } from "data/productCategories";
import useResponsive from "hooks/useResponsive";
import intl from "i18n/intl";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React, { useEffect, useState } from "react";
import {
  Link,
  createSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./CategoryTab.scss";
import classNames from "classnames";

type CategoryTabType = {
  refLinkHandler: (any: any) => void;
};

const CategoryTab: React.FC<CategoryTabType> = (props) => {
  const isMobile = useResponsive("mobile");
  const [showNav, setShowNav] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  const navigate = useNavigate();

  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const search = useLocation().search;
  const categoryId = new URLSearchParams(search).get("categoryId");

  return (
    <React.Fragment>
      {isMobile ? (
        <div
          className={`product-nav-mobile ${showNav ? null : "inactive"}`}
          onClick={toggleNavHandler}
          // ref={navMobileRef}
          // onBlur={navMobileUnfocusHandler}
        >
          <div
            className="product-nav-mobile-arrows"
            // onClick={toggleNavHandler}
            style={{ transform: showNav ? "rotateY(180deg)" : "" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Nav
            className={`product-nav-mobile-container ${
              showNav ? null : "inactive"
            }`}
          >
            {productCategories.map((cat, index) => {
              const navSublinkClassnames = classNames({
                active: index === parseInt(categoryId ?? ""),
              });
              return (
                <React.Fragment>
                  {
                    <NavItem
                      className="product-nav-mobile-items"
                      key={cat.categoryId}
                    >
                      <p
                        onClick={() => {
                          props.refLinkHandler(index);
                          navigate({
                            pathname: "",
                            search: createSearchParams({
                              foo: "bar",
                            }).toString(),
                          });
                        }}
                        className={navSublinkClassnames}
                      >
                        {cat.name}
                      </p>
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
            {productCategories.map((cat, index) => {
              const navSublinkClassnames = classNames({
                active: index === parseInt(categoryId ?? ""),
              });
              return (
                <NavItem className="nav-items" key={cat.categoryId}>
                  <p
                    onClick={() => {
                      props.refLinkHandler(index);
                      navigate({
                        pathname: "",
                        search: createSearchParams({
                          categoryId: index?.toString(),
                        }).toString(),
                      });
                    }}
                    className={navSublinkClassnames}
                  >
                    {cat.name}
                  </p>
                </NavItem>
              );
            })}
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
