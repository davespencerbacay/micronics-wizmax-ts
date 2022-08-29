import useChangeLanguage from "hooks/useChangeLanguage";
import { LOCALES } from "i18n/constants";
import Footer from "layouts/Footer/Footer";

function App() {
  const changeLanguage = useChangeLanguage();

  return (
    <div className="App">
      <button onClick={() => changeLanguage(LOCALES.ENGLISH)}>
        Change Lang
      </button>
      <Footer />
    </div>
  );
}

export default App;
