import InventarioCreate from "../apps/inventario/InventarioCreate.jsx";
import InventarioList from "../apps/inventario/InventarioList.jsx";
import InventarioUpdate from "../apps/inventario/InventarioUpdate.jsx";

const InventarioRoutes = [
    {
        path: "/inventario",
        Component: InventarioList,
    },
    {
        path: "/inventario/crear-elemento",
        Component: InventarioCreate,
    },
    {
        path: "/inventario/editar-elemento/:id",
        Component: InventarioUpdate,
    }
];

export default InventarioRoutes;