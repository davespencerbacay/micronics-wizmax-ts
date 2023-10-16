import React, { useState } from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { CrumbTypes } from "Admin/pages/Dashboard/components/types";
import { ROUTE_PATH } from "constants/routes";
import "./CreateProduct.scss";
import { Form, Formik } from "formik";
import FormikTextInput from "library/Formik/MUI/FormikTextInput";
import AdminButton from "library/AdminButton/AdminButton";
import Select from "react-select";
import { Products } from "Admin/api/agent";
import { Button as MUIButton } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ADMIN_ROUTES from "constants/adminRoutes";
import Spinner from "library/Spinner/Spinner";

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

  const [loading, setLoading] = useState(false);

  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const productFormControl = [
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

  return (
    <AdminWrapper breadcrumb={crumbs}>
      {loading ? (
        <Spinner variant="fixed" />
      ) : (
        <div className="create-product-main-container">
          <h3>Create Product</h3>

          <div className="create-form-container">
            <Formik
              initialValues={initialValues}
              onSubmit={async (data) => {
                setLoading(true);
                const createProduct = await Products.createProduct(
                  data.productCategory,
                  data.productImage,
                  data.productName,
                  data.productDescription
                );
                setLoading(false);
                toast.success("Product successfully created.");
                navigate(ADMIN_ROUTES.PRODUCTS);
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
                  </div>
                  <div className="product-form-control category">
                    <label htmlFor="productCategory">Product Category</label>
                    <Select
                      options={options}
                      onChange={(e) =>
                        setFieldValue("productCategory", e?.value)
                      }
                    />
                  </div>
                  {productFormControl.map((product) => (
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
                    <AdminButton variant="danger" type="button">
                      Reset
                    </AdminButton>
                  </div>
                  {/* PRE tags for checking : Comment if will not needed */}
                  {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                  <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </AdminWrapper>
  );
};

export default CreateProduct;
