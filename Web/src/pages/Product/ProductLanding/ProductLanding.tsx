import products from "data/products";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ProductLanding.scss";

type ProductLandingType = {
  img?: string;
};

const ProductLanding: React.FC<ProductLandingType> = (props) => {
  let settings: any = {
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };
  const [imageIndex, setImageIndex] = useState<any>(0);
  useEffect(() => {}, [imageIndex]);
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((p: any, index: any) => {
          return (
            <div
              className={
                index === imageIndex
                  ? "product-img activeProductImg"
                  : index + 1 === imageIndex
                  ? "product-img inactiveProductImg"
                  : "product-img"
              }
            >
              <img src={p.img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductLanding;
