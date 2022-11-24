import FormikTextInput from "library/Formik/FormikInput";
import LabeledValue from "library/LabeledValue/LabeledValue";
import React from "react";
import { InputProps } from "reactstrap";
import "./LabeledInput.scss";

interface ILabeledInput extends InputProps {
  label: string;
}
const LabeledInput: React.FC<ILabeledInput> = (props) => {
  return (
    <div className="labeled-input">
      <LabeledValue title={props.label} />
      <FormikTextInput {...props} />
    </div>
  );
};

export default LabeledInput;
