import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container } from "reactstrap";
import "./MouseSection.scss";

const MouseSection: React.FC = () => {
  const isMobileMode = useResponsive("mobile");
  useEffect(() => {}, [isMobileMode]);
  const navigate = useNavigate();
  const navigateToProductsMouse = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      {isMobileMode ? (
        <section className="mouse-section">
          <Container>
            <Col>
              <div className="mouse-caption-container">
                <h3>Survival Of The Fastest</h3>
                <p>Accurately Precise, Incredibly Fast</p>
                <div className="learn-more" onClick={navigateToProductsMouse}>
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
              <div className="mouse-img-container">
                <Img img={HOME_IMAGES.HOME_MOUSE_SECTION.MOUSE}></Img>
              </div>
            </Col>
          </Container>
        </section>
      ) : (
        <section className="mouse-section">
          <div className="mouse-caption-container">
            <h3>Survival Of The Fastest</h3>
            <p>Accurately Precise, Incredibly Fast</p>
            <div className="learn-more" onClick={navigateToProductsMouse}>
              <p>
                Learn More
                <span>
                  <GoTo />
                </span>
              </p>
            </div>
          </div>
          <div className="mouse-img-container">
            <Img img={HOME_IMAGES.HOME_MOUSE_SECTION.MOUSE}></Img>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default MouseSection;
