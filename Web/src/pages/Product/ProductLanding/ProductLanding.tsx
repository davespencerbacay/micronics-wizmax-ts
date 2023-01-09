import classNames from "classnames";
import products from "data/products";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [currentProduct, setCurrentProduct] = useState(0);
  const [lastProduct, setLastProduct] = useState(0);
  const navigate = useNavigate();
  console.log(productId);

  useEffect(() => {
    const singleProduct = products.find((p: any) => p.productId === productId);
    const productData = products;
    const productIndex = productData.findIndex(
      (i: any) => i.productId === productId
    );
    const indexOfLastProduct = productData.length - 1;

    setLastProduct(indexOfLastProduct);
    setCurrentProduct(productIndex);
    setProduct(singleProduct);
  }, [product, productId, currentProduct, lastProduct]);
  const [imageIndex, setImageIndex] = useState<any>(0);
  let settings: any = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0rem",
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [imageIndex]);

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
  // next and previous functions
  const prevProductHandler = (productCategory: any, productId: any) => {
    navigate(`/products/${productCategory}/${productId}`);
  };
  const nextProductHandler = (productCategory: any, productId: any) => {
    navigate(`/products/${productCategory}/${productId}`);
  };
  return (
    <React.Fragment>
      <div className="product-landing-container">
        <div className="slider-container">
          <Slider {...settings}>
            {product.img &&
              product.img.map((image: any, index: any) => {
                console.log(
                  "index",
                  index,
                  "image index",
                  imageIndex,
                  "length",
                  product.img.length
                );
                return (
                  <div
                    className={
                      // index === imageIndex
                      //   ? "product-img activeProductImg"
                      //   : product.img.length === 3 && imageIndex + 1
                      //   ? "product-img activeProductImg"
                      //   : "product-img"
                      index === imageIndex
                        ? "product-img activeProductImg"
                        : imageIndex === index - 1
                        ? "product-img rightProductImg"
                        : imageIndex === index - 2
                        ? "product-img right2ProductImg"
                        : imageIndex === index + 1
                        ? "product-img leftProductImg"
                        : imageIndex === index + 2
                        ? "product-img left2ProductImg"
                        : imageIndex === 0
                        ? "product-img lastProductImg"
                        : imageIndex === product.img.length - 1
                        ? "product-img firstProductImg"
                        : "product-img"
                    }
                  >
                    <img src={image} alt={image} />
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
          {brochureBtnIsActive && (
            <ProductBrochure brochure={product.brochure} />
          )}
          {specsBtnIsActive && (
            <ProductSpecifications specifications={product.table} />
          )}
        </div>
        <div className="prev-next-product-container">
          <div className="prev-next-btn-container">
            <div
              className="prev-product-btn"
              onClick={() =>
                prevProductHandler(
                  products[currentProduct - 1].categoryId,
                  products[currentProduct - 1].productId
                )
              }
              style={{ display: currentProduct - 1 === -1 ? "none" : "flex" }}
            >
              <img
                src={products[currentProduct - 1]?.img[0]}
                alt={products[currentProduct - 1]?.img[0]}
              />
            </div>
            <div
              className="next-product-btn"
              onClick={() =>
                nextProductHandler(
                  products[currentProduct + 1].categoryId,
                  products[currentProduct + 1].productId
                )
              }
              style={{
                display: lastProduct === currentProduct ? "none" : "flex",
              }}
            >
              <img
                src={products[currentProduct + 1]?.img[0]}
                alt={products[currentProduct + 1]?.img[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductLanding;
