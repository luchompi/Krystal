import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider } from "react-router-dom";
import Root from "./router/Root.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Root} />
  </React.StrictMode>
);
