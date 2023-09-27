import React from "react";
import "./WMGButton.scss";

interface WMGButtonProps {
  children: React.ReactNode;
  color?: string;
  disabled?: React.ReactNode;
  variant: "default" | "danger";
  type?: string;
  onClick?: () => void;
}

const WMGButton: React.FC<WMGButtonProps> = (props) => {
  if (props.variant === "danger") {
    return (
      <button className="button-container danger" onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
  return (
    <button
      style={{ background: `${props.color}` }}
      className="button-container default"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

WMGButton.defaultProps = {
  color: "#1e6091",
};

export default WMGButton;
