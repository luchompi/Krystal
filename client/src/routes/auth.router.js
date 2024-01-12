import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register.jsx";
import Activate from "../pages/auth/Activate.jsx";
import ForgotPassword from '../pages/auth/ForgotPassword.jsx';
import ResetPasswordConfirm from '../pages/auth/ResetPasswordConfirm.jsx';

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
    },
    {
        path: '/forgot-password',
        Component: ForgotPassword
    },
    {
        path: '/password/reset/confirm/:uid/:token',
        Component: ResetPasswordConfirm
    }
]

export default authRoutes