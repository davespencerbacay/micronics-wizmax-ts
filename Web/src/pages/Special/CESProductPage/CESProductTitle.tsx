import React from "react";
import "./CESProductTitle.scss";

interface ICESProductTtitle {
  name: string | JSX.Element;
  text?: string;
  cesProductRef: any;
}

const CESProductTtitle: React.FC<ICESProductTtitle> = (props) => {
  return (
    <div className="cat-title" ref={props.cesProductRef}>
      <h1 className="cat-h1">{props.name}</h1>
    </div>
  );
};

export default CESProductTtitle;
