import classNames from "classnames";
import React from "react";
import "./LabeledValue.scss";

interface ILabeledValue {
  title: string;
  subTitle?: string;
  isVisible?: boolean;
  variant?: "light" | "bold";
  buttonProps?: {
    show?: boolean;
    text: string;
    onClick: () => void;
  };
}

const LabeledValue: React.FC<ILabeledValue> = (props) => {
  const labelValueClassnames = classNames("label-value", {
    "label-value-bold": props.variant === "bold",
    "label-value-light": props.variant === "light",
  });
  if (props.isVisible) {
    return (
      <div className={labelValueClassnames}>
        <div>
          <h5>{props.title}</h5>
        </div>
        <div>
          {props.buttonProps?.show ? (
            <button onClick={props.buttonProps.onClick}>
              {props.buttonProps.text}
            </button>
          ) : null}
          <p className="field-warning-text">{props.subTitle}</p>
        </div>
      </div>
    );
  }

  return <React.Fragment />;
};

LabeledValue.defaultProps = {
  isVisible: true,
  variant: "light",
};

export default LabeledValue;
