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
import { useLocation, useParams } from "react-router-dom";
import url_params from "helpers/url_params";

const Product: React.FC = () => {
  const categoryRefLink = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefLinkTitle = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(0);
  const params = useParams();
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile, categoryRefLink, params]);
  const refLinkHandler = (index: any) => {
    if (categoryRefLink) {
      setSelectedCategory(index);
      categoryRefLink.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  const refLinkTitleHandler = (index: any) => {
    if (categoryRefLinkTitle) {
      categoryRefLinkTitle.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const search = useLocation().search;
  const categoryId = new URLSearchParams(search).get("categoryId");

  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(parseInt(categoryId ?? ""));
    } else {
      setSelectedCategory(0);
    }
  }, [categoryId]);

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
