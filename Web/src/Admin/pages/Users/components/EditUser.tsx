import React, { useEffect, useState } from "react";
import { Users } from "Admin/api/agent";
import { Form, Formik } from "formik";
import FormikTextInput from "library/Formik/FormikInput";
import { toast } from "react-toastify";
import { Checkbox } from "@mui/material";
import Spinner from "library/Spinner/Spinner";
import * as yup from "yup";

interface EditUserProps {
  id?: string;
}

const EditUser: React.FC<EditUserProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    password: "",
  });

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const user = await Users.getUserById(props.id ?? "");
      if (user.email) {
        setInitialValues({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          password: user.password,
        });
        setLoading(false);
      }
    };

    getUser();
  }, [props.id]);

  const validationSchema = yup.object({
    firstName: yup.string().min(2, "This Field must be atleast 2 characters"),
    email: yup.string().email("This is not an email."),
  });

  return (
    <div>
      {loading ? (
        <Spinner variant="relative" />
      ) : (
        <React.Fragment>
          <h3>Edit User</h3>
          <Formik
            initialValues={initialValues}
            validateOnChange
            validationSchema={validationSchema}
            onSubmit={async (data) => {
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
              setLoading(false);
              window.location.reload(); //Remove this if push is applied
            }}
            enableReinitialize
          >
            {({ handleReset, values, errors, setFieldValue }) => {
              return (
                <Form>
                  <div className="form-control-user">
                    <label htmlFor="firstName">First Name</label>
                    <FormikTextInput
                      name="firstName"
                      placeholder="Edit User First Name"
                      value={values.firstName}
                    />
                  </div>
                  <div className="form-control-user">
                    <label htmlFor="firstName">Last Name</label>
                    <FormikTextInput
                      name="lastName"
                      placeholder="Edit User Last Name"
                      value={values.lastName}
                    />
                  </div>
                  <div className="form-control-user">
                    <label htmlFor="email">Email </label>
                    <FormikTextInput
                      name="email"
                      placeholder="Edit Email"
                      value={values.email}
                    />
                  </div>
                  <div className="form-control-user checkbox">
                    <Checkbox
                      name="isAdmin"
                      value={values.isAdmin}
                      checked={values.isAdmin}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFieldValue("isAdmin", value);
                      }}
                    />

                    <label htmlFor="isAdmin">Is Admin? </label>
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
                      className="form-action-btn submit-btn"
                    >
                      Edit
                    </button>
                  </div>

                  {/* Uncomment this one if on testing */}
                  {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                  <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                </Form>
              );
            }}
          </Formik>
        </React.Fragment>
      )}
    </div>
  );
};

export default EditUser;
