import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<GlobalStyles />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</>
);
