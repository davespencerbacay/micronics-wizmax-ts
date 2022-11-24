import React from "react";
import CategoryBanner from "./CategoryLanding/components/CategoryBanner/CategoryBanner";
import CategoryCaption from "./CategoryLanding/components/CategoryCaption/CategoryCaption";
import CategoryTab from "./CategoryLanding/components/CategoryTab/CategoryTab";
import "./Product.scss";
import { productCategories } from "data/productCategories";
import ProductBox from "library/ProductBox/ProductBox";
import { ThemeVariants } from "context/ThemeContext";
import ProductThumbnail from "./ProductThumbnail";

const Product: React.FC = () => {
  return (
    <div className="product-container">
      <CategoryTab />
      {productCategories.map((cat) => {
        return (
          <React.Fragment key={cat.categoryId}>
            <CategoryBanner img={cat.img} />
            <CategoryCaption name={cat.name} text={cat.text} />

            <ProductBox
              variants={ThemeVariants.dark}
              className="product-thumbnail-box"
            >
              <ProductThumbnail
                catId={cat.categoryId}
                img={cat.img}
                name={cat.name}
              />
            </ProductBox>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Product;
