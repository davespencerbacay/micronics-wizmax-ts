import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import React, { useState } from "react";
import UserTable from "../Dashboard/components/UserTable/UserTable";
import { BiPlus } from "react-icons/bi";
import Spinner from "library/Spinner/Spinner";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikTextInput from "library/Formik/MUI/FormikTextInput";
import { toast } from "react-toastify";
import "./Users.scss";

type Anchor = "right";

const Users: React.FC = () => {
	const [loading, setLoading] = useState(false);

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => {
		const validationSchema = yup.object({
			firstName: yup.string().required("This field is required").max(20),
			lastName: yup.string().required("This field is required").max(20),
			email: yup
				.string()
				.email("This is not an email.")
				.required("This field is required"),
		});

		return (
			<Box sx={{ width: 400 }} role="presentation">
				<List>
					<div className="drawer-container">
						<h3>Add User</h3>
						<div className="form-container">
							<Formik
								validateOnChange={true}
								initialValues={{
									firstName: "",
									lastName: "",
									email: "",
								}}
								validationSchema={validationSchema}
								onSubmit={(data, { setSubmitting }) => {
									setSubmitting(true);
									console.log("submit: ", data);
									setSubmitting(false);
								}}
							>
								{({ values, errors, isSubmitting, handleReset }) => {
									let disabled =
										values.email === "" ||
										values.firstName === "" ||
										values.lastName === "";

									return (
										<Form>
											<div className="form-control-user">
												<label htmlFor="firstName">First Name</label>
												<FormikTextInput
													name="firstName"
													placeholder="Enter your First Name"
												/>
											</div>
											<div className="form-control-user">
												<label htmlFor="lastName">Last Name</label>
												<FormikTextInput
													name="lastName"
													placeholder="Enter your Last Name"
												/>
											</div>
											<div className="form-control-user">
												<label htmlFor="email">Email</label>
												<FormikTextInput
													name="email"
													placeholder="Enter your Email"
												/>
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
						</div>
					</div>
				</List>
			</Box>
		);
	};

	return (
		<React.Fragment>
			{loading ? (
				<Spinner variant="fixed" />
			) : (
				<AdminWrapper>
					<div className="user-page-container">
						<div className="add-user-btn">
							<button onClick={toggleDrawer("right", true)}>
								{" "}
								<BiPlus /> Add an User
							</button>
							<div className="drawer-container">
								<Drawer
									anchor="right"
									open={state["right"]}
									onClose={toggleDrawer("right", false)}
								>
									{list("right")}
								</Drawer>
							</div>
						</div>
						<UserTable />
					</div>
				</AdminWrapper>
			)}
		</React.Fragment>
	);
};

export default Users;
