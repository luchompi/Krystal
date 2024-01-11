import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Root from "./routes/Root.js";
import "admin-lte/dist/css/adminlte.css";
import "admin-lte/dist/js/adminlte.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.js";
import "remixicon/fonts/remixicon.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Root} />
  </React.StrictMode>
);
