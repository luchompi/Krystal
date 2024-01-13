import {useParams} from "react-router-dom";
import CardLayout from "../../layouts/CardLayout";
import EditDocument from "../../assets/json/EditDocument.json";
import inventarioStore from "../../stores/inventario.store";
import Form from "./Form";
import {useEffect} from "react";
import EventEmitter from "../../services/EventEmitter";
import InventarioHook from "../../hooks/InventarioHook";
import {RedirectIfAuthRequired} from "../../hooks/SesionRedirector.jsx";

const UpdateComponent = () => {
    const {id} = useParams();
    const {inventario} = inventarioStore((state) => state);
    const producto = inventario.find((item) => item.id === parseInt(id));
    const {actualizarElemento} = InventarioHook();
    useEffect(() => {
        EventEmitter.addListener("update", (data) => {
            actualizarElemento(id, data);
        });
        return () => {
            EventEmitter.removeAllListeners("create");
        };
    }, []);
    return (
        <>
            <Form producto={producto}/>
        </>
    );
};

const Update = () => {
    RedirectIfAuthRequired()
    return (
        <div>
            <CardLayout
                title="Editar producto"
                header="Actualizar detalles de producto"
                component={<UpdateComponent/>}
                icon={EditDocument}
            />
        </div>
    );
};

export default Update;
