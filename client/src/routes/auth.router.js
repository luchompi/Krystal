import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register.jsx";
import Activate from "../pages/auth/Activate.jsx";

const authRoutes = [
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/register',
        Component: Register,
    },
    {
        path: '/activate/:uid/:token',
        Component: Activate
    }

]

export default authRoutes