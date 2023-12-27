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
    }
]

export default authRoutes