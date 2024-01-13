import List from "../pages/inventario/List";
import Create from "../pages/inventario/Create";
import Update from "../pages/inventario/Update";
const inventarioRoutes = [
    {
        path: "/inventario",
        Component: List,
        exact: true
    },
    {
        path: "/inventario/nuevo",
        Component: Create,
    },
    {
        path: "/inventario/editar/:id",
        Component: Update,
    }
]

export default inventarioRoutes;