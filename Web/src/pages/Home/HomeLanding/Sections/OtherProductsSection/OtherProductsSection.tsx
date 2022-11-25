import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./OtherProductsSection.scss";
import { otherProductsImages } from "data/Home/images";
import Img from "library/Images/Image";

const OtherProductsSection: React.FC = () => {
  return (
    <section className="other-products-section">
      <div className="other-products-caption-container">
        <h3>More Products</h3>
        <div className="learn-more">
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
              <Col xs={3} sm={3} md={4} lg={4} className="img-col">
                <Img img={image.img}></Img>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default OtherProductsSection;
