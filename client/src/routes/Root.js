import {createBrowserRouter} from 'react-router-dom'

import App from '../App'
import authRoutes from "./auth.router.js";
import principalRoutes from './principal.router.js';
import inventarioRoutes from './inventario.routes.js';
import Error404 from "../pages/404.jsx";
import Error403 from "../pages/403.jsx";

const Root = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            ...Array.from(authRoutes),
            ...Array.from(principalRoutes),
            ...Array.from(inventarioRoutes),
            {
                path: '*',
                Component: Error404
            },
            {
                path: '/restricted',
                Component: Error403
            }
        ]
    }
])

export default Root