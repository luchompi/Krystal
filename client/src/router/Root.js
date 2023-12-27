import { createBrowserRouter } from "react-router-dom";
import App from "../apps/App.jsx";
import principalRoutes from "./principal.router.js";
import authRoutes from "./auth.router.js";


const Root = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            ...Array.from(principalRoutes),
            ...Array.from(authRoutes),
        ]
    },
])

export default Root;