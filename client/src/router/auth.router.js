import Activate from '../apps/auth/Activate.jsx'
import Login from '../apps/auth/Login.jsx'
import ProfileCreated from '../apps/auth/ProfileCreated.jsx'
import Register from "../apps/auth/Register.jsx"
import ChangePassword from "../apps/auth/ChangePassword.jsx"
import ChangePasswordConfirm from "../apps/auth/ChangePasswordConfirm.jsx";

const authRoutes = [
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/success-register",
        Component: ProfileCreated
    },
    {
        path: "/activate/:uid/:token",
        Component: Activate
    },
    {
        path: "/change-password",
        Component: ChangePassword
    },
    {
        path: "/password/reset/confirm/:uid/:token",
        Component: ChangePasswordConfirm
    }
]

export default authRoutes