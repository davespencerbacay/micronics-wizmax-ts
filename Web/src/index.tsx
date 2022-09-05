import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context";
import Provider from "provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { REACT_ROUTES } from "constants/constants";
import "styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContextProvider>
    <Provider>
      <Router>
        <Routes>
          {REACT_ROUTES.map((ROUTE) => (
            <Route path={ROUTE.PATH} element={ROUTE.ELEMENT} />
          ))}
        </Routes>
      </Router>
    </Provider>
  </AppContextProvider>
);
