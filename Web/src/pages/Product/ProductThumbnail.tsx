import products from "data/products";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./ProductThumbnail.scss";

type ProductThumbnailType = {
  catId: string;
  img: string;
  name: string | JSX.Element;
};

const ProductThumbnail: React.FC<ProductThumbnailType> = (props) => {
  const productFilterByCategoryId = products.filter(
    (product) => product.categoryId === props.catId
  );
  console.log(productFilterByCategoryId);
  return (
    <Container fluid>
      <Row>
        {productFilterByCategoryId.map((p: any) => {
          return (
            <Col xs={4} sm={3} md={2} lg={2} key={p.id}>
              <Link to={p.path}>
                <div className="thumbnail-container">
                  <img src={p.img} />
                  <p>{p.countryAvailability}</p>
                  <p>{p.name}</p>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductThumbnail;
