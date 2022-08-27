import useChangeLanguage from "./hooks/useChangeLanguage";
import { LOCALES } from "./i18n/constants";
import intl from "./i18n/intl";

function App() {
  const changeLanguage = useChangeLanguage();

  return (
    <div className="App">
      <h1>{intl("footer.greetings")}</h1>
      <button onClick={() => changeLanguage(LOCALES.KOREAN)}>asd</button>
    </div>
  );
}

export default App;
