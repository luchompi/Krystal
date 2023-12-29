import sesionStore from "../store/sesion.store.js";
import inventarioStore from "../store/inventario.store.js";
import {useEffect} from "react";
import {obtenerDatosUsuario} from "../apis/auth.apis.js";
import {obtenerInventario} from "../apis/inventario.apis.js";
import {errorMessage} from "../components/messages.js";

const DataLoader = () => {
    const {isLogged, setUserData, alterLoading} = sesionStore((state) => state);
    const {setInventario} = inventarioStore((state) => state);
    useEffect(() => {
        isLogged ? fetchUserData() : null;
    }, []);

    const fetchInventarioData = async () => {
        await obtenerInventario()
            .then((response) => {
                setInventario(response.data)
            })
            .finally(() => {
                alterLoading(false)
            })
    }


    const fetchUserData = async () => {
        alterLoading(true)
        await obtenerDatosUsuario()
            .then((Response) => {
                setUserData(Response.data)
            })
            .then(() => {
                fetchInventarioData();
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
    };

}

export default DataLoader;