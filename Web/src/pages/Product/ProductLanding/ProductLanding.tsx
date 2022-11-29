import products from "data/products";
import React from "react";
import Slider from "react-slick";

type ProductLandingType = {
  img?: string;
};

const ProductLanding: React.FC<ProductLandingType> = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {products.map((p: any) => {
        return (
          <div>
            <p>{p.name}</p>
            <img src={p.img} width={200} />
          </div>
        );
      })}
    </Slider>
  );
};

export default ProductLanding;
