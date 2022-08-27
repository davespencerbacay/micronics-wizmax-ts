import { FormattedMessage } from "react-intl";

const intl = (id: any, value = {}) => (
  <FormattedMessage id={id} values={{ ...value }} />
);

export default intl;
