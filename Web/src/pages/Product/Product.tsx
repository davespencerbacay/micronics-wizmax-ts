import React from "react";
import CategoryBanner from "./CategoryLanding/components/CategoryBanner/CategoryBanner";
import CategoryCaption from "./CategoryLanding/components/CategoryCaption/CategoryCaption";
import CategoryTab from "./CategoryLanding/components/CategoryTab/CategoryTab";
import "./Product.scss";
import { productCategories } from "data/productCategories";
import ProductBox from "library/ProductBox/ProductBox";
import { ThemeVariants } from "context/ThemeContext";
import ProductThumbnail from "./ProductThumbnail";
import ChevronLeft from "library/Images/Navigations/ChevronArrows/ChevronLeft";
import ChevronRight from "library/Images/Navigations/ChevronArrows/ChevronRight";

const Product: React.FC = () => {
  return (
    <div className="product-container">
      <CategoryTab />
      {productCategories.map((cat) => {
        return (
          <React.Fragment key={cat.id}>
            <CategoryBanner img={cat.img} />
            <CategoryCaption name={cat.name} text={cat.text} />

            <ProductBox
              variants={ThemeVariants.dark}
              className="product-thumbnail-box"
            >
              <span className="chevron-left">
                <ChevronLeft className="arrow-left" />
              </span>
              <ProductThumbnail catId={cat.id} />
              <span className="chevron-right">
                <ChevronRight className="arrow-right" />
              </span>
            </ProductBox>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Product;
