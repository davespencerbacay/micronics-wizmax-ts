import classNames from "classnames";
import React from "react";
import "./ShadowedButton.scss";

interface IShadowedButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ShadowedButton: React.FC<IShadowedButton> = (props) => {
  const buttonClassnames = classNames("shadowed-button", props.className);
  return (
    <button {...props} className={buttonClassnames}>
      {props.children}
    </button>
  );
};

export default ShadowedButton;
