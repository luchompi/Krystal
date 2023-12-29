import InventarioCreate from "../apps/inventario/InventarioCreate.jsx";
import InventarioList from "../apps/inventario/InventarioList.jsx";

const InventarioRoutes = [
    {
        path: "/inventario",
        Component: InventarioList,
    },
    {
        path: "/inventario/crear-elemento",
        Component: InventarioCreate,
    }
];

export default InventarioRoutes;