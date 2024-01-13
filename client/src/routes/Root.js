import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import authRoutes from "./auth.router.js";
import principalRoutes from './principal.router.js';
import inventarioRoutes from './inventario.routes.js';

const Root = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            ...Array.from(authRoutes),
            ...Array.from(principalRoutes),
            ...Array.from(inventarioRoutes)
        ]
    }
])

export default Root