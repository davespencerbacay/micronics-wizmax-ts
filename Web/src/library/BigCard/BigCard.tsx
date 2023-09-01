import React from "react";
import "./BigCard.scss";

interface BigCardProps {
  title?: string;
  subtitle?: string;
  children?: JSX.Element | React.ReactNode;
  icon?: JSX.Element | string;
}

const BigCard: React.FC<BigCardProps> = (props) => {
  return (
    <div className="bigCard-container">
      <span className="bigCard-header">
        {props.icon} <h2>{props.title}</h2>
      </span>
      <div className="subtitle">{props.subtitle}</div>
      <div className="bigCard-content">{props.children}</div>
    </div>
  );
};

export default BigCard;
