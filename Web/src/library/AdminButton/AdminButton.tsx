import React from "react";
import "./AdminButton.scss";

interface AdminButtonProps {
  children: React.ReactNode;
  color?: string;
  disabled?: React.ReactNode;
  variant: "default" | "danger";
  type?: string;
  onClick?: () => void;
}

const AdminButton: React.FC<AdminButtonProps> = (props) => {
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

AdminButton.defaultProps = {
  color: "#0077b6",
};

export default AdminButton;
