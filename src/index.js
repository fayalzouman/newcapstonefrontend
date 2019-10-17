import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// import "./assets/css/nucleo-icons.css";
// import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
// import "./assets/demo/demo.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
