import React from "react";
import "./CategoryCaption.scss";

interface ICategoryCaption {
  name: string | JSX.Element;
  text: string;
  catRef: any;
}

const CategoryCaption: React.FC<ICategoryCaption> = (props) => {
  return (
    <div className="caption-container" ref={props.catRef}>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default CategoryCaption;
