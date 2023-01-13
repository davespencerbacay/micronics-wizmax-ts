import { HOME_IMAGES } from "constants/home";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./HeadsetSection.scss";

type HeadsetSectionType = {
  sectionRef?: React.RefObject<HTMLDivElement>;
};

const HeadsetSection: React.FC<HeadsetSectionType> = (props) => {
  const isMobileMode = useResponsive("mobile");
  const navigate = useNavigate();
  const navigateToProductsHeadset = () => {
    navigate("/products");
    if (isMobileMode) {
      window.scrollTo(0, 5500);
    } else {
      window.scrollTo(0, 4800);
    }
  };
  const navigateToMondrian = () => {
    navigate("/products/CATEGORY_PCCASE/EH1-MONDRIAN");
  };
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
                  <div
                    className="learn-more"
                    onClick={navigateToProductsHeadset}
                  >
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
          <div className="headset-container">
            <div className="img-container">
              <Img img={HOME_IMAGES.HOME_OTHERS_SECTION.PC_CASE}></Img>
              <div
                className="product-link-container"
                onClick={navigateToMondrian}
              >
                <p>
                  EH1 Mondrian
                  <span>
                    <GoTo />
                  </span>
                </p>
              </div>
            </div>

            <div className="caption-btn-container">
              <h3>The Stylish</h3>
              <p>Veraciously Votive To Victory</p>
              <div className="learn-more" onClick={navigateToProductsHeadset}>
                <p>
                  Learn More
                  <span>
                    <GoTo />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default HeadsetSection;
