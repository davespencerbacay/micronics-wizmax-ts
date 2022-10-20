import { Formik } from "formik";
import { useIntl } from "i18n/intl";
import { Col, Row } from "reactstrap";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Form.scss";
import ButtonWithLoading from "library/ButtonWithLoading/ButtonWithLoading";

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
  return (
    <div className="distributor-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(data: EmailData, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log(data);
            setSubmitting(false);
          }, 5000);
        }}
      >
        {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => {
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
                    />
                  </Col>
                ))}
              </Row>
              <ButtonWithLoading
                isLoading={isSubmitting}
                disabled={isSubmitting}
                type="submit"
              ></ButtonWithLoading>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
