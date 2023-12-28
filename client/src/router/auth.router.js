import Activate from '../apps/auth/Activate.jsx'
import Login from '../apps/auth/Login.jsx'
import ProfileCreated from '../apps/auth/ProfileCreated.jsx'
import Register from "../apps/auth/Register.jsx"
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
    }
]

export default authRoutes