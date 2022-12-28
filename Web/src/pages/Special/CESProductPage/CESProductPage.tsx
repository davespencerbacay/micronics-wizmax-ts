import { productCategories } from "data/productCategories";
import products from "data/products";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./CESProductPage.scss";

const CESProductPage: React.FC = () => {
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile]);
  return (
    <div className="ces-product-page-container">
      {productCategories.map((cat: any) => {
        const productFilterByCategoryId = products.filter(
          (product) => product.categoryId === cat.categoryId
        );
        return (
          <Container className="cat-container" fluid>
            <div className="cat-title">
              <h1>{cat.name}</h1>
            </div>

            <Row className="cat-row">
              {productFilterByCategoryId.map((product: any) => {
                return (
                  <Col className="cat-col" xs={5} sm={5} md={3} lg={3}>
                    <Link to={product.path}>
                      <Img
                        className={
                          isMobile && product.isNewRelease
                            ? "cat-img-mobile"
                            : "cat-img"
                        }
                        img={product.img[0]}
                      ></Img>
                    </Link>

                    <div className="new-release-text-container">
                      <p className="new-release-text">
                        {product.isNewRelease ? (
                          product.isNewRelease
                        ) : isMobile ? null : (
                          <br />
                        )}
                      </p>
                    </div>
                    <p className="cat-name">{product.name}</p>
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default CESProductPage;
