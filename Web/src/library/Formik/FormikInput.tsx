import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { Input, InputProps } from "reactstrap";

const FormikTextInput: React.FC<InputProps> = (props) => {
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
    <Input
      {...field}
      {...props}
      value={field.value}
      onChange={handleOnChange}
    />
  );
};
export default FormikTextInput;
