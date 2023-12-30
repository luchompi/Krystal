import { useEffect, useState } from "react";
import EventEmitter from "../../helpers/EventEmitter";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const InventarioForm = ({ producto }) => {
  const [data, setData] = useState({
    nombre: producto?.nombre || "",
    cantidad: producto?.cantidad || 0,
    precio: producto?.precio || 0,
    precio_venta: producto?.precio_venta || 0,
  });
  const [porcentaje, setPorcentaje] = useState(0);
  const [precio_unitario, setPrecioUnitario] = useState(0);

  useEffect(() => {
    setPorcentaje(
      parseFloat((data.precio_venta / data.precio) * 100).toFixed(2)
    );
    setPrecioUnitario(data.precio / data.cantidad);
  }, [data]);

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    producto
      ? EventEmitter.emit("onUpdate", data)
      : EventEmitter.emit("onSave", data);
  };
  return (
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
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">
              Producto <i className="ri-user-line"></i>
            </label>
            <input
              type="text"
              className="form-control form-control-border"
              id="nombre"
              placeholder="Ingrese nombre del producto"
              name="nombre"
              onInput={handleInput}
              required={!producto}
              value={data.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cantidad">
              Cantidad <i className="ri-stack-line"></i>
            </label>
            <input
              type="number"
              className="form-control form-control-border"
              id="cantidad"
              placeholder="Ingrese la cantidad"
              name="cantidad"
              min={0}
              onInput={handleInput}
              required={!producto}
              value={data.cantidad}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="precio">
                  Precio <i className="ri-money-dollar-circle-line"></i>
                </label>
                <input
                  type="number"
                  className="form-control form-control-border"
                  id="precio"
                  placeholder="Ingrese el precio"
                  name="precio"
                  min={0}
                  onInput={handleInput}
                  required={!producto}
                  value={data.precio}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="precio_venta">
                  Precio de venta{" "}
                  <i className="ri-money-dollar-circle-line"></i>
                </label>
                <input
                  type="number"
                  className="form-control form-control-border"
                  id="precio_venta"
                  placeholder="Ingrese el precio de venta"
                  name="precio_venta"
                  onInput={handleInput}
                  required={!producto}
                  value={data.precio_venta}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Porcentaje de ganancia:
                <span className="badge badge-success">{porcentaje || 0}%</span>
              </p>
            </div>
            <div className="col">
              <p>
                Precio unitario:
                <span className="badge badge-success">
                  ${precio_unitario || 0} COP
                </span>
              </p>
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Guardar <i className="ri-save-3-line"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

InventarioForm.propTypes = {
  producto: PropTypes.object,
};

export default InventarioForm;
