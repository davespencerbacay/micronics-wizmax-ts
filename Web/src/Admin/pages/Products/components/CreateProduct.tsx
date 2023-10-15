import React, { useState } from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { CrumbTypes } from "Admin/pages/Dashboard/components/types";
import { ROUTE_PATH } from "constants/routes";
import "./CreateProduct.scss";
import { Form, Formik } from "formik";
import FormikTextInput from "library/Formik/MUI/FormikTextInput";
import AdminButton from "library/AdminButton/AdminButton";
import Select from "react-select";

const CreateProduct: React.FC = () => {
	const crumbs: CrumbTypes[] = [
		{
			title: "Wizmax Global",
			url: ROUTE_PATH.DASHBOARD,
			isActive: false,
		},
		{
			title: "Products",
			url: ROUTE_PATH.PRODUCTS,
			isActive: false,
		},
		{
			title: "Create product",
			url: ROUTE_PATH.CREATEPRODUCT,
			isActive: true,
		},
	];

	const [initialValues, setInitialValues] = useState({
		productCategory: "",
		productName: "",
		productImage: "",
		productDescription: "",
	});

	const formContent = [
		{
			labelFor: "productName",
			label: "Product Name",
			name: "productName",
			placeholder: "Enter Product Name",
			isTextArea: false,
		},

		{
			labelFor: "productDescription",
			label: "Product Description",
			name: "productDescription",
			placeholder: "Enter Product Description",
			isTextArea: true,
		},
	];

	const options = [
		{ value: "keyboard", label: "Keyboard" },
		{ value: "powerSupply", label: "Power Supply" },
		{ value: "mouse", label: "Mouse" },
		{ value: "monitor", label: "Monitor" },
	];

	return (
		<AdminWrapper breadcrumb={crumbs}>
			<div className="create-product-main-container">
				<h3>Create Product</h3>

				<div className="create-form-container">
					<Formik
						initialValues={initialValues}
						onSubmit={(data) => console.log("submit: ", data)}
					>
						{({ handleReset, values, errors, handleChange, setFieldValue }) => (
							<Form>
								<div className="product-form-control">
									<label htmlFor="productImage">Product Image</label>
								</div>
								<div className="product-form-control">
									<label htmlFor="productCategory">Product Category</label>
									<Select
										options={options}
										onChange={(e) => setFieldValue("productCategory", e?.value)}
									/>
								</div>
								{formContent.map((product) => (
									<div className="product-form-control">
										<label htmlFor={product.labelFor}>{product.label}</label>
										<FormikTextInput
											placeholder={product.placeholder}
											name={product.name}
											isTextArea={product.isTextArea}
										/>
									</div>
								))}
								<div className="product-form-btn-actions">
									<AdminButton variant="default" type="submit">
										Add Product
									</AdminButton>
									<AdminButton variant="danger" onClick={handleReset}>
										Reset
									</AdminButton>
								</div>
								<pre>{JSON.stringify(values, null, 2)}</pre>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</AdminWrapper>
	);
};

export default CreateProduct;
