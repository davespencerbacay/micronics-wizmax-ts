import { productCategories } from "data/productCategories";
import products from "data/productsCes";
import useResponsive from "hooks/useResponsive";
import Img from "library/Images/Image";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./CESProductPage.scss";

interface ICESProductPage {
  productFilterByCategoryId: any;
}

const CESProductPage: React.FC<ICESProductPage> = (props) => {
  const isMobile = useResponsive("mobile");
  useEffect(() => {}, [isMobile]);
  return (
    <Row className="cat-row">
      {props.productFilterByCategoryId.map((product: any) => {
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
  );
};

export default CESProductPage;
