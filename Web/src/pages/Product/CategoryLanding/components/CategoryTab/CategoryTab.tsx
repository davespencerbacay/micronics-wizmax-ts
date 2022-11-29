import { ROUTE_PATH } from "constants/routes";
import { productCategories } from "data/productCategories";
import intl from "i18n/intl";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./CategoryTab.scss";

type CategoryTabType = {
  refLinkHandler: (any: any) => void;
};

const CategoryTab: React.FC<CategoryTabType> = (props) => {
  return (
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
  );
};

export default CategoryTab;
