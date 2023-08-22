import React from "react";
import { Grid, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import { PiHandWavingLight } from "react-icons/pi";
import * as Yup from "yup";
import "./LoginForm.scss";
import FormikTextInput from "library/Formik/MUI/FormikTextInput";

const LoginForm: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMeToggle: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters.")
      .required("Password is required."),
  });

  return (
    <div className="login-container">
      <Grid container spacing={2} alignItems={"center"}>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className="login-left-col-container"
        >
          <img
            src="https://images.pexels.com/photos/8092315/pexels-photo-8092315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="https://images.pexels.com/photos/8092315/pexels-photo-8092315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className="login-right-col-container"
        >
          <div className="righ-col-captions">
            <h2>
              Welcome to Wizmax Global! <PiHandWavingLight />
            </h2>
            <p>Please sign-in to your account and start the adventure.</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) => {
              console.log("Form Submitted");
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="login-form-control">
                  <label htmlFor="">Email</label>
                  <FormikTextInput
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onBlur={handleBlur}
                    type="email"
                    variant="outlined"
                    error={errors.email as any}
                  />
                </div>
                <div className="login-form-control">
                  <label htmlFor="">Password</label>
                  <FormikTextInput
                    name="password"
                    placeholder="Enter your Passsword"
                    value={values.password}
                    onBlur={handleBlur}
                    type="password"
                    variant="outlined"
                    error={errors.password as any}
                  />
                </div>
                <div className="login-options">
                  <label>
                    <Field type="checkbox" name="rememberMeToggle" />
                    Remember Me
                  </label>
                  <button>Forgot Password?</button>
                </div>
                <div className="btn-login">
                  <button>Login</button>
                </div>
                {/* Form error and values checker */}
                {/* <pre> {JSON.stringify(values, null, 2)} </pre>
                <pre> {JSON.stringify(errors, null, 2)} </pre> */}
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
