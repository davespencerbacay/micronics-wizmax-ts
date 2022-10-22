import { Formik } from "formik";
import { useIntl } from "i18n/intl";
import { Col, Row } from "reactstrap";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Form.scss";
import ButtonWithLoading from "library/ButtonWithLoading/ButtonWithLoading";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Toast from "library/Toast/Toast";

type EmailData = {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  subject: string;
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
    fullName: useIntl("contactPage.form.name"),
    mobileNumber: useIntl("contactPage.form.mobileNumber"),
    emailAddress: useIntl("contactPage.form.emailAddress"),
    subject: useIntl("contactPage.form.subject"),
    message: useIntl("contactPage.form.message"),
    send: useIntl("global.send"),
  };

  const initialValues = {
    companyName: "",
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name field is required."),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address field is required."),
    mobileNumber: Yup.string().required("Mobile Number field is required."),
    subject: Yup.string().required("Subject field is required."),
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
              name: "fullName",
              label: LOCALIZATION.fullName,
              value: values.fullName,
              colDef: {
                xs: 12,
                md: 12,
                lg: 12,
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
              name: "emailAddress",
              label: LOCALIZATION.emailAddress,
              value: values.emailAddress,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "subject",
              label: LOCALIZATION.subject,
              value: values.subject,
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
