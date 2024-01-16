import List from "../pages/inventario/List";
import Create from "../pages/inventario/Create";
import Update from "../pages/inventario/Update";
import FileUpload from "../pages/inventario/FileUpload";

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
    },
    {
        path: "/inventario/actualizar-por-archivo",
        Component: FileUpload,
    }
]

export default inventarioRoutes;