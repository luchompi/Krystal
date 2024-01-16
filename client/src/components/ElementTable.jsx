import PropTypes from "prop-types";
import InventarioHook from "../hooks/InventarioHook";
const ElementTable = ({ data }) => {
  const { actualizacionGeneral } = InventarioHook();
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Elementos cargados</h4>
          <div className="card-tools">
            <button
              className="btn btn-success"
              onClick={() => {
                actualizacionGeneral(data);
              }}
            >
              Procesar
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="card-text">
            <table className="table table-hover table-stripped">
              <thead>
                <tr>
                  <th>Cód.</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Stock actual</th>
                </tr>
              </thead>
              <tbody>
                {data.map((element, index) => (
                  <tr key={index}>
                    <td>{element.Código}</td>
                    <td>{element.Nombre}</td>
                    <td>{element.Cantidad}</td>
                    <td>{element.Stock || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ElementTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ElementTable;
