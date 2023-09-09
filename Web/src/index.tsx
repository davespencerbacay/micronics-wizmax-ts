import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context";
import Provider from "provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { REACT_ROUTES } from "constants/";
import { ThemeContextProvider } from "context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.Fragment>
		<ThemeContextProvider>
			<AppContextProvider>
				<Provider>
					<Router>
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
		<ToastContainer />
	</React.Fragment>
);
