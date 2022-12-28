import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./MainSection.scss";

type MainSectionType = {
  videoSectionHandler?: () => void;
  headsetSectionHandler?: () => void;
};

const MainSection: React.FC<MainSectionType> = (props) => {
  const isMobileMode = useResponsive("mobile");
  return (
    <section
      className="headset-container"
      style={{
        backgroundImage: isMobileMode
          ? `url("${HOME_IMAGES.HOME_MOBILE_BG}")`
          : `url("${HOME_IMAGES.HOME_LANDING}")`,
      }}
    >
      {isMobileMode ? (
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="mobile-logo-container">
                <Img
                  img={HOME_IMAGES.HOME_MOBILE_LOGO}
                  className="mobile-logo"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="text-button" onClick={props.headsetSectionHandler}>
                Explore More
                <span className="span1">&gt;</span>
                <span className="span2">&gt;</span>
                <span className="span3">&gt;</span>
              </p>
            </Col>
          </Row>
        </Container>
      ) : (
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
      )}
    </section>
  );
};

export default MainSection;
