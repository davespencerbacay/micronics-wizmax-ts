import { CONTACTS } from "constants/";
import { useIntl } from "i18n/intl";
import "./Inquiries.scss";

const Inquiries = () => {
  const LOCALIZATION = {
    stayInTouch: useIntl("distributorPage.stayInTouch"),
    stayInTouchSubtitle: useIntl("distributorPage.stayInTouchSubtitle"),
    getInTouch: useIntl("distributorPage.getInTouch"),
    reachHere: useIntl("distributorPage.reachHere"),
  };

  const contactList = [
    {
      label: useIntl("inquiryContacts.korTel"),
      value: CONTACTS.KOREA_TEL,
    },
    {
      label: useIntl("inquiryContacts.phTel"),
      value: CONTACTS.PH_TEL,
    },
    {
      label: useIntl("inquiryContacts.email"),
      value: CONTACTS.EMAIL,
    },
    {
      label: useIntl("inquiryContacts.balanceInquiry"),
      value: CONTACTS.BUSINESS_INQUIRY,
    },
    {
      label: useIntl("inquiryContacts.generalInquiry"),
      value: CONTACTS.GENERAL_INQUIRY,
    },
  ];
  return (
    <div className="inquiries">
      <div className="inquiries-get-in-touch">
        <h5>{LOCALIZATION.stayInTouch}</h5>
        <p>{LOCALIZATION.stayInTouchSubtitle}</p>
        <p>{LOCALIZATION.getInTouch}</p>
      </div>
      <div className="inquiries-contact-list">
        <h5>{LOCALIZATION.reachHere}</h5>
        {contactList.map((contact, index) => (
          <label key={index}>{contact.label + " " + contact.value}</label>
        ))}
      </div>
    </div>
  );
};

export default Inquiries;
