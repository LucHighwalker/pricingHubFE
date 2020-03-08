import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route } from "react-router-dom";

import Title from "./components/title/title";
import Chart from "./components/chart/chart";
import Footer from "./components/footer/footer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Title />
          <div className="App_container">
            <Route path="/prices" component={Chart} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
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
