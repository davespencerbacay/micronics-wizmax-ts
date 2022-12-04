import Img from "library/Images/Image";
import React, { RefObject } from "react";
import "./CategoryBanner.scss";

interface ICategoryBanner {
  img: string;
  categoryRef: any;
  categoryId: string | number;
}

const CategoryBanner: React.FC<ICategoryBanner> = (props) => {
  return (
    <div className="banner-container" ref={props.categoryRef}>
      <Img className="banner-img" img={props.img}></Img>
    </div>
  );
};

export default CategoryBanner;
