import Chart from "../../assets/json/Chart.json";
import CardLayout from "../../layouts/CardLayout.jsx";
import { Link } from "react-router-dom";
import inventarioStore from "../../store/inventario.store.js";
import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../../components/messages.js";
import { eliminarElemento } from "../../apis/inventario.apis.js";
import sesionStore from "../../store/sesion.store.js";

const List = () => {
  const { inventario, removeElement } = inventarioStore((state) => state);
  const { alterLoading } = sesionStore((state) => state);
  const deleteElemento = async (id) => {
    const ans = await confirmMessage(
      `Eliminar elemento con id ${id}`,
      "¿Está seguro de eliminar el elemento?",
      "Sí, eliminar",
      "No, cancelar"
    );
    if (ans) {
      alterLoading(true);

      await eliminarElemento(id)
        .then((Response) => {
          removeElement(id);
          successMessage("Elemento eliminado", "El elemento fue eliminado");
        })
        .catch((error) => {
          errorMessage(error.response.data);
        })
        .finally(() => {
          alterLoading(false);
        });
    }
  };
  return (
    <div>
      {/** Aqui va el componente de la tabla */}
      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">Elementos en sistema</h3>
          <div className="card-tools">
            <Link
              to={`/inventario/crear-elemento/`}
              type="button"
              className="btn btn-outline-success btn-tool"
            >
              Añadir... <i className="ri-add-line"></i>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Cod.</th>
                <th scope="col">Nombre</th>
                <th scope="col">Sotck</th>
                <th scope="col">Precio</th>
                <th scope="col">Valor unitario</th>
                <th scope="col">Precio de venta</th>
                <th scope="col">Ganancia</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {inventario.map((elemento, index) => (
                <tr key={index}>
                  <th scope="row">{elemento.id}</th>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.cantidad}</td>
                  <td>${elemento.precio}</td>
                  <td>${elemento.precio_unitario}</td>
                  <td>${elemento.precio_venta}</td>
                  <td>{elemento.ganancia}%</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-warning">
                        <i className="ri-pencil-line"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteElemento(elemento.id)}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const InventarioList = () => {
  return (
    <div className="col col-lg-11">
      <CardLayout
        header={"Inventario"}
        title={"Inventario de elementos"}
        icon={Chart}
        component={<List />}
      />
    </div>
  );
};

export default InventarioList;
