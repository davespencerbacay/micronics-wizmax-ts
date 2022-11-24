import { CountryAvailability } from "constants/types";
import { ThemeVariants } from "context/ThemeContext";
import React from "react";
import "./ProductBox.scss";

interface IProductBox {
  variants: ThemeVariants;
  children: JSX.Element | React.ReactNode;
  className?: string;
}

const ProductBox: React.FC<IProductBox> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

ProductBox.defaultProps = {
  variants: ThemeVariants.dark,
};

export default ProductBox;
