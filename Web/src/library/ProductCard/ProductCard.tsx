import React from "react";
import "./ProductCard.scss";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-card-content">
        <img src={props.image} alt={props.image} />
        <div className="content-captions">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
