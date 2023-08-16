import classNames from "classnames";
import products from "data/products";
import useResponsive from "hooks/useResponsive";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import ScrollToTop from "library/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductBrochure from "../ProductBrochure/ProductBrochure";
import ProductSpecifications from "../ProductSpecifications/ProductSpecifications";
import "./ProductLanding.scss";
import ColorBadge from "./ColorBadge";

type ProductLandingType = {
  img?: string;
};

const ProductLanding: React.FC<ProductLandingType> = (props) => {
  const params = useParams();
  const productId = params.productId;
  const [product, setProduct] = useState<any>({});
  const [currentProduct, setCurrentProduct] = useState(0);
  const [lastProduct, setLastProduct] = useState(0);
  const [previousButtonHover, setPreviousButtonHover] = useState(false);
  const [previousButtonClick, setPreviousButtonClick] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);
  const [nextButtonClick, setNextButtonClick] = useState(false);
  const [slideToShow, setSlideToShow] = useState(0);
  const navigate = useNavigate();
  const isMobile = useResponsive("mobile");

  useEffect(() => {
    const singleProduct = products.find((p: any) => p.productId === productId);
    const productData = products;
    const productIndex = productData.findIndex(
      (i: any) => i.productId === productId
    );
    const indexOfLastProduct = productData.length - 1;
    const slides = productData[productIndex].img.length;

    setLastProduct(indexOfLastProduct);
    setCurrentProduct(productIndex);
    setProduct(singleProduct);
    setSlideToShow(slides);
  }, [
    product,
    productId,
    currentProduct,
    lastProduct,
    previousButtonHover,
    nextButtonHover,
  ]);
  const [imageIndex, setImageIndex] = useState<any>(0);
  useEffect(() => {}, [slideToShow]);
  let settings: any = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: slideToShow < 4 ? 1 : slideToShow === 1 ? 1 : 3,
    centerMode: true,
    centerPadding: "0rem",
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [imageIndex, isMobile]);

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
  const prevButtonHandler = () => {
    setPreviousButtonHover(true);
  };
  const prevButtonLeaveHandler = () => {
    setPreviousButtonHover(false);
  };
  const prevButtonClickHandler = () => {
    setPreviousButtonClick(true);
  };
  const closePrevButton = () => {
    setPreviousButtonClick(false);
  };
  const nextButtonHandler = () => {
    setNextButtonHover(true);
  };
  const nextButtonLeaveHandler = () => {
    setNextButtonHover(false);
  };
  const nextButtonOnClickHandler = () => {
    setNextButtonClick(true);
  };
  const closeNextButton = () => {
    setNextButtonClick(false);
  };
  console.log(nextButtonClick);

  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState<any>(0);

  const colorHandler = (colorIndex: any, index: any) => {
    console.log(index, "main", colorIndex, "color index");
    setThumbnailIndex(index);
    if (index === thumbnailIndex) {
      setColorIndex(colorIndex);
    } else {
      setColorIndex(0);
    }
  };
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="product-landing-container">
        <div className="slider-container">
          <Slider {...settings}>
            {product.img &&
              product.img.map((image: any, index: any) => {
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
                    <img
                      className={
                        product.img.length < 4 ? "activeProductImg1" : ""
                      }
                      src={image}
                      alt={image}
                    />
                  </div>
                );
              })}
          </Slider>
          <h3>{product.name}</h3>
          <ColorBadge colors={product.colorAvailability} />
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
          <div className="prev-product-title-container">
            {currentProduct - 1 !== -1 && (
              <div>
                {isMobile ? (
                  <p
                    className={
                      previousButtonClick
                        ? "prev-product-title-hide"
                        : "prev-product-title"
                    }
                    onClick={() =>
                      prevProductHandler(
                        products[currentProduct - 1].categoryId,
                        products[currentProduct - 1].productId
                      )
                    }
                  >
                    <img
                      src={products[currentProduct - 1]?.img[0]}
                      alt={products[currentProduct - 1]?.img[0]}
                    />
                    {<p>{products[currentProduct - 1]?.name}</p>}
                  </p>
                ) : (
                  <p
                    className={
                      previousButtonHover
                        ? "prev-product-title-hide"
                        : "prev-product-title"
                    }
                    onMouseEnter={prevButtonHandler}
                  >
                    <img
                      src={products[currentProduct - 1]?.img[0]}
                      alt={products[currentProduct - 1]?.img[0]}
                    />
                    {<p>{products[currentProduct - 1]?.name}</p>}
                  </p>
                )}
              </div>
            )}
          </div>
          {/* NEXT PRODUCT TITLE */}
          <div className="next-product-title-container">
            {currentProduct + 1 !== products.length && (
              <React.Fragment>
                {isMobile ? (
                  <p
                    className={
                      nextButtonClick
                        ? "next-product-title-hide"
                        : "next-product-title"
                    }
                    onClick={() =>
                      nextProductHandler(
                        products[currentProduct + 1].categoryId,
                        products[currentProduct + 1].productId
                      )
                    }
                  >
                    <img
                      src={products[currentProduct + 1]?.img[0]}
                      alt={products[currentProduct + 1]?.img[0]}
                    />
                    {<p>{products[currentProduct + 1]?.name}</p>}
                  </p>
                ) : (
                  <p
                    className={
                      nextButtonHover
                        ? "next-product-title-hide"
                        : "next-product-title"
                    }
                    onMouseEnter={nextButtonHandler}
                  >
                    <img
                      src={products[currentProduct + 1]?.img[0]}
                      alt={products[currentProduct + 1]?.img[0]}
                    />
                    {<p>{products[currentProduct + 1]?.name}</p>}
                  </p>
                )}
              </React.Fragment>
            )}
          </div>

          <div className="prev-next-btn-container">
            {/* PREVIOUS BUTTON */}
            <div
              className={
                previousButtonHover || previousButtonClick
                  ? "prev-product-btn"
                  : "prev-product-btn-hide"
              }
              onMouseLeave={prevButtonLeaveHandler}
              style={{
                display: currentProduct - 1 === -1 ? "none" : "flex",
              }}
              onClick={() =>
                prevProductHandler(
                  products[currentProduct - 1].categoryId,
                  products[currentProduct - 1].productId
                )
              }
            >
              <p>PREVIOUS</p>
              {isMobile && (
                <div className="left-arrow-close" onClick={closePrevButton}>
                  <GoTo />
                </div>
              )}
            </div>
            {/* NEXT BUTTON */}
            <div
              className={
                nextButtonHover || nextButtonClick
                  ? "next-product-btn"
                  : "next-product-btn-hide"
              }
              onMouseLeave={nextButtonLeaveHandler}
              style={{
                display: lastProduct === currentProduct ? "none" : "flex",
              }}
              onClick={() =>
                nextProductHandler(
                  products[currentProduct + 1].categoryId,
                  products[currentProduct + 1].productId
                )
              }
            >
              {isMobile && (
                <div className="right-arrow-close" onClick={closeNextButton}>
                  <GoTo />
                </div>
              )}
              <p>NEXT</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </React.Fragment>
  );
};

export default ProductLanding;
