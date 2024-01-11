import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import authRoutes from "./auth.login.js";
import principalRoutes from './principal.router.js';

const Root = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            ...Array.from(authRoutes),
            ...Array.from(principalRoutes)
        ]
    }
])

export default Root