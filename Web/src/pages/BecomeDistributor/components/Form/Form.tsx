import { Formik } from "formik";
import { useIntl } from "i18n/intl";
import { Button, Col, Row } from "reactstrap";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Form.scss";

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

  return (
    <div className="distributor-form">
      <Formik
        initialValues={{
          companyName: "",
          companyEmailAddress: "",
          businessWebsite: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setTimeout(() => setSubmitting(false), 5000);
        }}
      >
        {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => {
          const labeledInput = [
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
                      value={data.value}
                    />
                  </Col>
                ))}
              </Row>
              <Button type="submit" disabled={isSubmitting}>
                {LOCALIZATION.send}
              </Button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
