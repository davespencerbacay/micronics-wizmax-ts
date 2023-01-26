import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import ChevronRight from "library/Images/Navigations/ChevronArrows/ChevronRight";
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
  const goToW101P = () => {
    navigate("/products/CATEGORY_KB/W101P");
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
        <div className="main-desktop-container">
          <div className="grid-details">
            <div className="text-container">
              <p>Fresh.</p>
              <p>Fun.</p>
              <p>Fab.</p>
            </div>

            <div className="button-container">
              <button onClick={goToW101P}>
                Learn More About W101P{" "}
                <span>
                  <GoTo />
                </span>
              </button>
            </div>
          </div>
          <div className="grid-images"></div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
