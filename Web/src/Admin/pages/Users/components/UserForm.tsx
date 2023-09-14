import { Formik, Field, Form } from "formik";
import FormikTextInput from "library/Formik/FormikInput";
import React from "react";
import { toast } from "react-toastify";
import { Users as UserApiService } from "../../../api/agent";
import * as yup from "yup";

const UserForm: React.FC = () => {
  const validationSchema = yup.object({
    firstName: yup.string().required("This field is required").max(20),
    lastName: yup.string().required("This field is required").max(20),
    email: yup
      .string()
      .email("This is not an email.")
      .required("This field is required"),
    password: yup
      .string()
      .min(8, "Password must be atleast 8 characters ")
      .required("This is field is required.")
      .max(20, "Password too long."),
  });
  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAdmin: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true);
        const response = await UserApiService.createUser(
          data.firstName,
          data.lastName,
          data.email,
          data.password,
          data.isAdmin
        );
        console.log(response);
        setSubmitting(false);
      }}
    >
      {({ values, errors, isSubmitting, handleReset }) => {
        let disabled =
          values.email === "" ||
          values.firstName === "" ||
          values.lastName === "" ||
          values.isAdmin === null ||
          values.password === "";

        return (
          <Form>
            <div className="form-control-user">
              <label htmlFor="firstName">First Name</label>
              <FormikTextInput
                name="firstName"
                placeholder="Enter user First Name"
              />
            </div>
            <div className="form-control-user">
              <label htmlFor="lastName">Last Name</label>
              <FormikTextInput
                name="lastName"
                placeholder="Enter user Last Name"
              />
            </div>
            <div className="form-control-user">
              <label htmlFor="email">Email</label>
              <FormikTextInput name="email" placeholder="Enter user Email" />
            </div>
            <div className="form-control-user">
              <label htmlFor="email">Password</label>
              <FormikTextInput
                name="password"
                placeholder="Enter user password"
              />
            </div>
            <div className="form-control-user checkbox">
              <Field type="checkbox" name="isAdmin" />
              <label htmlFor="email">Is admin?</label>
            </div>
            <div className="form-action-btn-container">
              <button
                onClick={handleReset}
                className="form-action-btn reset-btn"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting || disabled}
                className="form-action-btn submit-btn"
                onClick={() => toast.success("Form Submitted.")}
              >
                Add
              </button>
            </div>
            {/* Uncomment this one if on testing */}
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserForm;
