import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./HeadsetSection.scss";

type HeadsetSectionType = {
  sectionRef?: React.RefObject<HTMLDivElement>;
};

const HeadsetSection: React.FC<HeadsetSectionType> = (props) => {
  const isMobileMode = useResponsive("mobile");
  return (
    <React.Fragment>
      {isMobileMode ? (
        <section className="headset-section" ref={props.sectionRef}>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="img-container">
                  <Img img={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET}></Img>
                </div>
              </Col>
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
            </Row>
          </Container>
        </section>
      ) : (
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
                  <Img
                    img={HOME_IMAGES.HOME_HEADSET_SECTION.HEADSET_LEFT}
                  ></Img>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </React.Fragment>
  );
};

export default HeadsetSection;
