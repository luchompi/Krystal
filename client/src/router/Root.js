import {createBrowserRouter} from "react-router-dom";
import App from "../apps/App.jsx";
import principalRoutes from "./principal.router.js";
import authRoutes from "./auth.router.js";
import inventarioRoutes from "./inventario.routes.js";


const Root = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            ...Array.from(principalRoutes),
            ...Array.from(authRoutes),
            ...Array.from(inventarioRoutes)
        ]
    },
])

export default Root;