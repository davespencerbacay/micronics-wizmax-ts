import { FormattedMessage, useIntl as internalization } from "react-intl";

const intl = (id: any, value = {}) => (
  <FormattedMessage id={id} values={{ ...value }} />
);

export const useIntl = (id: any, value = {}) => {
  const intl = internalization();
  return intl.formatMessage({ id });
};

export default intl;
