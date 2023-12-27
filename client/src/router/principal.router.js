import PrincipalLayout from "../apps/principal/PrincipalLayout";
import Home from "../apps/principal/Home";
import Dasboard from "../apps/principal/Dasboard";

const principalRoutes = [
    {
        path: "/",
        Component: PrincipalLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/dashboard",
                Component: Dasboard
            }
        ]
    }
];

export default principalRoutes;