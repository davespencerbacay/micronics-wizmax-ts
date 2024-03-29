import { useIntl } from "i18n/intl";
import Banner from "library/Banner/Banner";
import Sidebar from "library/Sidebar/Sidebar";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { productCategories } from "data/productCategories";
import { ROUTE_PATH } from "constants/routes";
import "../Support.scss";
import countProducts from "helpers/countProducts";
import products from "data/products";
import ShadowedButton from "library/ShadowedButton/ShadowedButton";
import DownloadIcon from "library/Icons/DownloadIcon";
import { useParams } from "react-router-dom";
import NoInformationToDisplay from "library/NoInformationToDisplay/NoInformationToDisplay";
import ScrollToTopButton from "library/ScrollToTopButton/ScrollToTopButton";
import useResponsive from "hooks/useResponsive";

const Drivers: React.FC = () => {
  const isMobile = useResponsive("mobile");
  const { categoryId } = useParams();
  const filteredNavItems = productCategories.map((cat) => {
    return {
      link: `${ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES}/${cat.categoryId}`,
      text: cat.name as string,
      count: countProducts(cat.categoryId),
    };
  });

  const allProductItem = [
    {
      link: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES_BY_CATEGORY_ID.replace(
        ":categoryId",
        "all"
      ),
      text: "All Products",
      count: countProducts(),
    },
  ];
  const mappedNavItems = [...allProductItem, ...filteredNavItems];

  const displayedProducts = products.filter((p) => {
    if (categoryId === "all" || !categoryId) {
      return p;
    }
    return p.categoryId === categoryId;
  });

  const selectedCategory =
    productCategories.find((cp) => cp.categoryId === categoryId)?.name || "All";

  const downloadHandler = (file: string) => {
    window.open(file, "_blank")!.focus();
  };

  return (
    <div className="support-container">
      <Banner
        title="DOWNLOAD BROCHURES AND MANUALS"
        subTitle="Find brochures and manuals of your Wizmax Hardware"
        variant="light"
        align="center"
      />
      <Container className="support-content">
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Sidebar navItems={mappedNavItems} title="Categories" />
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div className="support-table">
              <div className="table-captions">
                <h2>{selectedCategory} Drivers</h2>
                <span>{displayedProducts.length} results</span>
              </div>

              <div className="table-content">
                <NoInformationToDisplay
                  showNoInfo={displayedProducts.length === 0}
                >
                  <React.Fragment>
                    {displayedProducts.map((p: any) => (
                      <div className="table-items">
                        <div className="title-btn-container">
                          <h5>{p.name}</h5>
                          <div
                            className={isMobile ? "table-btn-container" : ""}
                          >
                            <ShadowedButton
                              onClick={() => downloadHandler(p.brochure)}
                            >
                              Brochure <DownloadIcon />
                            </ShadowedButton>
                            <ShadowedButton
                              onClick={() => downloadHandler(p.manual)}
                            >
                              Manual <DownloadIcon />
                            </ShadowedButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                </NoInformationToDisplay>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton />
    </div>
  );
};

export default Drivers;
