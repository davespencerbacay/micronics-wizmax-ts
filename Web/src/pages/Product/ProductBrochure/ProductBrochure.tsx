import React from "react";
import "./ProductBrochure.scss";

interface IProductBrochure {
  brochure: any;
}
const ProductBrochure: React.FC<IProductBrochure> = (props: any) => {
  return (
    <div className="brochure-container">
      {props.brochure ? (
        <img className="" src={props.brochure} alt={props.brochure}></img>
      ) : (
        <h1 className="not-available">Brochure Not Available</h1>
      )}
    </div>
  );
};

export default ProductBrochure;
