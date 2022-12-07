import React from "react";
import "./ProductBrochure.scss";

interface IProductBrochure {
  brochure: any;
}
const ProductBrochure: React.FC<IProductBrochure> = (props: any) => {
  return (
    <div className="brochure-container">
      <img className="" src={props.brochure} alt={props.brochure}></img>
    </div>
  );
};

export default ProductBrochure;
