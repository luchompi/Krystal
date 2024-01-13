import List from "../pages/inventario/List";
import Create from "../pages/inventario/Create";
const inventarioRoutes = [
    {
        path: "/inventario",
        Component: List,
        exact: true
    },
    {
        path: "/inventario/nuevo",
        Component: Create,
    }
]

export default inventarioRoutes;