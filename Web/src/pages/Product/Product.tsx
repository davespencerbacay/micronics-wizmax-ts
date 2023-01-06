import React, { useEffect, useRef } from "react";
import CategoryBanner from "./CategoryLanding/components/CategoryBanner/CategoryBanner";
import CategoryCaption from "./CategoryLanding/components/CategoryCaption/CategoryCaption";
import CategoryTab from "./CategoryLanding/components/CategoryTab/CategoryTab";
import "./Product.scss";
import { productCategories } from "data/productCategories";
import ProductBox from "library/ProductBox/ProductBox";
import { ThemeVariants } from "context/ThemeContext";
import ProductThumbnail from "./ProductThumbnail";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";
import useResponsive from "hooks/useResponsive";

const Product: React.FC = () => {
  const categoryRefLink = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefLinkTitle = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile, categoryRefLink]);
  const refLinkHandler = (index: any) => {
    if (categoryRefLink) {
      console.log(categoryRefLink.current[index]);
      categoryRefLink.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  const refLinkTitleHandler = (index: any) => {
    if (categoryRefLinkTitle) {
      console.log(categoryRefLinkTitle.current[index]);
      categoryRefLinkTitle.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <div className="product-container">
      <CategoryTab
        refLinkHandler={isMobile ? refLinkTitleHandler : refLinkHandler}
      />
      {productCategories.map((cat, index) => {
        return (
          <React.Fragment key={cat.categoryId}>
            <CategoryBanner
              img={cat.img}
              categoryRef={(refLink: any) =>
                (categoryRefLink.current[index] = refLink)
              }
              categoryId={cat.categoryId}
            />
            <CategoryCaption
              name={cat.name}
              text={cat.text}
              catRef={(refLink: any) =>
                (categoryRefLinkTitle.current[index] = refLink)
              }
            />

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
      <ScrollToTopButton />
    </div>
  );
};

export default Product;
