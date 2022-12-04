import { HOME_IMAGES } from "constants/home";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./HeadsetSection.scss";

const MiddleSection: React.FC = () => {
  return (
    <React.Fragment>
      <section className="headset-section">
        <Container fluid="xs">
          <Row>
            <Col>
              <div className="caption-btn-container">
                <h3>Audibly Dominate</h3>
                <p>Veraciously Votive To Victory</p>
                <div className="learn-more">
                  <p>
                    Learn More
                    <span>
                      <GoTo />
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="img-container">
                <Img img={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET_LEFT}></Img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
    </React.Fragment>
  );
};

export default MiddleSection;
