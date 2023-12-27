import React from "react";
import {RedirectIfAuthRequired} from "../../middleware/SesionMiddleware.jsx";

const Dasboard = () => {
    RedirectIfAuthRequired();
    document.title = "Dashboard | Krystal App"
    return <div>Bienvenido</div>;
};

export default Dasboard;
