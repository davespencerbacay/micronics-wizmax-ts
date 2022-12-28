import products from "data/products";
import useResponsive from "hooks/useResponsive";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React, { useState } from "react";
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
  console.log(productFilterByCategoryId);

  const [isOpen, setIsOpen] = useState<any>(false);
  const [openCountryAvailability, setOpenCountryAvailability] =
    useState<any>("");

  const toggleCountryAvailability = (id: any) => {
    let countryAvailabilityOpen = [isOpen];
    countryAvailabilityOpen[id] = !countryAvailabilityOpen[id];
    console.log(countryAvailabilityOpen);
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
  return (
    <Container fluid>
      <Row>
        {productFilterByCategoryId.map((p: any, index: any) => {
          console.log("index", index, "image", p.img[0]);
          return (
            <Col xs={6} sm={6} md={2} lg={2} key={index}>
              <div className="thumbnail-container">
                <Link to={p.path}>
                  <img src={p.img[0]} alt={p.img[0]} />
                </Link>
                <div className="thumbnail-details-container">
                  <p className="thumbnail-product-label">{p.name}</p>
                  <Button
                    className="thumbnail-country-availability-btn"
                    onClick={() => toggleCountryAvailability(index)}
                    onBlur={() => closeCountryAvailability(index)}
                  >
                    Country Availability
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
                        {p.countryAvailability.map(
                          (country: any, index: any) => {
                            return (
                              <Col
                                className="thumbnail-country-availability-col"
                                xs={4}
                                sm={3}
                                md={3}
                                lg={3}
                              >
                                <p
                                  className="thumbnail-country-availability"
                                  onMouseOver={() => showToolTipHandler(index)}
                                  onMouseLeave={hideToolTipHandler}
                                >
                                  {showToolTip === index && (
                                    <span>{country.country}</span>
                                  )}
                                  {country.abbreviation}
                                </p>
                              </Col>
                            );
                          }
                        )}
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
