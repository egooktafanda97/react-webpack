import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Rute from "./Router/Router";
// import { config } from "./Constant/config";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// window.base_url = config.base_url;

class App extends Component {
  render() {
    return <div>ok</div>;
  }
}

render(<App />, document.getElementById("root"));
