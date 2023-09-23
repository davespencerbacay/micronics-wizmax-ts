import React, { useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { UsersData } from "Admin/models/userModel";
import { toast } from "react-toastify";
import * as yup from "yup";
import Spinner from "library/Spinner/Spinner";
import FormikTextInput from "library/Formik/FormikInput";
import { Users } from "Admin/api/agent";

interface FormProps {
  isEditMode: boolean;
  header: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UsersData[] | undefined>();

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

  if (loading) {
    return <Spinner variant="fixed" />;
  }
  return (
    <div className="form-wrapper-container">
      <Formik
        validateOnChange
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          isAdmin: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            setLoading(true);
            if (!props.isEditMode) {
              const createUser: UsersData = await Users.createUser(
                data.firstName,
                data.lastName,
                data.email,
                data.password,
                data.isAdmin
              );

              setSubmitting(false);
              const updatedUser = users?.push(createUser);
              const newData = {
                ...users,
                createUser,
              };
              setUsers(newData as any);
              setLoading(false);
              toast.success("User sucessfully created.");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              console.log("submit :", data);
            }
          } catch (error) {
            if (error as Error) {
              setLoading(false);
            }
          }
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
            <FormikForm>
              <h3>{props.header}</h3>
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
                >
                  {props.isEditMode ? "Edit" : "Add"}
                </button>
              </div>
              {/* Uncomment this one if on testing */}
              <pre> Values: {JSON.stringify(values, null, 2)}</pre>
              <pre> Errors: {JSON.stringify(errors, null, 2)}</pre>
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
