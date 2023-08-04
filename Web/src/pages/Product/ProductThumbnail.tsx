import products from "data/products";
import useResponsive from "hooks/useResponsive";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Collapse, Container, Row } from "reactstrap";
import "./ProductThumbnail.scss";

type ProductThumbnailType = {
  catId: string;
  img: string;
  name: string | JSX.Element;
};

const ProductThumbnail: React.FC<ProductThumbnailType> = (props) => {
  const productFilterByCategoryId = products.filter(
    (product) => product.categoryId === props.catId
  );

  const [isOpen, setIsOpen] = useState<any>(false);
  const [openCountryAvailability, setOpenCountryAvailability] =
    useState<any>("");

  const toggleCountryAvailability = (id: any) => {
    let countryAvailabilityOpen = [isOpen];
    countryAvailabilityOpen[id] = !countryAvailabilityOpen[id];

    if (openCountryAvailability) {
      setIsOpen(!countryAvailabilityOpen);
      setOpenCountryAvailability("");
    } else {
      setIsOpen(countryAvailabilityOpen);
      setOpenCountryAvailability(id);
    }
  };
  const closeCountryAvailability = (countryStatus: any) => {
    let countryAvailabilityClose = [isOpen];
    countryAvailabilityClose[countryStatus] =
      !countryAvailabilityClose[countryStatus];
    setIsOpen(!countryAvailabilityClose);
    setOpenCountryAvailability("");
  };

  const [showToolTip, setShowToolTip] = useState<any>("");

  const showToolTipHandler = (id: any) => {
    setShowToolTip(id);
  };
  const hideToolTipHandler = () => {
    setShowToolTip("");
  };
  const isMobile = useResponsive("mobile");

  //COLOR VARIATION
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState<any>(0);
  useEffect(() => {}, [colorIndex, productFilterByCategoryId, thumbnailIndex]);
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
    <Container fluid>
      <Row>
        {productFilterByCategoryId.map((p: any, index: any) => {
          return (
            <Col xs={6} sm={6} md={4} lg={12} xl={12} xxl={12} key={index}>
              <div className="thumbnail-container" key={index}>
                <Link to={p.path}>
                  {p.colorAvailability ? (
                    <img
                      src={
                        index === thumbnailIndex
                          ? p.colorAvailability?.[colorIndex].images?.[0]
                          : p.colorAvailability?.[0].images?.[0]
                      }
                      alt={
                        index === thumbnailIndex
                          ? p.colorAvailability?.[colorIndex].images?.[0]
                          : p.colorAvailability?.[0].images?.[0]
                      }
                    />
                  ) : (
                    <img src={p.img[0]} alt={p.img[0]} />
                  )}
                </Link>
                <div className="thumbnail-details-container">
                  <p
                    className="thumbnail-product-label"
                    style={{ fontSize: p.name.length > 15 ? "1.909rem" : "" }}
                  >
                    {p.name}
                  </p>
                  {p.name.length <= 20 && (
                    <span className="space-filler"></span>
                  )}

                  {p.colorAvailability ? (
                    <div className="color-availability-container">
                      {p.colorAvailability.map(
                        (color: any, colorIndex: any) => {
                          return (
                            <div
                              onClick={() => colorHandler(colorIndex, index)}
                              className="color-availability"
                              style={{
                                background:
                                  color.color && color.secondaryColor
                                    ? `conic-gradient(${color.secondaryColor} 0deg, ${color.secondaryColor} 180deg, ${color.color} 180deg, ${color.color} 360deg)`
                                    : `conic-gradient(${color.color} 0deg, ${color.color} 360deg)`,
                              }}
                            ></div>
                          );
                        }
                      )}
                    </div>
                  ) : (
                    <div className="color-availability-container-null"></div>
                  )}
                  {p.countryAvailability ? (
                    <div className="country-availability-container">
                      {p.countryAvailability.map((country: any) => {
                        return <p>{country.abbreviation}</p>;
                      })}
                    </div>
                  ) : (
                    <div className="country-availability-container-null"></div>
                  )}
                  <Button
                    tabIndex={0}
                    className="thumbnail-country-availability-btn"
                    onClick={() => toggleCountryAvailability(index)}
                    // onBlur={() => closeCountryAvailability(index)}
                  >
                    {!p.countryAvailability && !p.colorAvailability ? (
                      <div className="country-color-unavailability"></div>
                    ) : (
                      ""
                    )}
                    Specifications
                    <span>
                      <GoTo
                        className={
                          openCountryAvailability === index
                            ? "arrowOpen"
                            : "arrowClose"
                        }
                      />
                    </span>
                    <Collapse
                      className="thumbnail-country-availability-collapse"
                      isOpen={isOpen[index]}
                    >
                      <Row>
                        {p.featuredSpecs.map((specs: any, index: any) => {
                          return (
                            <Col
                              className="thumbnail-country-availability-col"
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <p className="thumbnail-country-availability">
                                {specs.specs}
                              </p>
                            </Col>
                            // <Col
                            //   className="thumbnail-country-availability-col"
                            //   xs={4}
                            //   sm={3}
                            //   md={3}
                            //   lg={3}
                            // >
                            //   <p
                            //     className="thumbnail-country-availability"
                            //     onMouseOver={() => showToolTipHandler(index)}
                            //     onMouseLeave={hideToolTipHandler}
                            //   >
                            //     {showToolTip === index && (
                            //       <span>{country.country}</span>
                            //     )}
                            //     {country.abbreviation}
                            //   </p>
                            // </Col>
                          );
                        })}
                        <Link className="learn-more-link" to={p.path}>
                          Learn More...
                        </Link>
                      </Row>
                    </Collapse>
                  </Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductThumbnail;
