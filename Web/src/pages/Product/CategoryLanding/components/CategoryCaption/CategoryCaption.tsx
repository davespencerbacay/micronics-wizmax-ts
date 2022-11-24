import React from "react";
import "./CategoryCaption.scss";

interface ICategoryCaption {
  name: string | JSX.Element;
  text: string;
}

const CategoryCaption: React.FC<ICategoryCaption> = (props) => {
  return (
    <div className="caption-container">
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default CategoryCaption;
