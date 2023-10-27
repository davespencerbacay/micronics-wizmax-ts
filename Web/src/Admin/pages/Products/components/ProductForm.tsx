import React, { useEffect, useState } from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { CrumbTypes } from "Admin/pages/Dashboard/components/types";
import { ROUTE_PATH } from "constants/routes";
import { Form, Formik } from "formik";
import FormikTextInput from "library/Formik/MUI/FormikTextInput";
import AdminButton from "library/AdminButton/AdminButton";
import Select from "react-select";
import { Products } from "Admin/api/agent";
import { Button as MUIButton } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import ADMIN_ROUTES from "constants/adminRoutes";
import Spinner from "library/Spinner/Spinner";
import * as yup from "yup";
import "./ProductForm.scss";
import AlertMessage from "library/AlertMessage/Alert";

interface DataValues {
	productCategory: string;
	productName: string;
	productImage: string;
	productDescription: string;
}

const ProductForm: React.FC = () => {
	const [loading, setLoading] = useState(false);

	const [thumbnailPreview, setThumbnailPreview] = useState("");

	const [initialValues, setInitialValues] = useState({
		productCategory: "",
		productName: "",
		productImage: "",
		productDescription: "",
	});

	// Validation Schema
	const validationSchema = yup.object({
		productCategory: yup.string().required("This field is required."),
		productName: yup.string().required("This field is required."),
		productImage: yup.string().required("This field is required."),
		productDescription: yup.string().required("This field is required."),
	});

	//   React Select Options
	const options = [
		{ value: "keyboard", label: "Keyboard" },
		{ value: "powerSupply", label: "Power Supply" },
		{ value: "mouse", label: "Mouse" },
		{ value: "monitor", label: "Monitor" },
	];

	const handleFocusBack = () => {
		setThumbnailPreview("");
		window.removeEventListener("focus", handleFocusBack);
	};

	const productImageHandler = (event: any, setFieldValue: any) => {
		setFieldValue("productImage", event.currentTarget.files![0]);
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				setThumbnailPreview(fileReader.result?.toString() ?? "");
			}
		};
		fileReader.readAsDataURL(event.target.files![0]);
		window.removeEventListener("focus", handleFocusBack);
	};

	const clickedFileInput = () => {
		window.addEventListener("focus", handleFocusBack);
	};

	const navigate = useNavigate();
	const { id } = useParams();
	const isEditMode = id ? true : false;

	const createProductHandler = async (data: DataValues) => {
		setLoading(true);
		await Products.createProduct(
			data.productCategory,
			data.productImage,
			data.productName,
			data.productDescription
		);
		setLoading(false);
		toast.success("Product successfully created.");
		navigate(ADMIN_ROUTES.PRODUCTS);
	};

	const updateProductHandler = async (id: string, data: DataValues) => {
		setLoading(true);
		await Products.updateProductById(
			id,
			data.productCategory,
			data.productImage,
			data.productName,
			data.productDescription
		);
		setLoading(false);
	};

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const data = await Products.getSingleProduct(id ?? "");
			setInitialValues({
				productCategory: data?.category ?? "",
				productDescription: data?.productDescription ?? "",
				productImage: data?.productImage ?? "",
				productName: data?.productName ?? "",
			});
			setLoading(false);
		};

		getProduct();
	}, [id]);

	const crumbs: CrumbTypes[] = [
		{
			title: "Wizmax Global",
			url: ROUTE_PATH.DASHBOARD,
			isActive: false,
		},
		{
			title: "Products",
			url: ROUTE_PATH.PRODUCTS,
			isActive: true,
		},
	];

	if (loading) {
		<Spinner variant="fixed" />;
	}

	return (
		<AdminWrapper breadcrumb={crumbs}>
			{loading ? (
				<Spinner variant="fixed" />
			) : (
				<div className="create-product-main-container">
					<h3>{!isEditMode ? "Create Product" : "Edit Product"}</h3>

					{loading ? (
						<Spinner variant="relative" />
					) : (
						<div className="create-form-container">
							<Formik
								initialValues={initialValues}
								enableReinitialize
								validationSchema={validationSchema}
								onSubmit={async (data, { resetForm }) => {
									try {
										if (isEditMode) {
											setLoading(true);
											await updateProductHandler(id ?? "", data);
											toast.success("Product Successfully Updated.");
											navigate(ADMIN_ROUTES.PRODUCTS);
											setLoading(false);
										} else {
											setLoading(true);
											await createProductHandler(data);
											navigate(ADMIN_ROUTES.PRODUCTS);
											setLoading(false);
										}
									} catch (error) {
										setLoading(false);
										toast.error("Invalid Data");
									}
								}}
							>
								{({
									handleReset,
									values,
									errors,
									handleChange,
									setFieldValue,
								}) => (
									<Form>
										<div className="product-form-control">
											<label htmlFor="productImage">Product Image</label>
											<br />
											<MUIButton variant="contained" component="label">
												Upload File
												<input
													type="file"
													name="productImage"
													hidden
													accept=".png, .jpg, .jpeg"
													onChange={(event) =>
														productImageHandler(event, setFieldValue)
													}
													onClick={clickedFileInput}
												/>
											</MUIButton>
											<div className="error-message-product">
												{values.productImage === "" ? (
													<AlertMessage message="This field is required" />
												) : (
													<React.Fragment />
												)}
											</div>
											{thumbnailPreview ||
											(typeof values.productImage === "string" &&
												values.productImage) ? (
												<div className="product-img-container">
													<img
														src={
															typeof values.productImage === "string"
																? values.productImage
																: thumbnailPreview
														}
														alt="product-profile-pic"
													></img>
												</div>
											) : null}
										</div>
										<div className="product-form-control category">
											<label htmlFor="productCategory">Product Category</label>
											<Select
												options={options}
												isClearable
												onChange={(e) =>
													setFieldValue("productCategory", e?.value)
												}
												value={
													values.productCategory
														? {
																label: values.productCategory,
																value: values.productCategory,
														  }
														: undefined
												}
											/>
											<div className="error-message-product">
												{values.productCategory === "" ? (
													<AlertMessage message="This field is required" />
												) : (
													<React.Fragment />
												)}
											</div>
										</div>
										<div className="product-form-control">
											<label>Product Name</label>
											<FormikTextInput
												placeholder="Enter Product Name"
												name="productName"
												value={values.productName}
											/>
										</div>
										<div className="product-form-control">
											<label>Product Description</label>
											<FormikTextInput
												placeholder="Enter Product Description"
												name="productDescription"
												isTextArea
												value={values.productDescription}
											/>
										</div>
										<div className="product-form-btn-actions">
											<AdminButton variant="default" type="submit">
												{isEditMode ? "Edit Product" : "Add Product"}
											</AdminButton>
											<AdminButton variant="danger">Reset</AdminButton>
										</div>
										{/* PRE tags for checking : Comment if  not needed */}
										{/* <pre>{JSON.stringify(values, null, 2)}</pre>
										<pre>{JSON.stringify(errors, null, 2)}</pre> */}
									</Form>
								)}
							</Formik>
						</div>
					)}
				</div>
			)}
		</AdminWrapper>
	);
};

export default ProductForm;
