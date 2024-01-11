import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

const Root = createBrowserRouter([
    {
        path: '/',
        component: App,
    }
])

export default Root