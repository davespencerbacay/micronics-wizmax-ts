import { productCategories } from "data/productCategories";
import products from "data/products";
import Img from "library/Images/Image";
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./CESProductPage.scss";

const CESProductPage: React.FC = () => {
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
                  <Col className="cat-col" xs={4} sm={4} md={3} lg={3}>
                    <Link to={product.path}>
                      <Img className="cat-img" img={product.img[0]}></Img>
                    </Link>

                    <div className="new-release-text-container">
                      <p className="new-release-text">
                        {product.isNewRelease ? product.isNewRelease : <br />}
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
