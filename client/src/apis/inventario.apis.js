import apiv1 from "./base.api.js";

export const obtenerInventario = () => {
    return apiv1.get("inventario/");
}

export const crearElemento = (elemento) => {
    return apiv1.post("inventario/", elemento);
}

export const eliminarElemento = (id) => {
    return apiv1.delete(`inventario/${id}/`);
}

export const actualizarElemento = (id, elemento) => {
    return apiv1.put(`inventario/${id}/`, elemento);
}