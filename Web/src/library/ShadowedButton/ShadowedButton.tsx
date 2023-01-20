import classNames from "classnames";
import React from "react";
import "./ShadowedButton.scss";

interface IShadowedButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disable?: boolean;
}
const ShadowedButton: React.FC<IShadowedButton> = (props) => {
  const buttonClassnames = classNames("shadowed-button", props.className);
  return (
    <button {...props} className={buttonClassnames} disabled={props.disable}>
      {props.children}
    </button>
  );
};

export default ShadowedButton;
