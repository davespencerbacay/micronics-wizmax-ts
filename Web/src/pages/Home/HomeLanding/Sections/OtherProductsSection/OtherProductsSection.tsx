import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./OtherProductsSection.scss";
import { otherProductsImages } from "data/Home/images";
import Img from "library/Images/Image";
import useResponsive from "hooks/useResponsive";
import { useNavigate } from "react-router-dom";

const OtherProductsSection: React.FC = () => {
  const isMobileMode = useResponsive("mobile");
  const navigate = useNavigate();
  const navigateToProductsOthers = () => {
    navigate("/products");
    window.scrollTo(0, 6900);
  };
  const navigateToSpecificLink = (index: any) => {
    if (index) {
      navigate("/products");
    }
  };
  return (
    <React.Fragment>
      {isMobileMode ? (
        <section className="other-products-section">
          <div className="other-products-caption-container">
            <h3>More Products</h3>
            <div className="learn-more" onClick={navigateToProductsOthers}>
              <p>
                View All
                <span>
                  <GoTo></GoTo>
                </span>
              </p>
            </div>
          </div>
          <Container fluid>
            <Row className="img-row">
              {otherProductsImages.map((image) => {
                return (
                  <Col xs={6} sm={6} md={4} lg={4} className="img-col">
                    <Img img={image.img}></Img>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      ) : (
        <section className="other-products-section">
          <div className="other-products-caption-container">
            <h3>More Products</h3>
            <div className="learn-more" onClick={navigateToProductsOthers}>
              <p>
                View All
                <GoTo></GoTo>
              </p>
            </div>
          </div>
          <Container fluid>
            <Row className="img-row">
              {otherProductsImages.map((image, index) => {
                return (
                  <Col
                    xs={3}
                    sm={3}
                    md={4}
                    lg={4}
                    className="img-col"
                    onClick={() => navigateToSpecificLink(index)}
                  >
                    <Img img={image.img}></Img>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      )}
    </React.Fragment>
  );
};

export default OtherProductsSection;
