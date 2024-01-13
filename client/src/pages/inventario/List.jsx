import React from "react";
import inventarioStore from "../../stores/inventario.store";
import CardLayout from "../../layouts/CardLayout";
import Chart from "../../assets/json/Chart.json";
import { Link } from "react-router-dom";
import InventarioHook from "../../hooks/InventarioHook";
const ListComponent = () => {
  const { inventario } = inventarioStore((state) => state);
  const { eliminarElemento } = InventarioHook();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Cód</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Costo</th>
                  <th scope="col">Precio unitario</th>
                  <th scope="col">Precio de Venta</th>
                  <th scope="col">Ganancia</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {inventario.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>$ {item.precio}</td>
                      <td>$ {item.precio_unitario}</td>
                      <td>$ {item.precio_venta}</td>
                      <td>{item.ganancia} %</td>
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
                            onClick={() => {
                              eliminarElemento(item.id);
                            }}
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const NavButtons = () => {
  return (
    <>
      <div className="card-tools">
        <Link
          to={`/inventario/nuevo`}
          type="button"
          className="btn btn-outline-primary"
        >
          Añadir
          <i className="ri-file-add-line"></i>
        </Link>
      </div>
    </>
  );
};

const List = () => {
  return (
    <div className="col col-lg-10">
      <CardLayout
        icon={Chart}
        title="Inventario General de elementos"
        header={"Listado de elementos"}
        cardTools={<NavButtons />}
        component={<ListComponent />}
      />
    </div>
  );
};

export default List;
