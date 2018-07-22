import React from "react";
import ReactDOM from "react-dom";
// load css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// untuk custom css
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
