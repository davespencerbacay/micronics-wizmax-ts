import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { FormFeedback, Input, InputProps } from "reactstrap";

interface IFormikTextInput extends InputProps {
  isTextArea?: boolean;
}
const FormikTextInput: React.FC<IFormikTextInput> = (props) => {
  const [field, meta, helper] = useField<string>(props.name ?? "");
  const errorText = meta.error && meta.touched ? meta.error : "";
  const [value, setValue] = useState(props.value || "");

  const handleOnChange = (event: any) => {
    const newValue = event.target.value || "";

    setValue(newValue);
    helper.setValue(newValue);
  };

  useEffect(() => {
    const newValue = (props?.value as string) ?? "";
    setValue(newValue);
    helper.setValue(newValue);
  }, [props?.value]);

  return (
    <React.Fragment>
      <Input
        {...field}
        {...props}
        value={field.value}
        onChange={handleOnChange}
        invalid={errorText ? true : false}
      />
      <FormFeedback>{meta.error}</FormFeedback>
    </React.Fragment>
  );
};
export default FormikTextInput;
