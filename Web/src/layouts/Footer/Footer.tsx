import "./Footer.scss";
import intl from "i18n/intl";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>{intl("footer.header")}</h2>
        <p>{intl("footer.description")}</p>
        <div className="disclaimer">
          <p>{intl("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
