import React from "react";
import { Grid, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import { FaUserAlt } from "react-icons/fa";
import { PiHandWavingLight } from "react-icons/pi";
import "./LoginForm.scss";
import { error } from "console";

const LoginForm: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMeToggle: false,
  };

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
            onSubmit={(data) => {
              console.log("Form Submitted");
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="login-form-control">
                  <label htmlFor="">Email</label>
                  <TextField
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    variant="outlined"
                  />
                </div>
                <div className="login-form-control">
                  <label htmlFor="">Password</label>
                  <TextField
                    name="password"
                    placeholder="Enter your Passsword"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    variant="outlined"
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
