import FormikTextInput from "library/Formik/FormikInput";
import LabeledValue from "library/LabeledValue/LabeledValue";
import React from "react";
import { InputProps } from "reactstrap";
import "./LabeledInput.scss";

interface ILabeledInput extends InputProps {
  label: string;
  hideLabel?: boolean;
}
const LabeledInput: React.FC<ILabeledInput> = (props) => {
  return (
    <div className="labeled-input">
      {props.hideLabel ? null : <LabeledValue title={props.label} />}
      <FormikTextInput {...props} placeholder={props.label} />
    </div>
  );
};

export default LabeledInput;
