import { useIntl } from "i18n/intl";
import "./Inquiries.scss";

const Inquiries = () => {
  const LOCALIZATION = {
    stayInTouch: useIntl("distributorPage.stayInTouch"),
    stayInTouchSubtitle: useIntl("distributorPage.stayInTouchSubtitle"),
    getInTouch: useIntl("distributorPage.getInTouch"),
  };
  return (
    <div className="inquiries">
      <div className="inquiries-get-in-touch">
        <h5>{LOCALIZATION.stayInTouch}</h5>
        <p>{LOCALIZATION.stayInTouchSubtitle}</p>
        <p>{LOCALIZATION.getInTouch}</p>
      </div>
    </div>
  );
};

export default Inquiries;
