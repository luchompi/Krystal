import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardLayout from "../../layouts/CardLayout";
import EditDocument from "../../assets/json/EditDocument.json";
import InventarioForm from "./InventarioForm";
import EventEmitter from "../../helpers/EventEmitter";
import { crearElemento } from "../../apis/inventario.apis";
import { errorMessage, successMessage } from "../../components/messages";
import sesionStore from "../../store/sesion.store";
const CreateComponent = () => {
  const { alterLoading } = sesionStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    const onSaveData = (data) => {
      alterLoading(true);
      crearElemento(data)
        .then((Response) => {
          successMessage("Hecho", "Resitro creado con éxito");
          navigate("/inventario");
          alterLoading(false);
        })
        .catch((error) => {
          errorMessage(error.response.data);
        })
        .finally(() => {
          alterLoading(false);
        });
    };

    const listener = EventEmitter.addListener("onSave", onSaveData);
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      {/** Aqui va el componente de la tabla */}
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Formulario de creación de elementos</h3>
          <div className="card-tools">
            <Link
              to={`/inventario`}
              type="button"
              className="btn btn-outline-success btn-tool"
            >
              Atrás... <i className="ri-arrow-left-circle-line"></i>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <InventarioForm />
        </div>
      </div>
    </>
  );
};

const InventarioCreate = () => {
  return (
    <div className="col col-lg-8">
      <CardLayout
        header="Crear elemento"
        title="Ingrese los datos del elemento a crear"
        icon={EditDocument}
        component={<CreateComponent />}
      />
    </div>
  );
};

export default InventarioCreate;
