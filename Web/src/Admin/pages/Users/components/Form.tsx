import React, { useEffect, useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { UsersData } from "Admin/models/userModel";
import { toast } from "react-toastify";
import * as yup from "yup";
import Spinner from "library/Spinner/Spinner";
import FormikTextInput from "library/Formik/FormikInput";
import { Users } from "Admin/api/agent";
import { Checkbox } from "@mui/material";
import WMGButton from "library/WMGButton/WMGButton";

interface FormProps {
  isEditMode: boolean;
  id: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UsersData[] | undefined>();
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    password: "",
    showPassword: true,
  });

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      if (props.id) {
        const user = await Users.getUserById(props.id ?? "");
        setInitialValues({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          password: user.password,
          showPassword: false,
        });
        setLoading(false);
      }
    };

    if (props.isEditMode) getUser();
  }, [props.id, props.isEditMode]);

  const validationSchema = yup.object({
    showPassword: yup.boolean(),
    firstName: yup.string().required("This field is required").max(20),
    lastName: yup.string().required("This field is required").max(20),
    email: yup
      .string()
      .email("This is not an email.")
      .required("This field is required"),
    password: yup.string().when("showPassword", {
      is: true,
      then: yup.string().required("This is field is required."),
    }),
  });

  if (loading) {
    return <Spinner variant="fixed" />;
  }

  return (
    <div className="form-wrapper-container">
      <Formik
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            setLoading(true);
            if (!props.isEditMode) {
              // Create User function
              const createUser: UsersData = await Users.createUser(
                data.firstName,
                data.lastName,
                data.email,
                data.password,
                data.isAdmin
              );

              setSubmitting(false);
              users?.push(createUser);
              const newData = {
                ...users,
                createUser,
              };
              setUsers(newData as any);
              setLoading(false);
              toast.success("User sucessfully created.");
              setUsers((prevState) => {
                const oldData = prevState;
                const newUser = {
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email: data.email,
                  password: data.password,
                  isAdmin: data.isAdmin,
                };

                const newData = {
                  ...oldData,
                  newUser,
                };
                return newData as any;
              });
              window.location.reload(); //Remove this if push is applied
            } else {
              setLoading(true);
              const editUser = await Users.updateUser(
                props.id ?? "",
                data.firstName,
                data.lastName,
                data.email,
                data.password,
                data.isAdmin
              );
              toast.success("User successfully edited.");
              window.location.reload(); //Remove this if push is applied
            }
          } catch (error) {
            if (error as Error) {
              setLoading(false);
              toast.error("User already exist.");
            }
          }
        }}
      >
        {({ values, errors, isSubmitting, handleReset, setFieldValue }) => {
          let disabled =
            values.email === "" ||
            values.firstName === "" ||
            values.lastName === "" ||
            values.isAdmin === null ||
            values.password === "";
          return (
            <FormikForm>
              <h3>{props.isEditMode ? "Edit User" : "Add User"}</h3>
              <div className="form-control-user">
                <label htmlFor="firstName">First Name</label>
                <FormikTextInput
                  name="firstName"
                  placeholder="Enter user First Name"
                  value={initialValues.firstName}
                />
              </div>
              <div className="form-control-user">
                <label htmlFor="lastName">Last Name</label>
                <FormikTextInput
                  name="lastName"
                  placeholder="Enter user Last Name"
                  value={initialValues.lastName}
                />
              </div>
              <div className="form-control-user">
                <label htmlFor="email">Email</label>
                <FormikTextInput
                  name="email"
                  placeholder="Enter user Email"
                  value={initialValues.email}
                />
              </div>
              {props.isEditMode ? null : (
                <div className="form-control-user">
                  <label htmlFor="email">Password</label>
                  <FormikTextInput
                    name="password"
                    placeholder="Enter user password"
                  />
                </div>
              )}
              <div className="form-control-user checkbox">
                {props.isEditMode ? (
                  <React.Fragment>
                    <Checkbox
                      name="isAdmin"
                      value={values.isAdmin}
                      checked={values.isAdmin}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFieldValue("isAdmin", value);
                      }}
                    />
                    <label htmlFor="isAdmin">Is Admin?</label>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Field type="checkbox" name="isAdmin" />
                    <label htmlFor="email">Is admin?</label>
                  </React.Fragment>
                )}
              </div>
              <div className="form-action-btn-container">
                <WMGButton variant="danger" onClick={handleReset}>
                  Reset
                </WMGButton>
                <WMGButton
                  variant="default"
                  type="submit"
                  disabled={isSubmitting || disabled}
                >
                  {props.isEditMode ? "Edit" : "Add"}
                </WMGButton>
              </div>
              {/* Uncomment this one if on testing */}
              {/* <pre> Values: {JSON.stringify(values, null, 2)}</pre>
							<pre> Errors: {JSON.stringify(errors, null, 2)}</pre> */}
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
