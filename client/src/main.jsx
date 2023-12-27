import ReactDOM from "react-dom/client";
import "admin-lte/dist/css/adminlte.css";
import "admin-lte/dist/js/adminlte.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.js";
import "remixicon/fonts/remixicon.css";
import { RouterProvider } from "react-router-dom";
import Root from "./router/Root.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Root} />
);
