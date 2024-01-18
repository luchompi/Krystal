import * as XLSX from 'xlsx';
import inventarioStore from '../../stores/inventario.store';
import CardLayout from '../../layouts/CardLayout';
import Chart from '../../assets/json/Chart.json';
import { Link } from 'react-router-dom';
import InventarioHook from '../../hooks/InventarioHook';
import { RedirectIfAuthRequired } from '../../hooks/SesionRedirector.jsx';

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
                          <Link
                            to={`/inventario/editar/${item.id}`}
                            type="button"
                            className="btn btn-warning"
                          >
                            <i className="ri-pencil-line"></i>
                          </Link>
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
  RedirectIfAuthRequired();
  const { inventario } = inventarioStore((state) => state);
  let wb = XLSX.utils.book_new();
  wb.Props = {
    Title: 'Inventario',
    Subject: 'Inventario',
    Author: 'Sistema de inventario',
    CreatedDate: new Date().toLocaleString(),
  };
  wb.SheetNames.push('Inventario', 'Inventario general');
  let ws_data = [];
  let ws_general = [];
  ws_data.push(['Código', 'Nombre', 'Cantidad', 'Stock']);
  ws_general.push([
    'Cod',
    'Nombre',
    'Cantidad',
    'Precio',
    'Unidad',
    'Venta',
    'Ganancia',
  ]);
  inventario.forEach((item) => {
    ws_data.push([item.id, item.nombre, item.cantidad]);
    ws_general.push([
      item.id,
      item.nombre,
      item.cantidad,
      item.precio,
      item.precio_unitario,
      item.precio_venta,
      item.ganancia,
    ]);
  });
  let ws = XLSX.utils.aoa_to_sheet(ws_data);
  wb.Sheets['Inventario'] = ws;
  wb.Sheets['Inventario general'] = XLSX.utils.aoa_to_sheet(ws_general);
  return (
    <>
      <div className="card-tools">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link
            to={`/inventario/nuevo`}
            type="button"
            className="btn btn-outline-primary"
          >
            Añadir
            <i className="ri-file-add-line"></i>
          </Link>
          <button
            onClick={() => {
              XLSX.writeFile(wb, 'Inventario.xlsx');
            }}
            type="button"
            className="btn btn-outline-success"
          >
            Exportar
            <i className="ri-file-download-line"></i>
          </button>

          <Link
            to={`/inventario/actualizar-por-archivo`}
            type="button"
            className="btn btn-outline-info"
          >
            Actualización masiva
            <i className="ri-file-upload-line"></i>
          </Link>
        </div>
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
        header={'Listado de elementos'}
        cardTools={<NavButtons />}
        component={<ListComponent />}
      />
    </div>
  );
};

export default List;
