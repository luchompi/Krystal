import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register.jsx";

const authRoutes = [
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/register',
        Component: Register,
    }

]

export default authRoutes