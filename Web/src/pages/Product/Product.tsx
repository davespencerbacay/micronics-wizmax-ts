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
import { getRouteId } from "helpers/routeId";

const Product: React.FC = () => {
  const categoryRefLink = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefLinkTitle = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [selectedNavCategory, setSelectedNavCategory] = useState<any>();
  console.log("TUMANGGAP NG PAGPASA", selectedNavCategory)
  const isMobile = useResponsive("mobile");
  const refLinkHandler = (index: any) => {
    if (categoryRefLink) {
      setSelectedCategory(index);
      localStorage.setItem("routeId", JSON.stringify(0));
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
    setSelectedNavCategory;
    const updateDataFromLocalStorage = () => {
      const storedData = localStorage.getItem("routeId");
      if (storedData) {
        setSelectedNavCategory(JSON.parse(storedData));
      }
    };
    updateDataFromLocalStorage();
    window.addEventListener('storage', updateDataFromLocalStorage);
    return () => {
      window.removeEventListener('storage', updateDataFromLocalStorage);
    };
  }, [selectedCategory, isMobile, categoryRefLink, selectedNavCategory]);
  return (
    <>
      <ScrollToTop />
      <CategoryTab
        refLinkHandler={isMobile ? refLinkTitleHandler : refLinkHandler}
      />

      {productCategories.map((cat, index) => {
        if(index === selectedNavCategory && selectedNavCategory !== 0) {
          return (
            <React.Fragment key={cat.categoryId}>
              
  
    <div className="product-container">
      <CategoryBanner
        img={index === selectedNavCategory ? cat.img : ""}
        categoryRef={(refLink: any) =>
          (categoryRefLink.current[index] = refLink)
        }
        categoryId={
          index === selectedNavCategory ? cat.categoryId : ""
        }
      />
      <CategoryCaption
        name={index === selectedNavCategory ? cat.name : ""}
        text={index === selectedNavCategory ? cat.text : ""}
        catRef={(refLink: any) =>
          (categoryRefLinkTitle.current[index] = refLink)
        }
      />
  
      <ProductBox
        variants={ThemeVariants.dark}
        className="product-thumbnail-box"
      >
        <ProductThumbnail
          catId={index === selectedNavCategory ? cat.categoryId : ""}
          img={index === selectedNavCategory ? cat.img : ""}
          name={index === selectedNavCategory ? cat.name : ""}
        />
      </ProductBox>
    </div>
  
              
              
            </React.Fragment>
          );
        }
        if(index === selectedCategory) {
          return (
            <React.Fragment key={cat.categoryId}>
              
  
    <div className="product-container">
      <CategoryBanner
        img={index === selectedCategory ? cat.img : ""}
        categoryRef={(refLink: any) =>
          (categoryRefLink.current[index] = refLink)
        }
        categoryId={
          index === selectedCategory ? cat.categoryId : ""
        }
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
  
              
              
            </React.Fragment>
          ); 
        }
        
      })}
      <ScrollToTopButton />
    </>
  );
};

export default Product;
