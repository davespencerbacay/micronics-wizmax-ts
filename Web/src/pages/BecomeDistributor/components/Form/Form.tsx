import { Formik } from "formik";
import { useIntl } from "i18n/intl";
import { Col, Row } from "reactstrap";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Form.scss";
import ButtonWithLoading from "library/ButtonWithLoading/ButtonWithLoading";
import * as Yup from "yup";
import Toast from "library/Toast/Toast";
import { useState } from "react";

type EmailData = {
  companyName: string;
  companyEmailAddress: string;
  businessWebsite: string;
  businessAddress: string;
  zipCode: string;
  name: string;
  designation: string;
  mobileNumber: string;
  telNumber: string;
  NOB: string;
  message: string;
};

interface ILabeledInput {
  name: string;
  label: string;
  value: string;
  colDef: {
    xs: number;
    md: number;
    lg: number;
  };
  isTextArea?: boolean;
}
const Form = () => {
  const [showToast, setShowToast] = useState(false);
  const LOCALIZATION = {
    companyName: useIntl("distributorPage.form.companyName"),
    companyEmailAddress: useIntl("distributorPage.form.companyEmailAddress"),
    businessWebsite: useIntl("distributorPage.form.businessWebsite"),
    businessAddress: useIntl("distributorPage.form.businessAddress"),
    zipCode: useIntl("distributorPage.form.zipCode"),
    fullName: useIntl("distributorPage.form.fullName"),
    designation: useIntl("distributorPage.form.designation"),
    mobileNumber: useIntl("distributorPage.form.mobileNumber"),
    telNumber: useIntl("distributorPage.form.telNumber"),
    natureBusiness: useIntl("distributorPage.form.natureBusiness"),
    message: useIntl("distributorPage.form.message"),
    send: useIntl("global.send"),
  };

  const initialValues = {
    companyName: "",
    companyEmailAddress: "",
    businessWebsite: "",
    businessAddress: "",
    zipCode: "",
    name: "",
    designation: "",
    mobileNumber: "",
    telNumber: "",
    NOB: "",
    message: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company name field is required."),
    companyEmailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address field is required."),
    businessWebsite: Yup.string().required(
      "Business website field is required."
    ),
    businessAddress: Yup.string().required(
      "Business address field is required."
    ),
    zipCode: Yup.string().required("Zip Code field is required."),
    name: Yup.string().required("Fullname/Contact field is required."),
    designation: Yup.string().required("Designation/Field field is required."),
    mobileNumber: Yup.string().required("Mobile Number field is required."),
    telNumber: Yup.string().required("Telephone Number field is required."),
    NOB: Yup.string().required("Nature of business field is required."),
    message: Yup.string().required("Message field is required."),
  });
  return (
    <div className="distributor-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data: EmailData, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setShowToast(true);
            console.log(data);
            setSubmitting(false);
          }, 5000);
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
        }) => {
          const labeledInput: ILabeledInput[] = [
            {
              name: "companyName",
              label: LOCALIZATION.companyName,
              value: values.companyName,
              colDef: {
                xs: 12,
                md: 6,
                lg: 4,
              },
            },
            {
              name: "companyEmailAddress",
              label: LOCALIZATION.companyEmailAddress,
              value: values.companyEmailAddress,
              colDef: {
                xs: 12,
                md: 6,
                lg: 4,
              },
            },
            {
              name: "businessWebsite",
              label: LOCALIZATION.businessWebsite,
              value: values.businessWebsite,
              colDef: {
                xs: 12,
                md: 6,
                lg: 4,
              },
            },
            {
              name: "businessAddress",
              label: LOCALIZATION.businessAddress,
              value: values.businessAddress,
              colDef: {
                xs: 12,
                md: 6,
                lg: 8,
              },
            },
            {
              name: "zipCode",
              label: LOCALIZATION.zipCode,
              value: values.zipCode,
              colDef: {
                xs: 12,
                md: 6,
                lg: 4,
              },
            },
            {
              name: "name",
              label: LOCALIZATION.fullName,
              value: values.name,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "designation",
              label: LOCALIZATION.designation,
              value: values.designation,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "mobileNumber",
              label: LOCALIZATION.mobileNumber,
              value: values.mobileNumber,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "telNumber",
              label: LOCALIZATION.telNumber,
              value: values.telNumber,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "NOB",
              label: LOCALIZATION.natureBusiness,
              value: values.NOB,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
            },
            {
              name: "message",
              label: LOCALIZATION.message,
              value: values.message,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
              isTextArea: true,
            },
          ];
          return (
            <form onSubmit={handleSubmit}>
              <Row>
                {labeledInput.map((data, index) => (
                  <Col {...{ ...data.colDef }} key={index}>
                    <LabeledInput
                      name={data.name}
                      label={data.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={data.value as any}
                      type={data.isTextArea ? "textarea" : "text"}
                      errors={errors}
                    />
                  </Col>
                ))}
              </Row>
              <ButtonWithLoading
                isLoading={isSubmitting}
                disabled={isSubmitting || Object.keys(errors).length !== 0}
                type="submit"
              ></ButtonWithLoading>
              <Toast isVisible={showToast} setter={setShowToast} />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
