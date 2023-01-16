import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./MainSection.scss";

type MainSectionType = {
  videoSectionHandler?: () => void;
  headsetSectionHandler?: () => void;
};

const MainSection: React.FC<MainSectionType> = (props) => {
  const isMobileMode = useResponsive("mobile");
  const navigate = useNavigate();

  const navigateToMH2 = () => {
    navigate("/products/HEADSET/MH2");
  };
  return (
    <section
      className="main-container"
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
            <Col className="col1" xs={5} sm={5} md={6} lg={6}>
              <div className="main-caption">
                <p className="text1">Pique Your</p>
                <p className="text2">Gaming Experience.</p>
                <div className="text3-container">
                  <button onClick={navigateToMH2}>
                    Learn More About MH2
                    <span>
                      <GoTo />
                    </span>
                  </button>
                </div>
              </div>
            </Col>
            <Col xs={5} sm={5} md={6} lg={6}>
              <div className="main-image-container">
                <Img
                  img={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET_LEFT}
                  className="main-mh2"
                />
              </div>
            </Col>
            <Col xs={2} sm={2} md={12} lg={12}>
              <div
                className="main-text-button"
                onClick={props.videoSectionHandler}
              >
                <p>
                  Explore More
                  <span className="span1">&gt;</span>
                  <span className="span2">&gt;</span>
                  <span className="span3">&gt;</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};

export default MainSection;
