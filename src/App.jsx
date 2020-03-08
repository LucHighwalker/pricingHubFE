import React, { Component } from "react";
import { connect } from "react-redux";

import Title from "./components/title/title"
import Chart from "./components/chart/chart";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Title />
				<Chart />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// your dispatches go here.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
