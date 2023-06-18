import React, { useEffect, useRef, useState } from "react";
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
import ScrollToTop from "library/ScrollToTop/ScrollToTop";

const Product: React.FC = () => {
  const categoryRefLink = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefLinkTitle = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(0);
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile, categoryRefLink]);
  const refLinkHandler = (index: any) => {
    console.log("INDEXSXASXSA", index);
    if (categoryRefLink) {
      setSelectedCategory(index);
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
  useEffect(() => {
    setSelectedCategory;
  }, selectedCategory);
  return (
    <>
      <ScrollToTop />
      <CategoryTab
        refLinkHandler={isMobile ? refLinkTitleHandler : refLinkHandler}
      />

      {productCategories.map((cat, index) => {
        return (
          <React.Fragment key={cat.categoryId}>
            {index === selectedCategory && (
              <div className="product-container">
                <CategoryBanner
                  img={index === selectedCategory ? cat.img : ""}
                  categoryRef={(refLink: any) =>
                    (categoryRefLink.current[index] = refLink)
                  }
                  categoryId={index === selectedCategory ? cat.categoryId : ""}
                />
                <CategoryCaption
                  name={index === selectedCategory ? cat.name : ""}
                  text={index === selectedCategory ? cat.text : ""}
                  catRef={(refLink: any) =>
                    (categoryRefLinkTitle.current[index] = refLink)
                  }
                />

                <ProductBox
                  variants={ThemeVariants.dark}
                  className="product-thumbnail-box"
                >
                  <ProductThumbnail
                    catId={index === selectedCategory ? cat.categoryId : ""}
                    img={index === selectedCategory ? cat.img : ""}
                    name={index === selectedCategory ? cat.name : ""}
                  />
                </ProductBox>
              </div>
            )}
          </React.Fragment>
        );
      })}
      <ScrollToTopButton />
    </>
  );
};

export default Product;
