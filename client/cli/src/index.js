import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Orgchat from "./hooks/Orgchat";
import ParamsStorage from "./hooks/ParamsStorage";
import "./bootstrap.min.js";
import "./jquery-3.2.1.min.js";
import "./jquery.cookie.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<App />
		<Orgchat />
		<ParamsStorage />
	</div>
);
