import { useEffect } from "react";
import CardLayout from "../../layouts/CardLayout";
import EditDocument from "../../assets/json/EditDocument.json";
import InventarioForm from "./InventarioForm";
import { useNavigate, useParams } from "react-router-dom";
import inventarioStore from "../../store/inventario.store";
import EventEmitter from "../../helpers/EventEmitter";
import { actualizarElemento } from "../../apis/inventario.apis";
import { errorMessage, successMessage } from "../../components/messages";
import sesionStore from "../../store/sesion.store";
const InventarioUpdate = () => {
  const { id } = useParams();
  const { inventario, updateElement } = inventarioStore((state) => state);
  const { alterLoading } = sesionStore((state) => state);
  const producto = inventario.find((element) => element.id == id);
  const navigate = useNavigate();
  useEffect(() => {
    const onUpdateData = async (data) => {
      alterLoading(true);
      await actualizarElemento(id, data)
        .then((Response) => {
          updateElement(id, data);
          successMessage(
            "¡Hecho!",
            "El elemento se ha actualizado correctamente"
          );
          navigate("/inventario");
        })
        .catch((error) => {
          errorMessage(error.response.data);
        })
        .finally(() => {
          alterLoading(false);
        });
    };
    const listener = EventEmitter.addListener("onUpdate", onUpdateData);
    return () => {
      listener.remove();
    };
  });
  return (
    <div className="col col-lg-7">
      <CardLayout
        title={"Actualización de elemento"}
        header="Inventario - Actualizar inventario"
        icon={EditDocument}
        component={<InventarioForm producto={producto} />}
      />
    </div>
  );
};

export default InventarioUpdate;
