import products from "data/products";
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
  return (
    <Container fluid>
      <Row>
        {productFilterByCategoryId.map((p: any, index: any) => {
          return (
            <Col xs={4} sm={3} md={2} lg={2} key={p.id}>
              <div className="thumbnail-container">
                <Link to={p.path}>
                  <img src={p.img} />
                </Link>
                <div className="thumbnail-details-container">
                  <p className="thumbnail-product-label">{p.name}</p>
                  <Button
                    className="thumbnail-country-availability-btn"
                    onClick={() => toggleCountryAvailability(p.id)}
                    onBlur={() => closeCountryAvailability(p.id)}
                  >
                    Country Availability
                    <span>
                      <GoTo
                        className={
                          openCountryAvailability === p.id
                            ? "arrowOpen"
                            : "arrowClose"
                        }
                      />
                    </span>
                    <Collapse
                      className="thumbnail-country-availability-collapse"
                      isOpen={isOpen[p.id]}
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
