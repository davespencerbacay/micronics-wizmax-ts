import { productCategories } from "data/productCategories";
import useResponsive from "hooks/useResponsive";
import CategoryTab from "pages/Product/CategoryLanding/components/CategoryTab/CategoryTab";
import products from "data/productsCes";
import React, { useEffect, useRef, useState } from "react";
import "./ces.scss";
import CESProductPage from "./CESProductPage/CESProductPage";
import CategoryCaption from "pages/Product/CategoryLanding/components/CategoryCaption/CategoryCaption";
import { Col, Container, Row } from "reactstrap";
import Img from "library/Images/Image";
import { Link } from "react-router-dom";
import CESProductTtitle from "./CESProductPage/CESProductTitle";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";

const ces: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const videoLoading = useRef<any>();
  const isMobile = useResponsive("mobile");
  const categoryRefLink = useRef<(HTMLDivElement | null)[]>([]);
  const refLinkHandler = (index: any) => {
    if (categoryRefLink) {
      categoryRefLink.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // useEffect(() => {
  //   videoLoading.current.playbackRate = 3;
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, [videoLoading]);

  // if (isLoading && !isMobile) {
  //   return (
  //     <video
  //       className="loading-video"
  //       autoPlay={true as boolean}
  //       muted
  //       ref={videoLoading}
  //     >
  //       <source
  //         src="https://res.cloudinary.com/ddwocxwmc/video/upload/v1671081041/Mouse_silhouette_evvayz.mp4"
  //         type="video/mp4"
  //       ></source>
  //     </video>
  //   );
  // } else if (isLoading && isMobile) {
  //   return null;
  // }

  return (
    <div className="ces-container">
      <CategoryTab refLinkHandler={refLinkHandler} />
      <Container className="cat-container" fluid>
        {productCategories.map((cat: any, index: any) => {
          const productFilterByCategoryId = products.filter(
            (product) => product.categoryId === cat.categoryId
          );
          return (
            <React.Fragment key={cat.categoryId}>
              <CESProductTtitle
                name={cat.name}
                cesProductRef={(refLink: any) => (categoryRefLink.current[index] = refLink)}
              />
              <CESProductPage productFilterByCategoryId={productFilterByCategoryId} />
            </React.Fragment>
          );
        })}
      </Container>

      <ScrollToTopButton />
    </div>
  );
};

export default ces;
