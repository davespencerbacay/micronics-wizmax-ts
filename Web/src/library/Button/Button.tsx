import React from "react";
import { Button as ReactStrapButton, ButtonProps } from "reactstrap";

interface IButton extends ButtonProps {
  text?: string;
  confirmText?: string;
  cancelText?: string;
}
const Button: React.FC<IButton> = (props) => {
  return <ReactStrapButton {...props}></ReactStrapButton>;
};

Button.defaultProps = {
  title: "There are unsaved changes. Are you sure you want to leave this page?",
  confirmText: "Yes, Didscard Changes",
  cancelText: "No, Stay on Page",
};
export default Button;
