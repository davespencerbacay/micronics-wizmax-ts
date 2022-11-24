import Img from "library/Images/Image";
import React from "react";
import "./CategoryBanner.scss";

interface ICategoryBanner {
  img: string;
}

const CategoryBanner: React.FC<ICategoryBanner> = (props) => {
  return (
    <div className="banner-container">
      <Img className="banner-img" img={props.img}></Img>
    </div>
  );
};

export default CategoryBanner;
