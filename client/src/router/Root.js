import { createBrowserRouter } from "react-router-dom"
import App from "../pages/App"
import HomePage from "../pages/principal/Home"

const Root = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                exact: true,
                Component: HomePage
            }
        ]
    }
])

export default Root