import 'react-dates/initialize';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';
import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
