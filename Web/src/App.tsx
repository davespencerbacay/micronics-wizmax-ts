import useChangeLanguage from "hooks/useChangeLanguage";
import { LOCALES } from "i18n/constants";
import Footer from "layouts/Footer/Footer";
import Banner from "library/Banner/Banner";

function App() {
  const changeLanguage = useChangeLanguage();

  return (
    <div className="App">
      <Banner title="Test" description="test" />
      <button onClick={() => changeLanguage(LOCALES.ENGLISH)}>
        Change Lang
      </button>
      <Footer />
    </div>
  );
}

export default App;
