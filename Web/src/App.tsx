import useChangeLanguage from "hooks/useChangeLanguage";
import { LOCALES } from "i18n/constants";
import intl from "i18n/intl";
import Footer from "layouts/Footer/Footer";

function App() {
  const changeLanguage = useChangeLanguage();

  return (
    <div className="App">
      <button onClick={() => changeLanguage(LOCALES.ENGLISH)}>
        Change Lang
      </button>
      <p>{intl('navigationBar.search')}</p>
      <Footer />
    </div>
  );
}

export default App;
