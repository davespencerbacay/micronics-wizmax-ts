import products from "data/products";
import React from "react";
import "./ProductThumbnail.scss";

type ProductThumbnailType = {
  catId: string;
  img?: string;
  name?: string;
};

const ProductThumbnail: React.FC<ProductThumbnailType> = (props) => {
  const productFilterByCategoryId = products.filter(
    (product) => product.categoryId === props.catId
  );
  console.log(productFilterByCategoryId);
  return (
    <React.Fragment>
      {productFilterByCategoryId.map((p) => {
        return (
          <div className="thumbnail-container">
            <img src={p.img} width={300} />
            <p>{p.name}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProductThumbnail;
