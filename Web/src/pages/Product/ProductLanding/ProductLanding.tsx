import classNames from "classnames";
import products from "data/products";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductBrochure from "../ProductBrochure/ProductBrochure";
import ProductSpecifications from "../ProductSpecifications/ProductSpecifications";
import "./ProductLanding.scss";

type ProductLandingType = {
  img?: string;
};

const ProductLanding: React.FC<ProductLandingType> = (props) => {
  const params = useParams();
  const productId = params.productId;
  const [product, setProduct] = useState<any>({});
  console.log(productId);

  useEffect(() => {
    const singleProduct = products.find((p: any) => p.productId === productId);

    setProduct(singleProduct);
  }, [product, productId]);
  const [imageIndex, setImageIndex] = useState<any>(0);
  let settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };

  useEffect(() => {}, [imageIndex]);

  //brochure and specs button
  const [brochureBtnIsActive, setBrochureBtnIsActive] = useState(true);
  const [specsBtnIsActive, setSpecsBtnIsActive] = useState(false);
  const brochureBtn = classNames({
    "brochure-btn active": brochureBtnIsActive,
    "brochure-btn": !brochureBtnIsActive,
  });
  const brochureBtnHandler = () => {
    setBrochureBtnIsActive(true);
    setSpecsBtnIsActive(false);
  };
  const specsBtn = classNames({
    "specs-btn active": specsBtnIsActive,
    "specs-btn": !specsBtnIsActive,
  });
  const specsBtnHandler = () => {
    setSpecsBtnIsActive(true);
    setBrochureBtnIsActive(false);
  };
  return (
    <React.Fragment>
      <div className="slider-container">
        <Slider {...settings}>
          {product.img &&
            product.img.map((image: any, index: any) => {
              return (
                <div
                  className={
                    index === imageIndex
                      ? "product-img activeProductImg"
                      : index === imageIndex + 1
                      ? "product-img inactiveProductImg"
                      : "product-img"
                  }
                >
                  <img src={image} />
                </div>
              );
            })}
        </Slider>
        <h3>{product.name}</h3>
      </div>
      <div className="brochure-specs-btn">
        <button className={brochureBtn} onClick={brochureBtnHandler}>
          Brochure
        </button>
        <button className={specsBtn} onClick={specsBtnHandler}>
          Specifications
        </button>
      </div>
      <div className="brochure-specs-container container">
        {brochureBtnIsActive && <ProductBrochure brochure={product.brochure} />}
        {specsBtnIsActive && (
          <ProductSpecifications specifications={product.table} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductLanding;
