import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
