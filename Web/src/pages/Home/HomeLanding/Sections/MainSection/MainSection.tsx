import { HOME_IMAGES } from "constants/home";
import Img from "library/Images/Image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./MainSection.scss";

type HeadsetSectionType = {
  videoSectionHandler: () => void;
};

const HeadsetSection: React.FC<HeadsetSectionType> = (props) => {
  return (
    <section
      className="headset-container"
      style={{ backgroundImage: `url("${HOME_IMAGES.HOME_LANDING}")` }}
    >
      <Container fluid>
        <Row>
          <Col className="col1" xs={5} sm={5} md={4} lg={5}>
            <div className="headset-caption">
              <p className="text1">Pique Your</p>
              <p className="text2">Gaming Experience.</p>
            </div>
          </Col>
          <Col xs={2} sm={2} md={4} lg={2}>
            <p
              className="headset-text-button"
              onClick={props.videoSectionHandler}
            >
              Explore More
              <span className="span1">&gt;</span>
              <span className="span2">&gt;</span>
              <span className="span3">&gt;</span>
            </p>
          </Col>
          <Col xs={5} sm={5} md={4} lg={5}>
            <div className="headset-image-container">
              <Img
                img={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET}
                className="headset-mh2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeadsetSection;
