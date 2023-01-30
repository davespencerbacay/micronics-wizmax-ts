import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context";
import Provider from "provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { REACT_ROUTES } from "constants/";
import "styles/index.scss";
import { ThemeContextProvider } from "context/ThemeContext";
import SmoothScroll from "layouts/SmoothScroll/SmoothScroll";
import ScrollToTop from "library/ScrollToTop/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    {/* <SmoothScroll /> */}
    <ThemeContextProvider>
      <AppContextProvider>
        <Provider>
          <Router>
            {/* <ScrollToTop /> */}
            <Routes>
              {REACT_ROUTES.map((ROUTE, index) => (
                <React.Fragment key={index}>
                  <Route path={ROUTE.PATH} element={ROUTE.ELEMENT} />
                </React.Fragment>
              ))}
            </Routes>
          </Router>
        </Provider>
      </AppContextProvider>
    </ThemeContextProvider>
  </React.Fragment>
);
